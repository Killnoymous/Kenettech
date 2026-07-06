import React, { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

// --- EyebrowLabel Component ---
interface EyebrowLabelProps {
  children: React.ReactNode
  className?: string
}
export const EyebrowLabel: React.FC<EyebrowLabelProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* 22px horizontal line */}
      <span className="w-[22px] h-[1.5px] bg-[#DA7B93]" />
      <span
        className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#DA7B93]"
      >
        {children}
      </span>
    </div>
  )
}

// --- PanelCard Component ---
interface PanelCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}
export const PanelCard: React.FC<PanelCardProps> = ({
  children,
  className = "",
  onClick,
}) => {
  const isClickable = !!onClick

  return (
    <motion.div
      onClick={onClick}
      whileHover={
        isClickable
          ? { y: -3, borderColor: "#DA7B93" }
          : { borderColor: "#DA7B93" }
      }
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative bg-[#2F4454] border border-[#3E5A63] rounded-[6px] p-5 md:p-8 ${
        isClickable ? "cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}

// --- CountUp Component ---
interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
}
export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1.5,
  suffix = "",
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const steps = duration * 60
    const increment = end / steps
    const handle = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(handle)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(handle)
  }, [end, duration, isInView])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// --- StatBlock Component ---
interface StatBlockProps {
  number: number
  suffix?: string
  caption: string
  className?: string
}
export const StatBlock: React.FC<StatBlockProps> = ({
  number,
  suffix = "",
  caption,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="font-display text-4xl md:text-5xl font-medium text-[#DA7B93] leading-none">
        <CountUp end={number} suffix={suffix} />
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#A9BDBA] mt-1.5">
        {caption}
      </span>
    </div>
  )
}

// --- SectionWrapper Component ---
interface SectionWrapperProps {
  children: React.ReactNode
  bgType: "deep" | "alt" | "wine"
  id?: string
  className?: string
}
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  bgType,
  id,
  className = "",
}) => {
  let bgColor = "bg-[#1C3334]" // deep
  if (bgType === "alt") {
    bgColor = "bg-[#20393A]"
  } else if (bgType === "wine") {
    bgColor = "bg-[#2E151B]"
  }

  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 overflow-hidden ${bgColor} ${className}`}
    >
      {children}
    </section>
  )
}
