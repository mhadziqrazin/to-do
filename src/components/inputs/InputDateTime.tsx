import dateFormat from "dateformat"

interface InputTextProps {
  id: string
  onChange: (id: string, value: string) => void
  defaultValue?: Date
}

const InputDateTime: React.FC<InputTextProps> = ({
  id, onChange, defaultValue = new Date()
}) => {
  return (
    <input
      type='datetime-local'
      className={`
        text-lg p-4 border-2-theme border-focus-theme bg-theme outline-none rounded-xl
      `}
      value={dateFormat(defaultValue, "yyyy-mm-dd HH:MM")}
      onChange={(e) => onChange(id, e.target.value)}
    />
  )
}

export default InputDateTime