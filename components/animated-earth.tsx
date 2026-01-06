"use client"

export function AnimatedEarth() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.22),transparent_50%),radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_50%_60%,rgba(16,185,129,0.14),transparent_55%)] blur-3xl opacity-70" />
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 opacity-70 animate-[spin_60s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),rgba(255,255,255,0.05)40%,transparent_55%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.28),transparent_55%),conic-gradient(from_45deg,rgba(125,211,252,0.12),rgba(147,197,253,0.08),rgba(236,254,255,0.16),rgba(147,197,253,0.08),rgba(125,211,252,0.12))] shadow-[0_0_140px_rgba(79,70,229,0.25)] animate-[spin_90s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-sky-500/10 via-emerald-400/5 to-transparent opacity-60 blur-2xl" />
        </div>
    )
}
