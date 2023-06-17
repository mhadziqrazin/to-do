'use client'

import { Todo } from "@prisma/client"
import useCreateModal from "@/hooks/useCreateModal"
import { BsPlusSquareFill } from "react-icons/bs"

interface ToDosModuleProps {
  todos: Todo[]
}

const ToDosModule: React.FC<ToDosModuleProps> = ({
  todos
}) => {
  const createModal = useCreateModal()

  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col gap-8 w-one">
        <div className="flex gap-4 items-center justify-center relative">
          <button
            onClick={createModal.onOpen}
            className="absolute left-0 shadow-theme text-primary"
          >
            <BsPlusSquareFill size={25} />
          </button>
          {/* <p className="text-2xl font-semibold">
            ALL TO DO LISTS
          </p> */}
        </div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default ToDosModule