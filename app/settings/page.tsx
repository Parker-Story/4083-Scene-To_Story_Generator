"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0f2e] via-[#1a0f3e] to-[#0f1a3e]">
      {/* Night Sky Gradient */}
      <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-5" />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-4 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="mb-2 text-4xl font-bold text-white/90">Settings</h1>
            <p className="text-lg text-purple-200/70">Shape your experience</p>
          </motion.div>

          <div className="space-y-6">
            {/* Account Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="rounded-2xl border border-purple-300/20 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
                  👤
                </div>
                <h2 className="text-xl font-semibold text-white/90">Account Settings</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-purple-100/80">Email Notifications</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-purple-100/80">Two-Factor Authentication</Label>
                  <Switch />
                </div>
              </div>
            </motion.div>

            {/* Notification Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="rounded-2xl border border-purple-300/20 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
                  🔔
                </div>
                <h2 className="text-xl font-semibold text-white/90">Notification Settings</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-purple-100/80">Story Updates</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-purple-100/80">Weekly Digest</Label>
                  <Switch />
                </div>
              </div>
            </motion.div>

            {/* Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="rounded-2xl border border-purple-300/20 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
                  🔒
                </div>
                <h2 className="text-xl font-semibold text-white/90">Privacy</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-purple-100/80">Public Profile</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label className="text-purple-100/80">Show Activity</Label>
                  <Switch defaultChecked />
                </div>
              </div>
            </motion.div>

            {/* Theme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="rounded-2xl border border-purple-300/20 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
                  🌙
                </div>
                <h2 className="text-xl font-semibold text-white/90">Theme</h2>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-purple-300/30 bg-purple-500/20 text-purple-100 hover:bg-purple-500/30"
                >
                  Moonlit (Active)
                </Button>
                <Button variant="outline" className="flex-1 border-purple-300/30 text-purple-200/50">
                  Dawn
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Footer Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="font-serif italic text-purple-200/50">Every detail matters to your journey</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
