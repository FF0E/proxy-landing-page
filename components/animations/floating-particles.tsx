'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface Particle {
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
    opacity: number
}

interface FloatingParticlesProps {
    count?: number
    className?: string
}

export function FloatingParticles({ count = 50, className }: FloatingParticlesProps) {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * -20,
            opacity: Math.random() * 0.5 + 0.1,
        }))
        setParticles(newParticles)
    }, [count])

    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-to-br from-cyan-400/40 to-violet-400/40 animate-float-particle"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}
        </div>
    )
}

export function GlowingOrbs({ className }: { className?: string }) {
    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
            {/* Primary orb */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-orb-float" />

            {/* Secondary orb */}
            <div
                className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/30 rounded-full blur-3xl animate-orb-float"
                style={{ animationDelay: '-5s' }}
            />

            {/* Accent orb */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-500/25 rounded-full blur-3xl animate-pulse-glow"
            />
        </div>
    )
}
