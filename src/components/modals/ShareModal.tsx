'use client'

import useShareModal from "@/hooks/useShareModal"
import Modal from "./Modal"
import { useState } from "react"
import { toast } from "react-hot-toast"
import axios from "axios"
import { redirect, useSearchParams } from "next/navigation"

const ShareModal = () => {
  const shareModal = useShareModal()
  const [loading, setLoading] = useState(false)
  const sort = useSearchParams()?.get('sort') || 'asc'

  const handleShare = async () => {
    try {
      const res = await axios.post(`/api/feed/${shareModal.id}`)

      if (res.status !== 201) {
        throw new Error()
      }

      toast.success('Accomplishment shared!')
      redirect(`/?sort=${sort}`)

    } catch (err) {
      toast.error('Something went wrong')
    }
  }

  return (
    <Modal
      isOpen={shareModal.isOpen}
      title="Share Accomplishment"
      action={handleShare}
      actionLabel="Share"
      onClose={shareModal.onClose}
      disabled={false}
      loading={loading}
      visible={shareModal.visible}
      setVisible={shareModal.setVisible}
    >
      <p className="text-center text-secondary-theme">
        Share your accomplishment with others to motivate them!<br />
        (Or just show off tbh)
      </p>
    </Modal>
  )
}

export default ShareModal