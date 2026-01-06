'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface TextRevealProps {
    children: string
    className?: string
    delay?: number
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function TextReveal({
    children,
    className,
    delay = 0,
    as: Component = 'span'
}: TextRevealProps) {
    const ref = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const words = children.split(' ')

    return (
        <Component ref={ref as any} className={cn('inline-block', className)}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
                    <span
                        className={cn(
                            'inline-block transition-transform duration-700 ease-out',
                            isVisible ? 'translate-y-0' : 'translate-y-full'
                        )}
                        style={{
                            transitionDelay: `${delay + wordIndex * 0.05}s`,
                        }}
                    >
                        {word}
                    </span>
                </span>
            ))}
        </Component>
    )
}

interface TypewriterProps {
    text: string
    className?: string
    speed?: number
    delay?: number
}

export function Typewriter({ text, className, speed = 50, delay = 0 }: TypewriterProps) {
    const [displayText, setDisplayText] = useState('')
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        const timeout = setTimeout(() => {
            let currentIndex = 0
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayText(text.slice(0, currentIndex))
                    currentIndex++
                } else {
                    clearInterval(interval)
                }
            }, speed)

            return () => clearInterval(interval)
        }, delay)

        return () => clearTimeout(timeout)
    }, [hasStarted, text, speed, delay])

    return (
        <span ref={ref} className={className}>
            {displayText}
            <span className="animate-blink">|</span>
        </span>
    )
}

interface GradientTextProps {
    children: string
    className?: string
    from?: string
    via?: string
    to?: string
    animate?: boolean
}

export function GradientText({
    children,
    className,
    from = 'from-primary',
    via = 'via-chart-1',
    to = 'to-chart-2',
    animate = true
}: GradientTextProps) {
    return (
        <span
            className={cn(
                'bg-gradient-to-r bg-clip-text text-transparent',
                from, via, to,
                animate && 'animate-gradient bg-[length:200%_auto]',
                className
            )}
        >
            {children}
        </span>
    )
}
