"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // In a real app, this would validate credentials
    window.location.href = "/dashboard"
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#1a0f3e] to-[#0f1a3e]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/soft-dreamy-purple-blue-gradient-sky-with-golden-a.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [100, -100],
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {["🌙", "✨", "🪶", "⭐", "🕯️"][i % 5]}
        </motion.div>
      ))}

      {/* Glowing Moon */}
      <motion.div
        className="absolute right-12 top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-2 text-4xl font-bold text-white/90"
            >
              Welcome Back
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-center gap-2 text-lg text-purple-200/80"
            >
              Your story continues here 🌙
            </motion.p>
          </div>

          {/* Login Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-2xl border border-purple-300/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            style={{
              boxShadow: "0 0 40px rgba(167, 139, 250, 0.15)",
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

              <div>
                <Label htmlFor="password" className="text-purple-100/80">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 border-purple-300/30 bg-white/5 text-white placeholder:text-purple-200/40"
                  placeholder="Enter your password"
                />
              </div>

              <Button
                onClick={handleLogin}
                className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 py-6 text-white hover:from-purple-500 hover:to-violet-500"
                style={{
                  boxShadow: "0 4px 24px rgba(167, 139, 250, 0.3)",
                }}
              >
                Enter Your World
              </Button>

              <div className="text-center">
                <Link
                  href="/forgot-password"
                  className="text-sm text-purple-200/60 hover:text-purple-200 underline decoration-purple-300/30 hover:decoration-purple-300/60 transition-all"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            {/* Social Sign-In */}
            <div className="mt-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
                <span className="text-sm text-purple-200/60">Or continue under the stars</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent" />
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => window.location.href = "/dashboard"}
                  variant="outline"
                  className="w-full border-purple-300/30 bg-white/5 text-purple-100 hover:bg-white/10"
                >
                  Continue with Google
                </Button>
                <Button
                  onClick={() => window.location.href = "/dashboard"}
                  variant="outline"
                  className="w-full border-purple-300/30 bg-white/5 text-purple-100 hover:bg-white/10"
                >
                  Continue with Apple
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Sign-Up Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-center"
          >
            <p className="text-purple-200/70">
              New here?{" "}
              <Link
                href="/signup"
                className="font-medium text-purple-300 hover:text-purple-200 transition-colors"
                style={{
                  textShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
                }}
              >
                Start your story
              </Link>
            </p>
          </motion.div>

          {/* Magic Link option */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-4 text-center"
          >
            <p className="text-purple-200/70">
              Prefer magic?{" "}
              <Link
                href="/magic-link"
                className="font-medium text-purple-300 hover:text-purple-200 transition-colors"
              >
                Get a magic link
              </Link>
            </p>
          </motion.div>

          {/* Personal Touch */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="font-serif italic text-purple-200/50 text-sm flex items-center justify-center gap-2">
              Even the night has stories to tell 🪶
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 z-10 text-center">
        <p className="text-sm text-purple-200/40">
          Once Upon an Image · Wander into your next chapter
        </p>
      </div>
    </div>
  )
}
