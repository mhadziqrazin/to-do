import { Todo } from "@prisma/client"
import { format } from "date-fns"
import { MdDeleteOutline, MdEditDocument } from "react-icons/md"
import ToDoDeleteButton from "../buttons/ToDoDeleteButton"
import ToDoDoneButton from "../buttons/ToDoDoneButton"

interface ToDoProps {
  todo: Todo
}

const ToDo: React.FC<ToDoProps> = ({ todo }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-theme border-2">
      <section className="bg-invert-theme text-invert-theme p-2">
        <p className="font-semibold text-2xl capitalize">
          {todo.title}
        </p>
      </section>
      <section className="p-2 font-light text-lg">
        <p className="text-xs opacity-70 pb-4">
          Due at {format(todo.dueAt, 'EEEE, MMMM do, yyyy - HH:mm')}
        </p>
        {todo.description}
      </section>
      <section className="flex justify-end gap-1 p-2 text-primary">
        <ToDoDeleteButton todoId={todo.id} />
        <MdEditDocument size={20} />
        <ToDoDoneButton todoId={todo.id} done={todo.done} />
      </section>
    </div>
  )
}

export default ToDo