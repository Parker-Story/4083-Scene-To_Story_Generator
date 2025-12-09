"use client"

import type React from "react"
import { useState, useRef, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"

// Define the shape of the data we expect from the Python API
type APIResponse = {
  success: boolean
  labels: string[]
  story: string
  error?: string
}

export default function ImageMode() {
  // --- STATE MANAGEMENT ---
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  
  // New state for API handling
  const [isLoading, setIsLoading] = useState(false)
  const [apiResult, setApiResult] = useState<APIResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // --- HELPER FUNCTIONS (Identical to original) ---
  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (JPG or PNG)")
      return
    }
    setSelectedFile(file)
    setError(null)
    setApiResult(null) // Clear previous results when new file chosen

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

  // --- NEW GENERATE FUNCTION (Connects to your Python API) ---
  const handleGenerate = async () => {
    if (!selectedFile) {
      setError("Please select an image first")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // 1. Create the form data (standard upload format)
      const formData = new FormData()
      formData.append("image_input", selectedFile) // Matches 'image_input' in app.py

      // 2. Send to Python Backend
      const response = await fetch("http://127.0.0.1:5000/api/generate-story", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to generate story")
      }

      // 3. Store result
      setApiResult(data)

    } catch (err: any) {
      console.error("Backend Error:", err)
      setError(err.message || "Could not connect to the AI server. Is app.py running?")
    } finally {
      setIsLoading(false)
    }
  }

  // --- RENDER ---
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-2xl">
      
      {/* 1. UPLOAD AREA (Visuals unchanged) */}
      {!selectedFile ? (
        <div
          className={`relative rounded-xl border-2 border-dashed p-12 text-center transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleChange} />
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
        </div>
      ) : (
        // 2. PREVIEW AREA (Visuals unchanged)
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
                setApiResult(null)
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

          <Button 
            onClick={handleGenerate} 
            className="w-full" 
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Generating Story..." : "Generate Story from Image"}
          </Button>
        </div>
      )}

      {/* 3. FOOTER TEXT (Restored to match original) */}
      {!selectedFile && (
        <div className="mt-8 text-center text-sm text-muted-foreground">
          No story yet — upload an image to get started.
        </div>
      )}

      {/* 4. RESULTS AREA (New: Appears below when done) */}
      {apiResult && (
        <div className="mt-8 space-y-6 border-t pt-6 animate-in fade-in slide-in-from-bottom-4">
            
          {/* Labels Display */}
          <div>
            <h3 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wider">Detected Objects</h3>
            <div className="flex flex-wrap gap-2">
                {apiResult.labels.map((label, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-sm rounded-full">
                        {label}
                    </span>
                ))}
            </div>
          </div>

          {/* Story Display */}
          <div className="bg-muted/30 p-6 rounded-xl border border-border">
            <h3 className="font-semibold mb-4 text-lg">Generated Story</h3>
            <p className="leading-relaxed text-foreground/90">
                {apiResult.story}
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => {
                setSelectedFile(null);
                setApiResult(null);
                setPreview(null);
            }}
          >
            Start Over
          </Button>
        </div>
      )}
    </div>
  )
}