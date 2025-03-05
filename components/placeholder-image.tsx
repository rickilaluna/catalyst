"use client"

import { useState, useEffect } from "react"

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  bgColor?: string
  textColor?: string
  className?: string
}

export function PlaceholderImage({
  width,
  height,
  text = `${width}×${height}`,
  bgColor = "#e2e8f0",
  textColor = "#64748b",
  className = "",
}: PlaceholderImageProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Server-side rendering fallback
  if (!mounted) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{
          width: width,
          height: height,
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        {text}
      </div>
    )
  }

  // Client-side rendering with canvas
  return (
    <div className={className}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
        <rect width={width} height={height} fill={bgColor} />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={textColor}
          fontSize={Math.min(width, height) * 0.1}
          fontFamily="system-ui, sans-serif"
        >
          {text}
        </text>
      </svg>
    </div>
  )
}

