'use client'

import useDeleteModal from "@/hooks/useDeleteModal"
import Modal from "./Modal"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import axios from "axios"

const DeleteModal = () => {
  const deleteModal = useDeleteModal()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDeleteToDo = async () => {
    setLoading(true)

    try {
      if (deleteModal.feedId === 'feed') {
        const res = await axios.delete(`/api/feed/${deleteModal.id}`)

        if (res.status === 200) {
          toast.success('Feed deleted')
          router.refresh()
        } else {
          toast.error('Something went wrong')
        }
        
      } else {

        const res = await axios.delete(`/api/todo/${deleteModal.id}`)

        if (res.status === 200) {
          toast.success('To Do list deleted')
          router.refresh()
        } else {
          toast.error('Something went wrong')
        }
      }
    } catch (err) {
      toast.error('Something went wrong')
    }

    deleteModal.setVisible(false)
    setTimeout(() => {
      deleteModal.onClose()
    }, 300)

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
      visible={deleteModal.visible}
      setVisible={deleteModal.setVisible}
    >
      <p className="text-center text-secondary-theme">
        You can&apos;t undo this action
      </p>
      {deleteModal.feedId !== '' && deleteModal.feedId !== 'feed' &&
        <p className="text-center text-secondary-theme">
          This action will also delete this list&apos;s feed post!
        </p>
      }
    </Modal>
  )
}

export default DeleteModal