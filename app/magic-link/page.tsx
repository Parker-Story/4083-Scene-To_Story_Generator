"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MagicLinkPage() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    setSent(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#1a0f3e] to-[#0f1a3e]">
      {/* Starry Sky */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Glowing Moon */}
      <motion.div
        className="absolute right-16 top-16 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-100/30 to-purple-200/30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      {/* Light Streaks */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${20 + i * 10}%`}
            y1="0%"
            x2={`${30 + i * 10}%`}
            y2="100%"
            stroke="rgba(167, 139, 250, 0.15)"
            strokeWidth="2"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              strokeWidth: [1, 3, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      {/* Floating Emojis */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 15, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${10 + i * 9}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
        >
          {["✨", "🪄", "📜", "🌙"][i % 4]}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-3 text-4xl font-bold text-white/90"
            >
              A Little Magic, Just for You
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-purple-200/80"
            >
              Enter your email and we'll send a magic link
            </motion.p>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-2xl border border-purple-300/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            style={{
              boxShadow: "0 0 60px rgba(139, 92, 246, 0.25)",
            }}
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-purple-100/80">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 border-purple-300/30 bg-white/5 text-white placeholder:text-purple-200/40"
                  placeholder="your.email@example.com"
                />
              </div>

              <Button
                onClick={handleSend}
                className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 py-6 text-white hover:from-purple-500 hover:to-violet-500"
                style={{
                  boxShadow: "0 4px 24px rgba(167, 139, 246, 0.4)",
                }}
              >
                Send Magic Link
              </Button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-purple-200/80 text-sm"
                >
                  Magic sent! Check your inbox.
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Whimsical Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="font-serif italic text-purple-200/60 text-base">
              A single tap opens your chapter
            </p>
          </motion.div>

          {/* Return Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <Link
              href="/login"
              className="text-purple-300 hover:text-purple-200 transition-colors"
              style={{
                textShadow: "0 0 20px rgba(167, 139, 250, 0.4)",
              }}
            >
              Return to Login
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
