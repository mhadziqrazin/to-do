'use client'

import useDeleteModal from "@/hooks/useDeleteModal"
import Modal from "./Modal"
import { useState } from "react"
import deleteToDo from "@/actions/deleteToDo"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"



const DeleteModal = () => {
  const deleteModal = useDeleteModal()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDeleteToDo = async () => {
    setLoading(true)

    try {
      deleteToDo(deleteModal.id)
      toast.success('To Do deleted')
      router.refresh()
    } catch (err) {
      toast.error('Something went wrong')
    }

    deleteModal.onClose()
    setLoading(false)
  }

  return (
    <Modal
      isOpen={deleteModal.isOpen}
      title="Are you sure want to delete?"
      action={handleDeleteToDo}
      actionLabel="Delete"
      onClose={deleteModal.onClose}
      disabled={false}
      loading={loading}
    >
      <p className="text-center text-secondary-theme">
        You can&apos;t undo this action
      </p>
    </Modal>
  )
}

export default DeleteModal