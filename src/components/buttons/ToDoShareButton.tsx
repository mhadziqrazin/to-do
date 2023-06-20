import { IoPaperPlane } from "react-icons/io5"

interface ToDoShareButtonProps {
  todoId: string
  disabled: boolean
}

const ToDoShareButton: React.FC<ToDoShareButtonProps> = ({ todoId, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="hover:scale-110 transition disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <IoPaperPlane size={20} />
    </button>
  )
}

export default ToDoShareButton