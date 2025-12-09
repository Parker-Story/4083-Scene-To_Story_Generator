"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ImageMode from "@/components/image-mode"
import TextMode from "@/components/text-mode"
import type { StoryHistoryItem } from "@/app/page"

type MainCardProps = {
  onStoryGenerated: (item: Omit<StoryHistoryItem, "id" | "timestamp">) => void
}

export default function MainCard({ onStoryGenerated }: MainCardProps) {
  const [activeTab, setActiveTab] = useState("image")

  return (
    <div id="main-card" className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="mb-6 flex justify-center">
          <TabsList className="inline-flex h-12 items-center justify-center rounded-full bg-muted p-1.5">
            <TabsTrigger
              value="image"
              className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Image Mode
            </TabsTrigger>
            <TabsTrigger
              value="text"
              className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Text Mode
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="image" className="mt-0">
          <ImageMode onStoryGenerated={onStoryGenerated} />
        </TabsContent>

        <TabsContent value="text" className="mt-0">
          <TextMode onStoryGenerated={onStoryGenerated} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
