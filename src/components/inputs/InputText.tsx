import { FieldValues, UseFormRegister } from "react-hook-form"

interface InputTextProps {
  id: string
  label?: string
  type?: string
  register: UseFormRegister<FieldValues>
  required?: boolean
}

const InputText: React.FC<InputTextProps> = ({
  id, label, type = 'text', register, required
}) => {
  return (
    <input
      type={type}
      placeholder={label}
      {...register(id, { required })}
      className={`
        text-lg p-4 border-2-theme border-focus-theme bg-theme outline-none rounded-xl
      `}
    />
  )
}

export default InputText