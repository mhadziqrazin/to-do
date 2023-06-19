'use client'

import { Todo } from "@prisma/client"
import ToDoDeleteButton from "../buttons/ToDoDeleteButton"
import ToDoDoneButton from "../buttons/ToDoDoneButton"
import ToDoEditButton from "../buttons/ToDoEditButton"
import { useState } from "react"

interface ToDoProps {
  todo: Todo
}

const ToDo: React.FC<ToDoProps> = ({ todo }) => {
  const [done, setDone] = useState(todo.done)



  return (
    <div className={`
        group rounded-xl overflow-hidden bg-theme border-2
        ${done ? 'border-dark/70 dark:border-white/70' : 'boder-dark dark:border-white'}
      `}
    >
      <div className={`${done && 'opacity-70'}`}>
        <section className={`bg-invert-theme text-invert-theme p-2`}>
          <p className={`font-semibold text-2xl capitalize ${done && 'line-through decoration-2'}`}
          >
            {todo.title}
          </p>
        </section>
        <section className="p-2 text-lg font-semibold">
          <p className="text-xs opacity-70 pb-4">
            <span className="font-light">Due at</span> {todo.dueAt.toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short', hour12: false })}
          </p>
          <p className="font-light whitespace-pre-wrap break-words">
            {todo.description}
          </p>
        </section>
      </div>
      <section className="flex justify-end gap-1 p-2 text-primary">
        <ToDoDeleteButton todoId={todo.id} />
        <ToDoEditButton todo={todo} />
        <ToDoDoneButton todoId={todo.id} done={done} setDone={setDone} />
      </section>
    </div>
  )
}

export default ToDo