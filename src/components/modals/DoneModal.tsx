'use client'

import useDoneModal from "@/hooks/useDoneModal"
import Modal from "./Modal"
import { toast } from "react-hot-toast"
import updateToDo from "@/actions/doneToDo"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useState } from "react"


const DoneModal = () => {
  const doneModal = useDoneModal()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleNoProblem = async () => {
    setLoading(true)

    try {
      if (!doneModal.setDone) return

      doneModal.setDone(false)
      await updateToDo(doneModal.id, false)
      await axios.delete(`/api/feed/${doneModal.feedId}`)

      router.refresh()

      doneModal.setVisible(false)
      setTimeout(() => {
        doneModal.onClose()
      }, 300)

    } catch (err) {
      console.log(err)
      toast.error('Something went wrong')
    }

    setLoading(false)
  }

  return (
    <Modal
      isOpen={doneModal.isOpen}
      title="Uncheck the To Do list"
      action={handleNoProblem}
      actionLabel="No Problem"
      onClose={doneModal.onClose}
      disabled={false}
      loading={loading}
      visible={doneModal.visible}
      setVisible={doneModal.setVisible}
    >
      <p className="text-secondary-theme">
        If you uncheck this To Do list, the corresponding feed post will be deleted
      </p>
    </Modal>
  )
}

export default DoneModal