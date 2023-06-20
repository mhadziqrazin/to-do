import { IoPaperPlane } from "react-icons/io5"

interface ToDoShareButtonProps {
  todoId: string
}

const ToDoShareButton: React.FC<ToDoShareButtonProps> = ({ todoId }) => {
  return (
    <button
      className="hover:scale-110 transition"
    >
      <IoPaperPlane size={20} />
    </button>
  )
}

export default ToDoShareButton