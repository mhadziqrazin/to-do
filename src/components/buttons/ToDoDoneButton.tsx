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
}

const ToDoDoneButton: React.FC<ToDoDoneButtonProps> = ({ todoId, done, setDone }) => {
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
      onClick={handleDone}
      className="hover:scale-110 transition"
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