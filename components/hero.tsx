"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const scrollToChapter = () => {
    const chapter1 = document.querySelector('[data-chapter="1"]')
    chapter1?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToApp = () => {
    const app = document.getElementById("try-app")
    app?.scrollIntoView({ behavior: "smooth" })
  }

  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "15%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  return (
    <motion.section 
      id="hero" 
      className="relative flex min-h-screen items-center justify-center px-4 py-20"
      style={{ y: heroY, opacity: heroOpacity }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Animated headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl text-balance"
          >
            Once Upon an Image
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-4 max-w-2xl text-xl text-foreground/80 md:text-2xl text-pretty"
          >
            A single frame can say more than words. We just help it speak.
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mb-12 max-w-2xl text-lg text-foreground/60 md:text-xl text-pretty"
          >
            Your image carries a mood, a memory, a quiet story. This is where we start, with the feeling inside your scene.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToApp}
              className="group rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-lg font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
            >
              Start Creating
              <svg
                className="ml-2 inline-block h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <button
              onClick={scrollToChapter}
              className="group relative overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-white/15 hover:scale-105"
            >
              <span className="relative z-10">How It Works</span>
              <div className="absolute inset-0 -z-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </motion.div>

          {/* Stacked image frames with parallax - keeping existing hero images */}
          <div className="relative mt-20 h-[400px] w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              {/* Frame 1 */}
              <motion.div
                whileInView={{ y: 0, rotate: -2 }}
                initial={{ y: 20, rotate: 0 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02, rotate: -3, transition: { duration: 0.6 } }}
                className="absolute left-[5%] top-[10%] h-64 w-80 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm shadow-2xl cursor-pointer"
                style={{
                  backgroundImage: `url('/mystical-forest-sunset.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Frame 2 */}
              <motion.div
                whileInView={{ y: 0, rotate: 3 }}
                initial={{ y: -20, rotate: 0 }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02, rotate: 4, transition: { duration: 0.6 } }}
                className="absolute right-[10%] top-[5%] h-72 w-72 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-sm shadow-2xl cursor-pointer"
                style={{
                  backgroundImage: `url('/mountain-lake-landscape.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Frame 3 */}
              <motion.div
                whileInView={{ y: 0, rotate: -1 }}
                initial={{ y: 30, rotate: 0 }}
                transition={{
                  duration: 18,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02, rotate: -2, transition: { duration: 0.6 } }}
                className="absolute bottom-[5%] left-[25%] h-56 w-96 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm shadow-2xl cursor-pointer"
                style={{
                  backgroundImage: `url('/city-lights-night.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
