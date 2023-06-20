'use client'

import updateToDo from "@/actions/doneToDo"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-hot-toast"
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"

interface ToDoDoneButtonProps {
  todoId: string
  done: boolean
  setDone: Dispatch<SetStateAction<boolean>>
  disabled: boolean
}

const ToDoDoneButton: React.FC<ToDoDoneButtonProps> = ({ todoId, done, setDone, disabled }) => {
  const router = useRouter()

  const handleDone = async () => {
    try {

      setDone(!done)
      await updateToDo(todoId, !done)

      router.refresh()

    } catch (err) {
      toast.error('Something went wrong')
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={handleDone}
      className="hover:scale-110 transition disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      {done ? (
        <MdCheckBox size={20} />
      ) : (
        <MdCheckBoxOutlineBlank size={20} />
      )}
    </button>
  )
}

export default ToDoDoneButton