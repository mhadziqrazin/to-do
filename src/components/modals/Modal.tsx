'use client'

import { useCallback, useEffect, useState } from "react"
import { IoCloseSharp } from "react-icons/io5"

interface ModalProps {
  isOpen: boolean
  title: string
  action: () => void
  actionLabel: string
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen, title, action, actionLabel, onClose, children
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className={`
        fixed inset-0 z-50 flex items-center justify-center transition duration-300
        ${visible ? 'bg-black/30' : 'bg-transparent'}
      `}
    >
      <div className={`
          bg-theme w-one rounded-xl border-2 border-primary transition duration-300
          ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `}
      >
        <div className="flex flex-col items-center">
          <section className="w-full relative p-2 md:p-4 flex items-center justify-center">
            <button
              onClick={handleClose}
              className="flex items-center text-primary"
            >
              <IoCloseSharp size={25} className="absolute left-2 md:left-4" />
            </button>
            <h1 className="text-xl text-center font-semibold">
              {title}
            </h1>
          </section>
          <hr className="w-full border-1-theme" />
          <section className="w-full p-2 md:p-4 flex flex-col place-content-center">
            {children}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Modal