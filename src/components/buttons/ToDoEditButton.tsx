'use client'

import { MdEditDocument } from "react-icons/md"

interface ToDoEditButtonProps {
  todoId: string
}

const ToDoEditButton: React.FC<ToDoEditButtonProps> = ({ todoId }) => {
  return (
    <button className="hover:scale-110 transition">
      <MdEditDocument size={20} />
    </button>
  )
}

export default ToDoEditButton