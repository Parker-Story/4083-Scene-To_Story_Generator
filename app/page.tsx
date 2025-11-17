"use client"

import Navbar from "@/components/navbar"
import ParallaxBackground from "@/components/parallax-background"
import Hero from "@/components/hero"
import ChapterSection from "@/components/chapter-section"
import TransitionBlock from "@/components/transition-block"
import AppSection from "@/components/app-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-foreground overflow-x-hidden">
      <ParallaxBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />

        <ChapterSection
          chapter={1}
          title="Capture the Scene"
          description="Your image carries a mood, a memory, a quiet story. This is where we start, with the feeling inside your scene."
          visualType="image"
        />

        <ChapterSection
          chapter={2}
          title="The Image Agent Sees the Details"
          description="Our Image Agent studies your scene like a cinematographer, tracing the light, textures, shapes, and hidden emotion inside the frame. It doesn't just see objects—it understands atmosphere, tone, and meaning. Mountains, rivers, shadows, skies—every detail becomes a thread in your story."
          visualType="labels"
        />

        <ChapterSection
          chapter={3}
          title="The Text Agent Weaves a Story"
          description="Once the scene is understood, the storytelling begins. Each detected detail becomes a line of emotion, woven into a living narrative."
          visualType="story"
        />

        <TransitionBlock />

        <AppSection />

        <Footer />
      </main>
    </div>
  )
}
