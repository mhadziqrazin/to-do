import { FieldValues, UseFormRegister } from "react-hook-form"

interface TextAreaProps {
  id: string
  label?: string
  register: UseFormRegister<FieldValues>
  required?: boolean
}

const TextArea: React.FC<TextAreaProps> = ({
  id, label, register, required
}) => {
  return (
    <textarea
      placeholder={label}
      {...register(id, { required })}
      className={`
        text-lg p-4 border-2-theme border-focus-theme bg-theme outline-none rounded-xl
        resize-none h-[30vh] 
      `}
    />
  )
}

export default TextArea