'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MotionWrapperProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'blur'
    once?: boolean
}

export function MotionWrapper({
    children,
    className,
    delay = 0,
    duration = 0.6,
    animation = 'fade-up',
    once = true,
}: MotionWrapperProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (once) observer.disconnect()
                } else if (!once) {
                    setIsVisible(false)
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [once])

    const animationStyles = {
        'fade-up': {
            initial: 'translate-y-8 opacity-0',
            animate: 'translate-y-0 opacity-100',
        },
        'fade-down': {
            initial: '-translate-y-8 opacity-0',
            animate: 'translate-y-0 opacity-100',
        },
        'fade-left': {
            initial: 'translate-x-8 opacity-0',
            animate: 'translate-x-0 opacity-100',
        },
        'fade-right': {
            initial: '-translate-x-8 opacity-0',
            animate: 'translate-x-0 opacity-100',
        },
        scale: {
            initial: 'scale-95 opacity-0',
            animate: 'scale-100 opacity-100',
        },
        blur: {
            initial: 'blur-sm opacity-0',
            animate: 'blur-0 opacity-100',
        },
    }

    return (
        <div
            ref={ref}
            className={cn(
                'transition-all ease-out',
                isVisible ? animationStyles[animation].animate : animationStyles[animation].initial,
                className
            )}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`,
            }}
        >
            {children}
        </div>
    )
}

interface StaggerContainerProps {
    children: ReactNode
    className?: string
    staggerDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
    return (
        <div className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <MotionWrapper key={index} delay={index * staggerDelay}>
                        {child}
                    </MotionWrapper>
                ))
                : children}
        </div>
    )
}
