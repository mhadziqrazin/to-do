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
      secondaryAction={() => {}}
      secondaryActionLabel="Cancel"
    >
    </Modal>
  )
}

export default DeleteModal