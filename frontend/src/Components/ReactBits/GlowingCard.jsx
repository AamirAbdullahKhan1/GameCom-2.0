"use client"

import { useRef, useEffect, useState } from "react"

const GlowingCard = ({ children, className = "", glowColor = "blue", intensity = 0.3, disabled = false }) => {
  const cardRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const glowColors = {
    blue: "59, 130, 246",
    purple: "147, 51, 234",
    green: "34, 197, 94",
    red: "239, 68, 68",
    yellow: "245, 158, 11",
    pink: "236, 72, 153",
  }

  useEffect(() => {
    if (disabled) return

    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [disabled])

  const glowStyle =
    isHovered && !disabled
      ? {
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColors[glowColor]}, ${intensity}) 0%, transparent 50%)`,
        }
      : {}

  return (
    <div ref={cardRef} className={`relative ${className}`}>
      {!disabled && (
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-inherit"
          style={glowStyle}
        />
      )}
      {children}
    </div>
  )
}

export default GlowingCard
