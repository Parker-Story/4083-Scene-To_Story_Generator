"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [newsletter, setNewsletter] = useState(false)

  const handleSignUp = () => {
    // In a real app, this would create an account
    window.location.href = "/dashboard"
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#1a0f3e] to-[#0f1a3e]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/soft-dreamy-purple-blue-gradient-sky-with-golden-a.jpg"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Floating Emojis */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            y: [100, -100],
            x: [0, Math.sin(i) * 50],
          }}
          transition={{
            duration: Math.random() * 12 + 10,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {["🌙", "📜", "✨", "🕯️"][i % 4]}
        </motion.div>
      ))}

      {/* Star Trails */}
      <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="rgba(167, 139, 250, 0.3)"
            strokeWidth="1"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

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
              Begin Your Chapter
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-purple-200/80"
            >
              Every storyteller starts somewhere
            </motion.p>
          </div>

          {/* Sign-Up Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-2xl border border-purple-300/20 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
            style={{
              boxShadow: "0 0 40px rgba(167, 139, 250, 0.15)",
            }}
          >
            <div className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-purple-100/80">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 border-purple-300/30 bg-white/5 text-white placeholder:text-purple-200/40"
                  placeholder="Your storyteller name"
                />
              </div>

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
                  placeholder="Create a password"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-purple-100/80">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-2 border-purple-300/30 bg-white/5 text-white placeholder:text-purple-200/40"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={newsletter}
                  onCheckedChange={(checked) => setNewsletter(checked as boolean)}
                  className="border-purple-300/30"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-purple-200/70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send me story inspiration and updates
                </label>
              </div>

              <Button
                onClick={handleSignUp}
                className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 py-6 text-white hover:from-purple-500 hover:to-violet-500"
                style={{
                  boxShadow: "0 4px 24px rgba(167, 139, 250, 0.3)",
                }}
              >
                Create My Storybook
              </Button>
            </div>
          </motion.div>

          {/* Login Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-center"
          >
            <p className="text-purple-200/70">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-purple-300 hover:text-purple-200 transition-colors"
                style={{
                  textShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
                }}
              >
                Return to your world
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
            <p className="font-serif italic text-purple-200/50 text-sm">
              A new story begins with a name
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
