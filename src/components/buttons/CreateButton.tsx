'use client'

import useCreateModal from "@/hooks/useCreateModal"
import { BsPlusSquareFill } from "react-icons/bs"

const CreateButton = () => {
  const createModal = useCreateModal()

  return (
    <button
      onClick={createModal.onOpen}
      className="absolute left-0 shadow-theme"
    >
      <BsPlusSquareFill size={25} />
    </button>
  )
}

export default CreateButton