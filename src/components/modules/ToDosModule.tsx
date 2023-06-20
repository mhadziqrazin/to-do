'use client'

import { Todo } from "@prisma/client"
import useCreateModal from "@/hooks/useCreateModal"
import { BsPlusSquareFill } from "react-icons/bs"
import ToDo from "../todos/ToDo"
import { IoIosArrowDown } from "react-icons/io"

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
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={createModal.onOpen}
            className="shadow-theme text-primary hover:scale-110 transition bg-white rounded-full"
          >
            <BsPlusSquareFill size={25} />
          </button>
          <button
            className="flex items-center justify-center w-full bg-primary text-white shadow-theme rounded-md h-[25px]"
          >
            <p>
              Due date
            </p>
            <IoIosArrowDown />
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