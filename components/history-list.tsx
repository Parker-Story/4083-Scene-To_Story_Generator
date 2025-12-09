"use client"

import { useState } from "react"
import type { StoryHistoryItem } from "@/app/page"
import { Button } from "@/components/ui/button"

type HistoryListProps = {
  history: StoryHistoryItem[]
}

export default function HistoryList({ history }: HistoryListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

    if (seconds < 60) return "Just now"
    if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`
    return `${Math.floor(seconds / 86400)} days ago`
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Story History</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {history.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                  {item.type === "image" ? (
                    <>
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      From image
                    </>
                  ) : (
                    <>
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      From text
                    </>
                  )}
                </span>
                <span className="text-muted-foreground">{getTimeAgo(item.timestamp)}</span>
              </div>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">{item.story}</p>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className="w-full"
            >
              {expandedId === item.id ? "Show less" : "Read full story"}
            </Button>

            {expandedId === item.id && (
              <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex flex-wrap gap-2">
                  {item.labels.map((label, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs"
                    >
                      {label.description}
                      {label.score && <span className="text-muted-foreground">{Math.round(label.score * 100)}%</span>}
                    </span>
                  ))}
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{item.story}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
