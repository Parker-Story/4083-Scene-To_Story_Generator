"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageMode from "@/components/image-mode"
import TextMode from "@/components/text-mode"
import type { StoryHistoryItem } from "@/app/page"
import { motion } from "framer-motion"

interface StoryAppSectionProps {
  onStoryGenerated: (item: Omit<StoryHistoryItem, "id" | "timestamp">) => void
}

export default function StoryAppSection({ onStoryGenerated }: StoryAppSectionProps) {
  const [activeTab, setActiveTab] = useState("image")

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Story Generator
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">Choose your method and watch the magic happen</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect around card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-2xl" />

          {/* Main card */}
          <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-3xl shadow-2xl p-8 md:p-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1 h-auto">
                <TabsTrigger
                  value="image"
                  className="rounded-lg py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Image Mode
                </TabsTrigger>
                <TabsTrigger
                  value="text"
                  className="rounded-lg py-3 text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Text Mode
                </TabsTrigger>
              </TabsList>

              <TabsContent value="image" className="mt-0">
                <ImageMode onStoryGenerated={onStoryGenerated} />
              </TabsContent>

              <TabsContent value="text" className="mt-0">
                <TextMode onStoryGenerated={onStoryGenerated} />
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
