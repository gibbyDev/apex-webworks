"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface GlassmorphicHovercardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlassmorphicHovercard({
  children,
  className,
  glowColor = "rgba(59, 130, 246, 0.5)", // Default blue glow
}: GlassmorphicHovercardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        setMousePosition({ x, y })

        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -15 // Max 15 degrees
        const rotateY = ((x - centerX) / centerX) * 15 // Max 15 degrees

        setTilt({ x: rotateX, y: rotateY })
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener("mousemove", handleMouseMove)
      return () => card.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl p-6 transition-all duration-300 ease-out bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] dark:bg-white/5 dark:border-white/10 transform-gpu ${className || ""}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute pointer-events-none transition-opacity duration-300 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        }}
      />

      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 bg-gradient-to-r from-white/20 via-transparent to-white/20 ${isHovered ? "opacity-100" : "opacity-0"}`}
        style={{
          background: `linear-gradient(45deg, ${glowColor}20, transparent, ${glowColor}20)`,
        }}
      />

      <div className="relative z-10">{children}</div>

      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

