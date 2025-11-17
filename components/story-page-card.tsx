"use client"

import { motion } from "framer-motion"

const storyLines = [
  "The mountain stood tall against",
  "the fading light of dusk, its peak",
  "touching the painted sky. Below,",
  "a river wound through ancient",
  "forests, carrying whispers of",
  "forgotten tales...",
]

export default function StoryPageCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-full w-full max-w-md mx-auto"
    >
      {/* Paper-like card */}
      <div className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-amber-50/5 to-orange-50/5 backdrop-blur-sm p-8 shadow-2xl">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 h-16 w-16 border-t-2 border-r-2 border-amber-400/30 rounded-tr-2xl" />

        {/* Story lines appearing one by one */}
        <div className="space-y-4 font-serif text-foreground/80">
          {storyLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Decorative quill icon */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-6 right-6"
        >
          <svg className="h-8 w-8 text-amber-400/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.71 2.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42zM10 18.59l2.59-2.59-1.18-1.18L9 17.41V10H7v8.59l-2.41-2.41-1.18 1.18L6 20l2.59-2.59-1.18-1.18L5 18.64V10H3v10h7v-1.41z" />
          </svg>
        </motion.div>
      </div>

      {/* Shadow layers for depth */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-white/5 blur-sm translate-x-1 translate-y-1" />
      <div className="absolute inset-0 -z-20 rounded-2xl bg-white/3 blur-md translate-x-2 translate-y-2" />
    </motion.div>
  )
}
