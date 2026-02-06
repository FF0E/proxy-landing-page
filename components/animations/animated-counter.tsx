'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
    end: number | string
    duration?: number
    className?: string
    suffix?: string
    prefix?: string
}

export function AnimatedCounter({
    end,
    duration = 2,
    className,
    suffix = '',
    prefix = '',
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    // Parse numeric value from end prop
    const numericEnd = typeof end === 'string'
        ? parseFloat(end.replace(/[^0-9.]/g, '')) || 0
        : end

    // Extract suffix from string if not provided
    const extractedSuffix = typeof end === 'string'
        ? end.replace(/[0-9.,]/g, '').trim() || suffix
        : suffix

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.3 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * numericEnd))

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            } else {
                setCount(numericEnd)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [hasStarted, numericEnd, duration])

    const formatNumber = (num: number) => {
        if (numericEnd >= 1000) {
            return num.toLocaleString()
        }
        return num.toString()
    }

    return (
        <span ref={ref} className={className}>
            {prefix}{formatNumber(count)}{extractedSuffix}
        </span>
    )
}
