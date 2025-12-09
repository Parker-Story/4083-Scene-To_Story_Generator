"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageMode from "@/components/image-mode"
import TextMode from "@/components/text-mode"
import HistoryList from "@/components/history-list"
import type { StoryHistoryItem } from "@/app/page"

export default function AppSection() {
  return (
    <section id="try-app" className="relative py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              Transform your scene{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                into a story
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/60 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              Upload an image or describe a moment, our AI does the rest.
            </motion.p>
          </div>

          {/* Main interactive card with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            animate={{ y: [0, -3, 0] }}
            style={{
              animationDuration: "6s",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out"
            }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20" />

            {/* Card content */}
            <div className="relative rounded-3xl border border-white/10 bg-card/50 backdrop-blur-xl p-8 shadow-2xl">
              <Tabs defaultValue="image" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="image" className="text-base">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"
                      />
                    </svg>
                    Image Mode
                  </TabsTrigger>
                  <TabsTrigger value="text" className="text-base">
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"
                      />
                    </svg>
                    Text Mode
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="image" className="mt-0">
                  <ImageMode />
                </TabsContent>

                <TabsContent value="text" className="mt-0">
                  <TextMode />
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
