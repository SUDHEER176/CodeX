"use client"

import React, { useEffect, useState } from "react"
import { AnimatedCircularProgressBar } from "@/components/ui/animated-circular-progress-bar"

export function AnimatedCircularProgressBarDemo() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev >= 100) {
        return 0
      }
      return prev + 10
    }
    setValue(handleIncrement)
    const interval = setInterval(() => setValue(handleIncrement), 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 glass-panel rounded-2xl">
      <h3 className="text-sm font-bold text-slate-300">Animated Circular Progress Bar</h3>
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="#22c55e"
        gaugeSecondaryColor="rgba(255, 255, 255, 0.1)"
      />
    </div>
  )
}

export default AnimatedCircularProgressBarDemo
