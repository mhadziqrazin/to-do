'use client'

import { useRouter, useSearchParams } from "next/navigation"
import queryString from "query-string"
import { useCallback } from "react"

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
  }, [filter, params])

  return (
    <div className="flex items-center text-gray-theme gap-4">
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
  )
}

export default Filter