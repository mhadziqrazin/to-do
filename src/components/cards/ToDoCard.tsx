'use client'

import { Feed, Todo } from "@prisma/client"
import ToDoDeleteButton from "../buttons/ToDoDeleteButton"
import ToDoDoneButton from "../buttons/ToDoDoneButton"
import ToDoEditButton from "../buttons/ToDoEditButton"
import { useState } from "react"
import ToDoShareButton from "../buttons/ToDoShareButton"
import { format } from "date-fns"

interface ToDoProps {
  todo: Todo & { feed: Feed | null }
}

const ToDoCard: React.FC<ToDoProps> = ({ todo }) => {
  const [done, setDone] = useState(todo.done)

  return (
    <div className={`
        group rounded-xl overflow-hidden bg-theme border-2 shadow-theme
        ${done ? 'border-neutral-200/70 dark:border-gray/70' : 'border-neutral-200 dark:border-gray'}
      `}
    >
      <div className={`${done && 'opacity-70'}`}>
        <section className={`p-2`}>
          <p className={`font-medium text-xl capitalize ${done && 'line-through decoration-2'}`}
          >
            {todo.title}
          </p>
        </section>
        <hr className="border-1-theme" />
        <section className="p-2 text-lg font-semibold">
          <p className="text-xs opacity-70 pb-4">
            <span className="font-light">Due at</span> {format(todo.dueAt, 'eee, MMMM do, yyyy - HH:mm')}
          </p>
          <p className="font-light whitespace-pre-wrap break-words">
            {todo.description}
          </p>
        </section>
      </div>
      <section className="flex justify-end gap-1 p-2 text-primary">
        <ToDoDeleteButton todoId={todo.id} feedId={todo.feed?.id || ''} />
        <ToDoEditButton todo={todo} disabled={todo.done} />
        <ToDoDoneButton todoId={todo.id} done={done} setDone={setDone} feedId={todo.feed?.id || ''} />
        {todo.done &&
          <ToDoShareButton todoId={todo.id} disabled={!!todo.feed} />
        }
      </section>
    </div>
  )
}

export default ToDoCard