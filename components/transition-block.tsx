"use client"

import { motion } from "framer-motion"

export default function TransitionBlock() {
  const scrollToApp = () => {
    const app = document.getElementById("try-app")
    app?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance max-w-3xl">
            Now It's{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Your Turn
            </span>
          </h3>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl text-pretty">
            Your story begins with a scene. Upload yours.
          </p>

          <p className="text-lg text-foreground/60">Choose a moment, and watch it unfold.</p>

          <button
            onClick={scrollToApp}
            className="group flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors"
          >
            <span className="text-lg">Scroll down to try</span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
