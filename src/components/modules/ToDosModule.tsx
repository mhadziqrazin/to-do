'use client'

import { Feed, Todo } from "@prisma/client"
import useCreateModal from "@/hooks/useCreateModal"
import { BsPlusSquareFill } from "react-icons/bs"
import ToDoCard from "../cards/ToDoCard"
import { IoMdArrowDropdown } from "react-icons/io"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import queryString from "query-string"

interface ToDosModuleProps {
  todos: (Todo & { feed: Feed | null })[]
  emptyToDo: React.ReactNode
}

const ToDosModule: React.FC<ToDosModuleProps> = ({
  todos, emptyToDo
}) => {
  const createModal = useCreateModal()
  const params = useSearchParams()
  const path = usePathname()!
  const router = useRouter()
  const sort = params?.get('sort') || 'asc'

  const handleSort = useCallback((sort: string) => {

    let currentQuery = {}

    if (params) {
      currentQuery = queryString.parse(params.toString())
    }

    const updatedQuery = {
      ...currentQuery,
      sort
    }

    const url = queryString.stringifyUrl({
      url: path || '/todos/all',
      query: updatedQuery
    })

    router.push(url)
  }, [params, router, path])

  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col gap-8 w-one">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={createModal.onOpen}
            className="shadow-theme text-primary hover:scale-110 transition"
          >
            <BsPlusSquareFill size={32} />
          </button>
          <button
            onClick={() => handleSort(sort === 'asc' ? 'desc' : 'asc')}
            className="flex items-center justify-center w-full bg-primary text-invert-theme shadow-theme rounded-md h-[32px] p-1 hover:scale-[1.02] transition"
          >
            <p className="font-medium">
              Due date
            </p>
            <IoMdArrowDropdown size={20} className={`${sort === 'asc' && 'rotate-180'} transition duration-300`} />
          </button>
        </div>
        {todos.length === 0 && (
          <section className="text-center pt-8 flex flex-col gap-4">
            {emptyToDo}
          </section>
        )}
        {todos.map((todo) => (
          <ToDoCard key={todo.id} todo={todo} />
        ))}
      </section>
    </main>
  )
}

export default ToDosModule