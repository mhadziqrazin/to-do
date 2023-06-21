'use client'

import UseEditModal from "@/hooks/useEditModal"
import { Todo } from "@prisma/client"
import { MdEditDocument } from "react-icons/md"

interface ToDoEditButtonProps {
  todo: Todo
  disabled: boolean
}

const ToDoEditButton: React.FC<ToDoEditButtonProps> = ({ todo, disabled }) => {
  const editModal = UseEditModal()
  return (
    <button
      disabled={disabled}
      onClick={() => {
        editModal.setId(todo.id)
        editModal.setTitle(todo.title)
        editModal.setDescription(todo.description)
        editModal.setDueAt(todo.dueAt)
        editModal.onOpen()
      }}
      className="hover:scale-110 transition disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <MdEditDocument size={20} />
    </button>
  )
}

export default ToDoEditButton