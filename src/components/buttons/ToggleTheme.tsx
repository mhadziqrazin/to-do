'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { FaMoon, FaRegSun } from "react-icons/fa"

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="flex text-primary">
        <FaRegSun size={20} />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex text-primary"
    >
      {
        theme === 'light' ? <FaRegSun size={20} /> : <FaMoon size={20} />
      }
    </button>
  )
}

export default ToggleTheme