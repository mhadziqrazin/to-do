'use client'

import UseEditModal from "@/hooks/useEditModal"
import { Todo } from "@prisma/client"
import { MdEditDocument } from "react-icons/md"

interface ToDoEditButtonProps {
  todo: Todo
}

const ToDoEditButton: React.FC<ToDoEditButtonProps> = ({ todo }) => {
  const editModal = UseEditModal()
  return (
    <button
      onClick={() => {
        editModal.setId(todo.id)
        editModal.setTitle(todo.title)
        editModal.setDescription(todo.description)
        editModal.setDueAt(todo.dueAt)
        editModal.onOpen()
      }}
      className="hover:scale-110 transition"
    >
      <MdEditDocument size={20} />
    </button>
  )
}

export default ToDoEditButton