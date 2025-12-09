"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    setSent(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#1a0f3e] to-[#0f1a3e]">
      {/* Moonlit Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* Stars */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Floating Emojis */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        >
          {["🕯️", "🌙", "✨"][i % 3]}
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
              Let's Light Your Way Back
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-purple-200/80"
            >
              Enter your email, we'll send you a reset link
            </motion.p>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-2xl border border-purple-300/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            style={{
              boxShadow: "0 0 50px rgba(139, 92, 246, 0.2)",
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
                  boxShadow: "0 4px 24px rgba(167, 139, 250, 0.3)",
                }}
              >
                Send Reset Link
              </Button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-purple-200/80 text-sm"
                >
                  Check your email for the reset link!
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Personal Touch */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="font-serif italic text-purple-200/60 text-lg">
              You're not lost
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
