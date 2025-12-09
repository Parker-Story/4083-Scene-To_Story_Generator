"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface ScrollChapterProps {
  id?: string
  title: string
  description: string
  visual: ReactNode
  visualPosition?: "left" | "right"
  backgroundEffect?: ReactNode
}

export default function ScrollChapter({
  id,
  title,
  description,
  visual,
  visualPosition = "left",
  backgroundEffect,
}: ScrollChapterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section id={id} ref={ref} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background effect */}
      {backgroundEffect && <div className="absolute inset-0 -z-10">{backgroundEffect}</div>}

      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            visualPosition === "right" ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text content */}
          <motion.div style={{ opacity, y }} className={visualPosition === "right" ? "lg:col-start-1" : ""}>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Visual content */}
          <motion.div style={{ y: visualY }} className={visualPosition === "right" ? "lg:col-start-2" : ""}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {visual}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
