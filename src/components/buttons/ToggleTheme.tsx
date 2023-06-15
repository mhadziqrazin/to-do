'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Theme
    </button>
  )
}

export default ToggleTheme