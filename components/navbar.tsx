"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(10, 10, 15, 0)", "rgba(10, 10, 15, 0.8)"])
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.3])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      // Fallback for data-chapter elements
      const chapterElement = document.querySelector(`[data-chapter="${id}"]`)
      if (chapterElement) {
        chapterElement.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <motion.nav
      style={{
        backgroundColor,
        borderBottomColor: `rgba(255, 255, 255, ${borderOpacity})`,
      }}
      className="fixed top-0 z-50 w-full border-b backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-600">
            <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground">Once Upon an Image</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button
            onClick={() => scrollToSection("1")}
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => router.push("/login")}
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/loading-story?mode=demo")}
            className="rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-2 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Try Now
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
