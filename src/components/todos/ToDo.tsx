import { Todo } from "@prisma/client"
import { format } from "date-fns"
import { MdEditDocument } from "react-icons/md"
import ToDoDeleteButton from "../buttons/ToDoDeleteButton"
import ToDoDoneButton from "../buttons/ToDoDoneButton"
import ToDoEditButton from "../buttons/ToDoEditButton"

interface ToDoProps {
  todo: Todo
}

const ToDo: React.FC<ToDoProps> = ({ todo }) => {
  return (
    <div className={`
        group rounded-xl overflow-hidden bg-theme border-2
        ${todo.done ? 'border-dark/70 dark:border-white/70' : 'boder-dark dark:border-white'}
      `}
    >
      <div className={`${todo.done && 'opacity-70'}`}>
        <section className={`bg-invert-theme text-invert-theme p-2`}>
          <p className={`font-semibold text-2xl capitalize ${todo.done && 'line-through decoration-2'}`}
          >
            {todo.title}
          </p>
        </section>
        <section className="p-2 text-lg font-semibold">
          <p className="text-xs opacity-70 pb-4">
            <span className="font-light">Due at</span> {format(todo.dueAt, 'EEEE, MMMM do, yyyy - HH:mm')}
          </p>
          <p className="font-light">
            {todo.description}
          </p>
        </section>
      </div>
      <section className="flex justify-end gap-1 p-2 text-primary">
        <ToDoDeleteButton todoId={todo.id} />
        <ToDoEditButton todoId={todo.id} />
        <ToDoDoneButton todoId={todo.id} done={todo.done} />
      </section>
    </div>
  )
}

export default ToDo