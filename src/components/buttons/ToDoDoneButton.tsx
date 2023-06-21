'use client'

import updateToDo from "@/actions/doneToDo"
import useDoneModal from "@/hooks/useDoneModal"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "react-hot-toast"
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"

interface ToDoDoneButtonProps {
  todoId: string
  done: boolean
  setDone: Dispatch<SetStateAction<boolean>>
  feedId: string
}

const ToDoDoneButton: React.FC<ToDoDoneButtonProps> = ({
  todoId, done, setDone, feedId
}) => {
  const router = useRouter()
  const doneModal = useDoneModal()

  const handleDone = async () => {
    if (done && feedId !== '') {
      doneModal.setId(todoId)
      doneModal.setFeedId(feedId)
      doneModal.setSetDone(setDone)
      doneModal.onOpen()
      return
    }

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