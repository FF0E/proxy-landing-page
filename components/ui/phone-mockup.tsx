import Image from "next/image"
import { cn } from "@/lib/utils"

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneMockup({ src, alt, className, priority = false }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto",
        "w-[280px] sm:w-[320px] md:w-[360px]",
        className
      )}
    >
      {/* Phone Frame - Basic style without notch */}
      <div className="relative rounded-[2.5rem] border-[8px] border-gray-900 dark:border-gray-800 bg-gray-900 dark:bg-gray-800 shadow-2xl overflow-hidden">
        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-black">
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
            priority={priority}
            unoptimized
          />
        </div>
      </div>

      {/* Reflection Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
    </div>
  )
}

interface PhoneMockupSmallProps {
  src: string
  alt: string
  className?: string
}

export function PhoneMockupSmall({ src, alt, className }: PhoneMockupSmallProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[240px]",
        className
      )}
    >
      {/* Phone Frame */}
      <div className="relative rounded-[1.5rem] border-[6px] border-gray-900 dark:border-gray-800 bg-gray-900 dark:bg-gray-800 shadow-xl overflow-hidden">
        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.25rem] bg-black">
          <Image
            key={src}
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="240px"
            unoptimized
          />
        </div>
      </div>

      {/* Reflection Effect */}
      <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
    </div>
  )
}
