'use client'

import { cn } from '@/lib/utils'

interface HeroBackgroundProps {
    className?: string
}

export function HeroBackground({ className }: HeroBackgroundProps) {
    return (
        <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)} aria-hidden="true">
            {/* Animated Gradient Mesh */}
            <div className="absolute inset-0 hero-gradient-mesh" />

            {/* Animated Aurora Waves */}
            <div className="absolute inset-0 hero-aurora" />

            {/* Cyber Grid */}
            <div className="absolute inset-0 hero-cyber-grid" />

            {/* Radial Glow */}
            <div className="absolute inset-0 hero-radial-glow" />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 hero-noise opacity-[0.02] dark:opacity-[0.04]" />

            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_-10%,transparent_40%,var(--background)_100%)]" />
        </div>
    )
}

export function AnimatedBeams({ className }: { className?: string }) {
    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden="true">
            {/* Horizontal scanning beam */}
            <div className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-scan-horizontal shadow-[0_0_30px_4px] shadow-cyan-400/50" />

            {/* Vertical scanning beams */}
            <div className="absolute top-0 bottom-0 w-[2px] left-1/4 bg-gradient-to-b from-transparent via-violet-400/60 to-transparent animate-scan-vertical shadow-[0_0_20px_2px] shadow-violet-400/40" style={{ animationDelay: '0s' }} />
            <div className="absolute top-0 bottom-0 w-[2px] left-1/2 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-scan-vertical shadow-[0_0_20px_2px] shadow-cyan-400/40" style={{ animationDelay: '-2s' }} />
            <div className="absolute top-0 bottom-0 w-[2px] left-3/4 bg-gradient-to-b from-transparent via-fuchsia-400/60 to-transparent animate-scan-vertical shadow-[0_0_20px_2px] shadow-fuchsia-400/40" style={{ animationDelay: '-4s' }} />
        </div>
    )
}

export function FloatingShapes({ className }: { className?: string }) {
    return (
        <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)} aria-hidden="true">
            {/* Geometric shapes */}
            <div className="absolute top-20 left-[10%] w-40 h-40 border-2 border-cyan-400/30 rounded-full animate-float-shape shadow-[0_0_40px_-5px] shadow-cyan-400/30" style={{ animationDelay: '0s' }} />
            <div className="absolute top-40 right-[15%] w-28 h-28 border-2 border-violet-400/30 rotate-45 animate-float-shape shadow-[0_0_35px_-5px] shadow-violet-400/30" style={{ animationDelay: '-3s' }} />
            <div className="absolute bottom-32 left-[20%] w-20 h-20 border-2 border-fuchsia-400/30 rounded-lg animate-float-shape shadow-[0_0_30px_-5px] shadow-fuchsia-400/30" style={{ animationDelay: '-6s' }} />
            <div className="absolute top-1/3 right-[25%] w-24 h-24 border-2 border-emerald-400/25 rounded-full animate-float-shape shadow-[0_0_35px_-5px] shadow-emerald-400/25" style={{ animationDelay: '-9s' }} />
            <div className="absolute bottom-1/3 right-[10%] w-16 h-16 border-2 border-amber-400/25 rounded-full animate-float-shape shadow-[0_0_25px_-5px] shadow-amber-400/25" style={{ animationDelay: '-5s' }} />
            <div className="absolute top-1/2 left-[5%] w-12 h-12 border-2 border-rose-400/25 rotate-12 animate-float-shape shadow-[0_0_20px_-5px] shadow-rose-400/25" style={{ animationDelay: '-7s' }} />

            {/* Glowing dots */}
            <div className="absolute top-1/4 left-[30%] w-4 h-4 bg-cyan-400/70 rounded-full blur-[4px] animate-pulse-glow" />
            <div className="absolute top-1/2 right-[20%] w-5 h-5 bg-violet-400/60 rounded-full blur-[4px] animate-pulse-glow" style={{ animationDelay: '-2s' }} />
            <div className="absolute bottom-1/4 left-[15%] w-4 h-4 bg-fuchsia-400/70 rounded-full blur-[4px] animate-pulse-glow" style={{ animationDelay: '-4s' }} />
            <div className="absolute top-[60%] left-[40%] w-3 h-3 bg-emerald-400/60 rounded-full blur-[3px] animate-pulse-glow" style={{ animationDelay: '-1s' }} />
            <div className="absolute top-[30%] right-[35%] w-3 h-3 bg-amber-400/60 rounded-full blur-[3px] animate-pulse-glow" style={{ animationDelay: '-3s' }} />
        </div>
    )
}
