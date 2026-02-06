'use client'

import { useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
    children: ReactNode
    className?: string
    strength?: number
}

export function MagneticButton({ children, className, strength = 0.3 }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const deltaX = (e.clientX - centerX) * strength
        const deltaY = (e.clientY - centerY) * strength

        setPosition({ x: deltaX, y: deltaY })
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <div
            ref={ref}
            className={cn('inline-block transition-transform duration-300 ease-out', className)}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </div>
    )
}

interface RippleButtonProps {
    children: ReactNode
    className?: string
    onClick?: () => void
}

export function RippleButton({ children, className, onClick }: RippleButtonProps) {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const newRipple = { x, y, id: Date.now() }
        setRipples((prev) => [...prev, newRipple])

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
        }, 600)

        onClick?.()
    }

    return (
        <button
            className={cn('relative overflow-hidden', className)}
            onClick={handleClick}
        >
            {children}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
        </button>
    )
}
