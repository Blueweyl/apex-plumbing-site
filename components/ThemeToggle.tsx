'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-9 h-9" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-lg
                 bg-apple-surface dark:bg-zinc-800
                 hover:bg-apple-border-subtle dark:hover:bg-zinc-700
                 border border-apple-border-subtle dark:border-zinc-700
                 text-apple-secondary dark:text-zinc-400
                 hover:text-apple-dark dark:hover:text-white
                 transition-all duration-200 hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark'
        ? <Sun size={16} className="text-status-amber" />
        : <Moon size={16} />
      }
    </button>
  )
}
