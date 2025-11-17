"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import LabelsCloud from "@/components/labels-cloud"
import StoryPageCard from "@/components/story-page-card"

type ChapterSectionProps = {
  chapter: number
  title: string
  description: string
  visualType: "image" | "labels" | "story"
}

export default function ChapterSection({ chapter, title, description, visualType }: ChapterSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96])
  const imageRotate = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 0, -1.5])

  const textY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} data-chapter={chapter} className="relative min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side - sticky on desktop */}
          <motion.div className="relative lg:sticky lg:top-32 h-[400px] lg:h-[500px]" style={{ y: imageY }}>
            {visualType === "image" && (
              <motion.div
                style={{ scale: imageScale, rotate: imageRotate }}
                whileHover={{ scale: 1.03, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }}
                className="relative h-full w-full rounded-3xl border border-white/10 bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm shadow-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('/camera-capturing-scenic-landscape.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                  >
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {visualType === "labels" && (
              <div className="h-full w-full flex items-center justify-center">
                <LabelsCloud />
              </div>
            )}

            {visualType === "story" && (
              <div className="h-full w-full flex items-center justify-center">
                <StoryPageCard />
              </div>
            )}
          </motion.div>

          {/* Text side - scrolls naturally */}
          <motion.div style={{ y: textY, opacity: textOpacity }} className="space-y-6">
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              Chapter {chapter}
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>

            <motion.p 
              className="text-xl md:text-2xl text-foreground/60 leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-violet-500/50 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
