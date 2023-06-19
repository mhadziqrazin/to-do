import dateFormat from "dateformat"
import { FieldValues, UseFormRegister } from "react-hook-form"

interface InputTextProps {
  id: string
  register: UseFormRegister<FieldValues>
}

const InputDateTime: React.FC<InputTextProps> = ({
  id, register
}) => {
  return (
    <input
      type='datetime-local'
      className={`
        text-lg p-4 border-2-theme border-focus-theme bg-theme outline-none rounded-xl
      `}
      {...register(id, { required: true })}
    />
  )
}

export default InputDateTime