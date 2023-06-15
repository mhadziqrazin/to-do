'use client'

import { useRouter, useSearchParams } from "next/navigation"
import queryString from "query-string"
import { useCallback, useEffect, useState } from "react"

const Filter = () => {
  const params = useSearchParams()
  const filter = params.get('filter') || 'All'
  const router = useRouter()

  const handleClick = useCallback((filter: string) => {
    let query = {}

    if (params) {
      query = queryString.parse(params.toString())
    }

    const newQuery = {
      ...query,
      filter
    }

    const url = queryString.stringifyUrl({
      url: '/',
      query: newQuery
    })

    router.push(url)
    handleClose()
  }, [filter, params])

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
        <button onClick={() => handleClick('All')} className={`
        hover:text-primary transition
        ${filter === 'All' && 'text-primary'}
        `}
        >
          All
        </button>
        <button onClick={() => handleClick('Not yet')} className={`
        hover:text-primary transition
        ${filter === 'Not yet' && 'text-primary'}
        `}
        >
          Not yet
        </button>
        <button onClick={() => handleClick('Completed')} className={`
        hover:text-primary transition
        ${filter === 'Completed' && 'text-primary'}
        `}
        >
          Completed
        </button>
        <button onClick={() => handleClick('Feeds')} className={`
        hover:text-primary transition
        ${filter === 'Feeds' && 'text-primary'}
        `}
        >
          Feeds
        </button>
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
          // onClick={handleToggle}
          className="text-primary"
        >
          {filter}
        </button>
        {open && (
          <div className="absolute top-[24px]">
            <ul className={`
                bg-theme border-2-theme flex flex-col text-secondary-theme items-center overflow-hidden rounded-xl text-md
                ${visible ? 'h-[132px]' : 'h-[0px]'}
                transition-all duration-500 ease-in-out
              `}
            >
              <li className="hover:bg-neutral-200 dark:hover:bg-gray w-full">
                <button
                  onClick={() => handleClick('All')}
                  className="w-full py-1 px-3"
                >
                  All
                </button>
              </li>
              <li className="hover:bg-neutral-200 dark:hover:bg-gray w-full">
                <button
                  onClick={() => handleClick('Not yet')}
                  className="w-full py-1 px-3"
                >
                  Not yet
                </button>
              </li>
              <li className="hover:bg-neutral-200 dark:hover:bg-gray w-full">
                <button
                  onClick={() => handleClick('Completed')}
                  className="w-full py-1 px-3"
                >
                  Completed
                </button>
              </li>
              <li className="hover:bg-neutral-200 dark:hover:bg-gray w-full">
                <button
                  onClick={() => handleClick('Feeds')}
                  className="w-full py-1 px-3"
                >
                  Feeds
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Filter