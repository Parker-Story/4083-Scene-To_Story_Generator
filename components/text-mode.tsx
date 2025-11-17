"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function TextMode() {
  const router = useRouter()
  const [input, setInput] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!input.trim()) {
      setError("Please enter some labels first")
      return
    }

    const labels = input
      .split(",")
      .map((label) => label.trim())
      .filter(Boolean)

    // Store labels in sessionStorage
    sessionStorage.setItem("pendingLabels", JSON.stringify(labels))
    router.push("/loading-story?mode=text")
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-2xl">
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium">Describe your scene</label>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="mountain, sunset, lake, cabin, fireflies"
            className="min-h-[120px] resize-none"
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Type a list of elements you'd like in your scene, separated by commas.
          </p>
        </div>

        {error && (
          <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive">
            {error}
          </div>
        )}

        <Button onClick={handleGenerate} disabled={!input.trim()} className="w-full" size="lg">
          Generate Story from Text
        </Button>
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        No story yet — enter some labels to get started.
      </div>
    </div>
  )
}
