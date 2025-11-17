"use client"

import ScrollChapter from "@/components/scroll-chapter"
import { motion } from "framer-motion"
import { ImageIcon, Sparkles, BookOpen, Stars } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StoryFlowSection() {
  const scrollToApp = () => {
    const element = document.getElementById("try-app")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div id="story-flow" className="relative">
      {/* Chapter 1: Capture the Scene */}
      <ScrollChapter
        id="how-it-works"
        title="Capture the Scene"
        description="It all starts with a moment frozen in time. Upload any image — a landscape, a cityscape, a candid photo — and our Image Agent springs into action, extracting the key elements that define your scene."
        visualPosition="right"
        visual={
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center mb-4">
                <ImageIcon className="w-16 h-16 text-muted-foreground/50" />
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-primary/20 rounded-full w-3/4" />
                <div className="h-3 bg-primary/20 rounded-full w-1/2" />
              </div>
            </div>
          </div>
        }
        backgroundEffect={
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        }
      />

      {/* Chapter 2: The Image Agent Thinks */}
      <ScrollChapter
        title="The Image Agent Thinks"
        description="Powered by Google Cloud Vision, the Image Agent analyzes your photo with remarkable precision. It identifies objects, landscapes, emotions, and atmosphere — transforming visual data into meaningful labels like 'mountain', 'sunset', 'serenity'."
        visualPosition="left"
        visual={
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Analyzing image...</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Mountain", score: 0.95 },
                  { label: "Sky", score: 0.92 },
                  { label: "Sunset", score: 0.88 },
                  { label: "Nature", score: 0.85 },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                  >
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-xs text-muted-foreground ml-2">{(item.score * 100).toFixed(0)}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        }
        backgroundEffect={
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        }
      />

      {/* Chapter 3: The Text Agent Writes */}
      <ScrollChapter
        title="The Text Agent Writes"
        description="With those labels in hand, the Text Agent — powered by OpenAI — crafts a unique narrative. It weaves together the elements into a vivid, creative story that brings your image to life through words."
        visualPosition="right"
        visual={
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">Writing your story...</span>
              </div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="h-2.5 bg-gradient-to-r from-accent/30 to-transparent rounded-full"
                    style={{ width: `${100 - i * 15}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        }
        backgroundEffect={
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        }
      />

      {/* Chapter 4: Your Story is Born */}
      <ScrollChapter
        title="Your Story is Born"
        description="And just like that, your image becomes a story. A narrative crafted from pixels and imagination, ready to be read, shared, and cherished. Every image has a tale to tell — what will yours say?"
        visualPosition="left"
        visual={
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-3xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-primary/30 rounded-3xl p-10 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <Stars className="w-16 h-16 text-primary" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <Sparkles className="w-4 h-4 text-accent absolute -top-2 -right-2" />
                    <Sparkles className="w-3 h-3 text-primary absolute -bottom-1 -left-1" />
                  </motion.div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-2xl md:text-4xl font-bold mb-6">Your Story Awaits</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ready to transform your images into captivating narratives?
                </p>
              </div>
            </div>
          </div>
        }
        backgroundEffect={
          <>
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
          </>
        }
      />

      {/* CTA Section */}
      <div className="relative py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Story?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the magic yourself. Upload an image or enter some labels, and watch as AI brings your vision to
            life.
          </p>
          <Button
            size="lg"
            onClick={scrollToApp}
            className="text-base px-8 py-6 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            Generate Your Own Story
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
