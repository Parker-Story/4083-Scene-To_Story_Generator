"use client"

import { useScroll, useTransform, motion } from "framer-motion"

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll()

  // Transform scroll to move orbs at different speeds
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const orb1X = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.9])

  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const orb2X = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
  const orb2Opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 0.8, 0.6, 0.4])

  const orb3Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const orb3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.1])

  // Background color shifts from dark purple to slightly warmer tones
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["rgb(10, 10, 15)", "rgb(26, 15, 46)", "rgb(20, 10, 35)"],
  )

  return (
    <motion.div className="fixed inset-0 z-0 overflow-hidden" style={{ backgroundColor }}>
      {/* Orb 1 - Top left, purple */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(124, 58, 237, 0) 70%)",
          filter: "blur(80px)",
          y: orb1Y,
          x: orb1X,
          scale: orb1Scale,
        }}
      />

      {/* Orb 2 - Right side, violet */}
      <motion.div
        className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)",
          filter: "blur(100px)",
          y: orb2Y,
          x: orb2X,
          opacity: orb2Opacity,
        }}
      />

      {/* Orb 3 - Bottom center, indigo */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)",
          filter: "blur(90px)",
          y: orb3Y,
          scale: orb3Scale,
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  )
}
