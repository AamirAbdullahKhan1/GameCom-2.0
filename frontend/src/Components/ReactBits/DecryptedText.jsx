"use client"

import { useState, useEffect, useRef } from "react"

const DecryptedText = ({
  text,
  className = "",
  delay = 500,
  duration = 1500,
  repeatInterval = 20000,
  scrambleSpeed = 50,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
}) => {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef(null)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const startDecryption = () => {
    if (isAnimating) return

    setIsAnimating(true)
    const originalText = text
    const targetText = originalText // Keep original case
    let currentText = Array(targetText.length)
      .fill("")
      .map((char, index) => {
        if (char === " ") return " "
        return characters[Math.floor(Math.random() * characters.length)]
      })

    setDisplayText(currentText.join(""))

    const totalSteps = Math.floor(duration / scrambleSpeed)
    const revealStep = Math.floor(totalSteps / targetText.length)

    let step = 0

    const animationInterval = setInterval(() => {
      const revealedChars = Math.floor(step / revealStep)

      currentText = currentText.map((char, index) => {
        if (index < revealedChars) {
          return targetText[index]
        } else if (index === revealedChars && step % 2 === 0) {
          return targetText[index]
        } else if (targetText[index] === " ") {
          return " "
        } else {
          return characters[Math.floor(Math.random() * characters.length)]
        }
      })

      setDisplayText(currentText.join(""))
      step++

      if (step >= totalSteps) {
        setDisplayText(originalText) 
        clearInterval(animationInterval)
        setIsAnimating(false)
      }
    }, scrambleSpeed)
  }

  useEffect(() => {
    if (!isVisible) return

    // Initial animation after delay
    timeoutRef.current = setTimeout(() => {
      startDecryption()

      // Set up repeating animation
      intervalRef.current = setInterval(() => {
        startDecryption()
      }, repeatInterval)
    }, delay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isVisible, text, delay, duration, repeatInterval, scrambleSpeed, characters])

  return (
    <span ref={textRef} className={`font-mono ${className}`}>
      {displayText}
    </span>
  )
}

export default DecryptedText
