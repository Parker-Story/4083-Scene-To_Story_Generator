"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function DashboardPage() {
  const cards = [
    { title: "My Stories", emoji: "📖", href: "/story-result" },
    { title: "Create New Story", emoji: "✨", href: "/loading-story" },
    { title: "Profile", emoji: "🪶", href: "/profile" },
    { title: "Settings", emoji: "🌙", href: "/settings" },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#1a0f3e] to-[#0f1a3e]">
      {/* Faint Stars */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Drifting Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full bg-purple-300/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-screen px-4 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="mb-2 text-4xl font-bold text-white/90">Welcome Back, Storyteller</h1>
            <p className="text-lg text-purple-200/70">
              A quiet place to craft, revisit, and explore your narratives
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.8 }}
              >
                <Link href={card.href}>
                  <motion.div
                    className="group relative rounded-2xl border border-purple-300/20 bg-white/5 p-8 shadow-xl backdrop-blur-xl transition-all hover:border-purple-300/40"
                    style={{
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.1)",
                    }}
                    whileHover={{ y: -8, boxShadow: "0 8px 40px rgba(139, 92, 246, 0.25)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4 text-5xl">{card.emoji}</div>
                    <h3 className="text-xl font-semibold text-white/90 group-hover:text-purple-300 transition-colors">
                      {card.title}
                    </h3>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Sidebar (Optional) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 rounded-2xl border border-purple-300/20 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
          >
            <h3 className="mb-4 text-lg font-semibold text-white/90">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="flex items-center gap-3 text-purple-200/70 hover:text-purple-200 transition-colors"
              >
                <span>🏠</span>
                <span>Home</span>
              </Link>
              <Link
                href="/loading-story"
                className="flex items-center gap-3 text-purple-200/70 hover:text-purple-200 transition-colors"
              >
                <span>✨</span>
                <span>Create</span>
              </Link>
              <Link
                href="/my-stories"
                className="flex items-center gap-3 text-purple-200/70 hover:text-purple-200 transition-colors"
              >
                <span>📚</span>
                <span>Library</span>
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-3 text-purple-200/70 hover:text-purple-200 transition-colors"
              >
                <span>⚙️</span>
                <span>Settings</span>
              </Link>
            </div>
          </motion.div>

          {/* Footer Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="font-serif italic text-purple-200/50">The night is full of stories</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
