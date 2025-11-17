"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function LoadingStoryPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode")
  const [error, setError] = useState<string | null>(null)

  
  // Soft floating dust particles - organic, not tech
  const dustVariants = {
    animate: (i: number) => ({
      y: [0, -120, -240],
      x: [0, Math.sin(i) * 20, Math.cos(i) * 30],
      opacity: [0, 0.6, 0],
      scale: [0.5, 1, 0.8],
      transition: {
        duration: 6 + i * 0.6, // Increased from 5 to 6 seconds
        repeat: Infinity,
        delay: i * 1, // Increased stagger
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  }

  // Heartbeat pulse for title
  const heartbeatVariants = {
    animate: {
      scale: [1, 1.015, 1], // Reduced from 1.02
      opacity: [0.4, 0.5, 0.4], // Reduced intensity
      transition: {
        duration: 3, // Increased from 2.5
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Full-screen cinematic background with warm sunset gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/dreamy-warm-sunset-sky-with-soft-clouds-and-golden.jpg')`,
          }}
        />
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Film grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
      </div>

      {/* Soft floating dust/sparkle particles - very organic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              left: `${10 + (i * 4.5)}%`,
              bottom: "0%",
              background: i % 3 === 0 ? "rgba(255, 215, 180, 0.6)" : "rgba(255, 255, 240, 0.5)",
              boxShadow: "0 0 4px rgba(255, 230, 200, 0.8)",
            }}
            variants={dustVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>

      {/* Soft pulsing glow behind title - like a heartbeat */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={heartbeatVariants}
        animate="animate"
      >
        <div
          className="w-[500px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(255, 200, 150, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Main centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-8 px-6 max-w-3xl">
        {/* Large warm title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-center text-white leading-tight"
        >
          Hold on, your story is taking shape,
        </motion.h1>

        {/* Warm subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl md:text-2xl text-white/80 text-center leading-relaxed"
        >
          Every good story needs a moment to breathe,
        </motion.p>

        {/* Handwritten-style quote */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-base md:text-lg text-amber-200/90 text-center italic font-serif"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          "Beautiful things take time,"
        </motion.p>

        {/* Personal touch line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-base text-white/70 text-center pt-6"
        >
          Thank you for being here,
        </motion.p>

        {/* Demo button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="pt-8"
        >
          <Button
            onClick={() => router.push("/story-result")}
            className="bg-amber-600/80 hover:bg-amber-500/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-900/30 transition-all hover:shadow-amber-900/50 backdrop-blur-sm border border-amber-400/30"
          >
            See Your Story
          </Button>
        </motion.div>
      </div>

      {/* Handwritten doodle in corner - tiny star */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-20 right-12 text-amber-300/40"
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 2 L22 18 L38 20 L22 22 L20 38 L18 22 L2 20 L18 18 Z" />
        </svg>
      </motion.div>

      {/* Footer whisper text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute bottom-8 text-center text-white/50 text-sm px-6"
      >
        Your moment is becoming a memory,
      </motion.div>
    </div>
  )
}
