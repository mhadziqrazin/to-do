'use client'

import useDeleteModal from "@/hooks/useDeleteModal"
import { MdOutlineDelete } from "react-icons/md"

interface ToDoDeleteButtonProps {
  todoId: string
  feedId: string
}

const ToDoDeleteButton: React.FC<ToDoDeleteButtonProps> = ({ todoId, feedId }) => {
  const deleteModal = useDeleteModal()

  return (
    <button
      onClick={() => {
        deleteModal.setId(todoId)
        deleteModal.setFeedId(feedId)
        deleteModal.onOpen()
      }}
      className="hover:scale-110 transition"
    >
      <MdOutlineDelete size={20} />
    </button>
  )
}

export default ToDoDeleteButton