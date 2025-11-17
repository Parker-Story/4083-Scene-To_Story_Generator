"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function StoryResultPage() {
  const router = useRouter()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const storyData = {
    story: "In the quiet embrace of twilight, where the sky paints itself in shades of amber and rose, a lone traveler pauses at the edge of a forgotten path. The trees whisper ancient secrets, their branches swaying like the hands of time itself. Here, in this moment suspended between day and night, the world feels both infinite and intimate. Every shadow holds a memory, every breeze carries a story waiting to be told. This is where journeys begin, where hearts remember what they've been searching for all along.",
    labels: ["The sky feels calm, like it's been waiting all day for this moment", "There's a gentle softness in the trees, the kind that reminds you of home", "The light dances quietly on the water, like a memory returning"],
    imageUrl: "/peaceful-twilight-landscape-with-soft-warm-colors.jpg",
  }

  // Page turn animation
  const pageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Warm dreamy background */}
      <motion.div className="fixed inset-0" style={{ y: backgroundY }}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/soft-dreamy-purple-blue-gradient-sky-with-golden-a.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/30 to-black/60" />
        {/* Subtle texture overlay like journal paper */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5'/%3E%3CfeColorMatrix values='0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23paper)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20">
        {/* Header with hand-drawn underline feel */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pageVariants}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            Your Story Is Ready,
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light">
            Take a breath, and read something made just for you,
          </p>
          {/* Imperfect hand-drawn underline */}
          <div className="flex justify-center pt-2">
            <svg width="200" height="8" viewBox="0 0 200 8" className="text-amber-400/60">
              <path 
                d="M 5 5 Q 50 3, 100 5 T 195 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-sm text-amber-200/70 italic pt-2"
          >
            "Every story begins with a quiet moment,"
          </motion.p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left - Image with nostalgic feel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, y: [0, -2, 0] }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              animationDuration: "5s",
              animationIterationCount: "infinite"
            }}
            className="space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-amber-200/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-rose-500/10 z-10" />
              {/* Film grain overlay */}
              <div className="absolute inset-0 bg-black/10 z-10 mix-blend-overlay opacity-40" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }} />
              <Image
                src={storyData.imageUrl || "/placeholder.svg"}
                alt="Your memory"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 shadow-inner z-20" style={{
                boxShadow: 'inset 0 0 60px rgba(0,0,0,0.3)'
              }} />
            </div>

            {/* Journal-style observations box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="bg-amber-50/10 backdrop-blur-md rounded-2xl p-6 border border-amber-200/20"
            >
              <h3 className="text-xl font-serif text-amber-100 mb-4 flex items-center gap-2">
                <span>✨</span>
                Little Things We Noticed,
              </h3>
              <div className="space-y-3">
                {storyData.labels.map((observation, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
                    className="flex gap-3"
                  >
                    <span className="text-amber-300 text-lg">•</span>
                    <p className="text-white/90 text-base leading-relaxed italic">
                      {observation}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Story card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0, y: [0, -3, 0] }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              animationDuration: "6s",
              animationIterationCount: "infinite"
            }}
            className="flex flex-col"
          >
            <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              {/* Corner doodles - tiny stars and leaves */}
              <div className="absolute top-4 right-4 text-amber-300/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2 L13 11 L22 12 L13 13 L12 22 L11 13 L2 12 L11 11 Z" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-amber-300/30">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2 C10 2, 8 8, 2 10 C8 12, 10 18, 10 18 C10 18, 12 12, 18 10 C12 8, 10 2, 10 2" />
                </svg>
              </div>

              {/* Story header */}
              <div className="flex items-center gap-2 text-amber-200 mb-6 pb-4 border-b border-white/10">
                <span className="text-2xl">📖</span>
                <span className="text-lg font-serif">Your Story,</span>
              </div>

              {/* Story text with page-turn animation */}
              <ScrollArea className="h-[400px] pr-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="text-lg md:text-xl leading-relaxed text-white/95 font-serif"
                  style={{ lineHeight: '2' }}
                >
                  {storyData.story}
                </motion.p>
              </ScrollArea>

              {/* Handwritten-style note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-8 pt-6 border-t border-white/10 space-y-3"
              >
                <p className="text-sm text-amber-100/80 italic leading-relaxed">
                  I hope this story makes you feel something. Every image carries a heartbeat of its own,
                </p>
                <div className="flex items-center gap-2 text-rose-300/60">
                  <span className="text-xl">♥</span>
                  <span className="text-xs italic">with gratitude</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Action buttons - soft and warm */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => router.push("/")}
            className="bg-gradient-to-r from-amber-600/80 to-rose-600/80 hover:from-amber-500/90 hover:to-rose-500/90 text-white px-10 py-7 text-lg rounded-2xl shadow-xl shadow-amber-900/30 transition-all hover:shadow-amber-900/50 backdrop-blur-sm border border-amber-200/20 font-serif"
          >
            Create Another Story,
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push("/loading-story")}
            className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-2xl backdrop-blur-md transition-all font-serif"
          >
            See Another Demo,
          </Button>
        </motion.div>

        {/* Personal footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="text-center mt-20 space-y-3"
        >
          <p className="text-white/90 text-lg font-serif">
            Once Upon an Image, Made with gratitude,
          </p>
          <p className="text-amber-200/60 text-sm italic">
            "Your stories matter,"
          </p>
        </motion.footer>
      </div>
    </div>
  )
}
