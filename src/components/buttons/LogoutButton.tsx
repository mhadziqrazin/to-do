'use client'

import { signOut } from "next-auth/react"
import { MdLogout } from "react-icons/md"

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="text-sm flex gap-1 items-center border-2 border-primary hover-secondary-theme rounded-xl py-1 px-2"
    >
      <p className="hidden sm:block">
        Sign out
      </p>
      <MdLogout size={17} />
    </button>
  )
}

export default LogoutButton