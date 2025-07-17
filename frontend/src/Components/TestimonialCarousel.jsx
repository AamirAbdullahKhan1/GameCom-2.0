"use client"

import { useState, useEffect } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const TestimonialCarousel = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentTestimonial])

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentTestimonial) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentTestimonial(index)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 border border-gray-700 relative overflow-hidden">
        {/* Quote icon */}
        <div className="flex items-center justify-center mb-6">
          <Quote className="w-12 h-12 text-blue-400/50" />
        </div>

        {/* Testimonial content with smooth transition */}
        <div
          className={`text-center transition-all duration-300 ${
            isAnimating ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
          }`}
        >
          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed italic px-4">
            "{testimonials[currentTestimonial]?.content}"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <img
              src={testimonials[currentTestimonial]?.image || "/placeholder.svg"}
              alt={testimonials[currentTestimonial]?.name}
              className="w-16 h-16 rounded-full border-2 border-blue-400 object-cover"
            />
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-white text-lg">{testimonials[currentTestimonial]?.name}</h4>
              <p className="text-blue-400 text-sm">{testimonials[currentTestimonial]?.role}</p>
              <p className="text-gray-500 text-xs">{testimonials[currentTestimonial]?.year}</p>
            </div>
          </div>

          <div className="flex justify-center gap-1 mb-4">
            {[...Array(testimonials[currentTestimonial]?.rating || 5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/50 p-2 rounded-full transition-colors"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/50 p-2 rounded-full transition-colors"
          disabled={isAnimating}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Testimonial indicators */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial ? "bg-blue-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel
