import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-300",
        hoverEffect && "hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-200/50 hover:bg-white/50",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
