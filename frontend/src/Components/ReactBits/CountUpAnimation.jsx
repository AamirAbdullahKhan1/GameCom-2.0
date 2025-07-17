"use client"

import { useState, useEffect, useRef } from "react"

const CountUpAnimation = ({
  end,
  start = 0,
  duration = 2000,
  suffix = "",
  prefix = "",
  separator = "",
  decimals = 0,
}) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const startValue = start
    const endValue = end

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = startValue + (endValue - startValue) * easeOutQuart

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, start, end, duration])

  const formatNumber = (num) => {
    const rounded = Math.floor(num * Math.pow(10, decimals)) / Math.pow(10, decimals)
    return separator ? rounded.toLocaleString() : rounded.toString()
  }

  return (
    <span ref={countRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export default CountUpAnimation
