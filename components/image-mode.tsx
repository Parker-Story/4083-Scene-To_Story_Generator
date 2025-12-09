"use client"

import type React from "react"
import { useState, useRef, type ChangeEvent } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import LabelsList from "@/components/labels-list"
import StoryCard from "@/components/story-card"
import type { StoryHistoryItem } from "@/app/page"
import { motion } from "framer-motion"

type APIResponse = {
  labels: { description: string; score: number }[]
  story: string
}

export default function ImageMode() {
  const router = useRouter()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (JPG or PNG)")
      return
    }

    setSelectedFile(file)
    setError(null)

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0])
    }
  }

  const handleGenerate = async () => {
    if (!selectedFile) {
      setError("Please select an image first")
      return
    }

    // Store file data in sessionStorage
    const reader = new FileReader()
    reader.onloadend = () => {
      sessionStorage.setItem("pendingImage", reader.result as string)
      sessionStorage.setItem("pendingImageName", selectedFile.name)
      router.push("/loading-story?mode=image")
    }
    reader.readAsDataURL(selectedFile)
  }

  return (
    <motion.div 
      className="rounded-2xl border border-border bg-card p-8 shadow-2xl"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      {!selectedFile ? (
        <motion.div
          className={`relative rounded-xl border-2 border-dashed p-12 text-center transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          whileHover={{ 
            scale: 1.01, 
            rotateX: 2, 
            rotateY: 2,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
          }}
          style={{ 
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleChange} />

          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div>
              <p className="mb-2 text-lg font-medium">Drag and drop your image here</p>
              <p className="text-sm text-muted-foreground">or click to browse • Supports JPG, PNG</p>
            </div>

            <Button onClick={() => fileInputRef.current?.click()} className="mt-2">
              Choose File
            </Button>
          </div>
        </motion.div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
            {preview && (
              <img src={preview || "/placeholder.svg"} alt="Preview" className="h-24 w-24 rounded-lg object-cover" />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedFile(null)
                setPreview(null)
                setError(null)
              }}
            >
              Remove
            </Button>
          </div>

          {error && (
            <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          <Button onClick={handleGenerate} className="w-full" size="lg">
            Generate Story from Image
          </Button>
        </div>
      )}

      {!selectedFile && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          No story yet — upload an image to get started.
        </div>
      )}
    </motion.div>
  )
}
