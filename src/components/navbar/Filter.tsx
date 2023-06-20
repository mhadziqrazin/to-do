'use client'

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

const Filter = () => {
  const pathname = usePathname()
  const params = useSearchParams()
  const sort = params?.get('sort') || 'asc'

  const pathLabel = useMemo(() => {
    switch (pathname) {
      case '/':
        return 'Feeds'

      case '/todos/all':
        return 'All'

      case '/todos/not-yet':
        return 'Not yet'

      case '/todos/completed':
        return 'Completed'
    }
  }, [pathname])

  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(open)
  }, [open])

  const handleClose = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setOpen(false)
    }, 500)
  }, [setOpen, setVisible])

  return (
    <>
      <div className="hidden sm:flex items-center text-gray-theme gap-4">
        <Link href={`/?sort=${sort}`} className={`
          hover:text-primary transition
            ${pathname === '/' && 'text-primary'}
          `}
        >
          Feeds
        </Link>
        <Link href={`/todos/all?sort=${sort}`} className={`
          hover:text-primary transition
            ${pathname === '/todos/all' && 'text-primary'}
          `}
        >
          All
        </Link>
        <Link href={`/todos/not-yet?sort=${sort}`} className={`
          hover:text-primary transition
            ${pathname === '/todos/not-yet' && 'text-primary'}
          `}
        >
          Not yet
        </Link>
        <Link href={`/todos/completed?sort=${sort}`} className={`
          hover:text-primary transition
            ${pathname === '/todos/completed' && 'text-primary'}
          `}
        >
          Completed
        </Link>
      </div>
      <div className="relative flex sm:hidden flex-col items-center">
        <button
          onClick={() => {
            if (!open) {
              setOpen((value) => !value)
            } else {
              handleClose()
            }
          }}
          className="text-primary flex gap-1 items-center"
        >
          {pathLabel}
          <IoIosArrowDown className={`${visible && 'rotate-180'} transition duration-300`} />
        </button>
        {open && (
          <div className="absolute top-[24px]">
            <ul className={`
                bg-theme border-2-theme flex flex-col text-secondary-theme items-center overflow-hidden rounded-xl text-md shadow-theme
                ${visible ? 'h-[132px]' : 'h-[0px]'}
                transition-all duration-500
              `}
            >
              <li className="hover:bg-neutral-200 dark:hover:bg-gray w-full">
                <Link href={'/'} onClick={handleClose} className="flex py-1 px-3 justify-center cursor-pointer">
                  Feeds
                </Link>
              </li>
              <li className="hover:bg-neutral-200 dark:hover:bg-gray w-full">
                <Link href={'/todos/all'} onClick={handleClose} className="flex py-1 px-3 justify-center cursor-pointer">
                  All
                </Link>
              </li>
              <li className="hover:bg-neutral-200 dark:hover:bg-gray w-full">
                <Link href={'/todos/not-yet'} onClick={handleClose} className="flex py-1 px-3 justify-center cursor-pointer">
                  Not yet
                </Link>
              </li>
              <li className="hover:bg-neutral-200 dark:hover:bg-gray w-full">
                <Link href={'/todos/completed'} onClick={handleClose} className="flex py-1 px-3 justify-center cursor-pointer">
                  Completed
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Filter