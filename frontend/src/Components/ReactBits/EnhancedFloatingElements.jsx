"use client"

import { useEffect, useState } from "react"
import { Code, Camera, Palette, Gamepad2, Megaphone, Star, Zap, Heart, Trophy, Target } from "lucide-react"

const EnhancedFloatingElements = ({ count = 15, className = "" }) => {
  const [elements, setElements] = useState([])

  const icons = [Code, Camera, Palette, Gamepad2, Megaphone, Star, Zap, Heart, Trophy, Target]
  const colors = [
    "text-blue-400/20",
    "text-purple-400/20",
    "text-green-400/20",
    "text-red-400/20",
    "text-yellow-400/20",
    "text-pink-400/20",
    "text-cyan-400/20",
    "text-indigo-400/20",
  ]

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)]
      const color = colors[Math.floor(Math.random() * colors.length)]

      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 15, // 15-35px
        duration: Math.random() * 20 + 15, // 15-35s
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
        Icon: IconComponent,
        color: color,
        rotationSpeed: Math.random() * 360 + 180, // 180-540 degrees
        floatDistance: Math.random() * 50 + 25, // 25-75px
      }
    })
    setElements(newElements)
  }, [count])

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`} style={{ zIndex: 1 }}>
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animation: `
              float-${element.id} ${element.duration}s ease-in-out infinite,
              rotate-${element.id} ${element.rotationSpeed}s linear infinite,
              pulse-${element.id} ${element.duration * 0.5}s ease-in-out infinite alternate
            `,
            animationDelay: `${element.delay}s`,
          }}
        >
          <element.Icon
            className={`${element.color} transition-all duration-1000`}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              opacity: element.opacity,
              filter: "blur(0.5px)",
            }}
          />
        </div>
      ))}

      {/* Dynamic CSS animations */}
      <style jsx>{`
        ${elements
          .map(
            (element) => `
          @keyframes float-${element.id} {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-${element.floatDistance}px) translateX(${element.floatDistance * 0.5}px); }
            50% { transform: translateY(-${element.floatDistance * 0.3}px) translateX(-${element.floatDistance * 0.7}px); }
            75% { transform: translateY(-${element.floatDistance * 0.8}px) translateX(${element.floatDistance * 0.3}px); }
          }
          
          @keyframes rotate-${element.id} {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse-${element.id} {
            0% { opacity: ${element.opacity}; transform: scale(1); }
            100% { opacity: ${element.opacity * 1.5}; transform: scale(1.1); }
          }
        `,
          )
          .join("")}
      `}</style>
    </div>
  )
}

export default EnhancedFloatingElements
