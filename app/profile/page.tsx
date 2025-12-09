"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProfilePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#1a0f3e] to-[#0f1a3e]">
      {/* Moonlit Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.2),transparent_50%)]" />

      {/* Sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-purple-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen px-4 py-12">
        <div className="mx-auto max-w-2xl">
          {/* Header with Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <div className="mb-6 flex justify-center">
              <motion.div
                className="relative h-32 w-32 rounded-full border-4 border-purple-400/30 bg-gradient-to-br from-purple-400/20 to-violet-600/20 p-1 shadow-2xl"
                style={{
                  boxShadow: "0 0 60px rgba(139, 92, 246, 0.4)",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-violet-600 text-4xl text-white">
                  👤
                </div>
              </motion.div>
            </div>

            <h1 className="mb-2 text-3xl font-bold text-white/90">Your Storyteller Identity</h1>
            <div className="flex items-center justify-center gap-2 text-lg text-purple-200/70">
              <span>🌙</span>
              <span>🪶</span>
              <span>⭐</span>
              <span>✨</span>
            </div>
          </motion.div>

          {/* Profile Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-2xl border border-purple-300/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            style={{
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.15)",
            }}
          >
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-purple-100/80">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Your Name"
                  className="mt-2 border-purple-300/30 bg-white/5 text-white"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-purple-100/80">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="you@example.com"
                  className="mt-2 border-purple-300/30 bg-white/5 text-white"
                />
              </div>

              <div>
                <Label htmlFor="bio" className="text-purple-100/80">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  className="mt-2 min-h-24 border-purple-300/30 bg-white/5 text-white placeholder:text-purple-200/40"
                  defaultValue="A storyteller wandering through moonlit pages..."
                />
              </div>

              <Button
                className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 py-6 text-white hover:from-purple-500 hover:to-violet-500"
                style={{
                  boxShadow: "0 4px 24px rgba(167, 139, 250, 0.3)",
                }}
              >
                Edit My Chapter
              </Button>
            </div>
          </motion.div>

          {/* Footer Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="font-serif italic text-purple-200/60">Your voice shapes the story</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
