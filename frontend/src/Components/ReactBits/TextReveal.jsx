"use client"

import { useEffect, useState, useRef } from "react"

const TextReveal = ({ text, className = "", delay = 0, duration = 0.8, stagger = 0.05 }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const words = text.split(" ")

  return (
    <div ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className={`inline-block transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
              }`}
              style={{
                transitionDelay: `${(wordIndex * word.length + charIndex) * stagger}s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  )
}

export default TextReveal
