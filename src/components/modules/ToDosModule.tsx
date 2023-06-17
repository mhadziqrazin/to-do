'use client'

import { Todo } from "@prisma/client"
import useCreateModal from "@/hooks/useCreateModal"
import { BsPlusSquareFill } from "react-icons/bs"
import ToDo from "../todos/ToDo"

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
        <div className="flex items-center">
          <button
            onClick={createModal.onOpen}
            className="shadow-theme text-primary"
          >
            <BsPlusSquareFill size={25} />
          </button>
        </div>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </section>
    </main>
  )
}

export default ToDosModule