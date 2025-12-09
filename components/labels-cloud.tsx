"use client"

import { motion } from "framer-motion"

const labels = [
  { text: "mountain", emoji: "🏔️" },
  { text: "forest", emoji: "🌲" },
  { text: "sunset", emoji: "🌅" },
  { text: "river", emoji: "🌊" },
  { text: "clouds", emoji: "☁️" },
  { text: "sky", emoji: "🌤️" },
  { text: "nature", emoji: "🌿" },
  { text: "landscape", emoji: "🏞️" },
]

export default function LabelsCloud() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Center image mock */}
      <div className="relative h-64 w-64 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundImage: `url('/mountain-forest-sunset-scene.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Floating labels */}
      {labels.map((label, index) => {
        const angle = (index / labels.length) * 2 * Math.PI
        const radius = 180
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={label.text}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              y: {
                duration: 3 + index * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              x: {
                duration: 4 + index * 0.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-950/50 backdrop-blur-md px-4 py-2 text-sm font-medium text-violet-200 shadow-lg">
              <span>{label.emoji}</span>
              <span>{label.text}</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
