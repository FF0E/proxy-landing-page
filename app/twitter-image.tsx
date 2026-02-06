import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/config'

export const runtime = 'edge'

export const alt = `${siteConfig.site.name} - 安全VPN服务`
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                    position: 'relative',
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: 'absolute',
                        top: -100,
                        left: -100,
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'rgba(59, 130, 246, 0.05)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: -100,
                        right: -100,
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'rgba(139, 92, 246, 0.05)',
                    }}
                />

                {/* Shield Icon */}
                <svg
                    width="120"
                    height="140"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ marginBottom: 30 }}
                >
                    <defs>
                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
                        stroke="url(#shieldGrad)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 12l2 2 4-4"
                        stroke="url(#shieldGrad)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                {/* Brand Name */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 'bold',
                        color: '#ffffff',
                        marginBottom: 16,
                    }}
                >
                    {siteConfig.site.name}
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: 28,
                        color: '#94a3b8',
                        marginBottom: 40,
                    }}
                >
                    {siteConfig.site.description}
                </div>

                {/* Badge */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 32px',
                        borderRadius: 20,
                        background: 'rgba(59, 130, 246, 0.2)',
                    }}
                >
                    <span style={{ fontSize: 18, color: '#3b82f6' }}>
                        安全 · 快速 · 可靠
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
