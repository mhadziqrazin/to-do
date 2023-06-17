'use client'

import useDeleteModal from "@/hooks/useDeleteModal"
import { MdOutlineDelete } from "react-icons/md"

interface ToDoDeleteButtonProps {
  todoId: string
}

const ToDoDeleteButton: React.FC<ToDoDeleteButtonProps> = ({ todoId }) => {
  const deleteModal = useDeleteModal()

  return (
    <button>
      <MdOutlineDelete size={20} />
    </button>
  )
}

export default ToDoDeleteButton