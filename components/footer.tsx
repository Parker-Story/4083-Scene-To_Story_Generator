"use client"

export default function Footer() {
  const footerLinks = [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ]

  return (
    <footer className="relative py-16 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-600">
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-xl text-foreground">Once Upon an Image</p>
              <p className="text-sm text-foreground/60">Every story begins with a scene</p>
            </div>
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 w-full max-w-2xl">
            <p className="text-xs text-foreground/40">
              © 2025 Once Upon an Image. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
