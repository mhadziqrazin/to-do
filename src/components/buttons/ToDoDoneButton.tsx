'use client'

import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"

interface ToDoDoneButtonProps {
  todoId: string
  done: boolean
}

const ToDoDoneButton: React.FC<ToDoDoneButtonProps> = ({ todoId, done }) => {
  return (
    <button className="hover:scale-110 transition">
      {done ? (
        <MdCheckBox size={20} />
      ) : (
        <MdCheckBoxOutlineBlank size={20} />
      )}
    </button>
  )
}

export default ToDoDoneButton