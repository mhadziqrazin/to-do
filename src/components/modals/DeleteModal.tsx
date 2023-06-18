'use client'

import useDeleteModal from "@/hooks/useDeleteModal"
import Modal from "./Modal"
import { useState } from "react"

const DeleteModal = () => {
  const deleteModal = useDeleteModal()
  const [loading, setLoading] = useState(false)

  return (
    <Modal
      isOpen={deleteModal.isOpen}
      title="Are you sure want to delete?"
      action={() => { }}
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