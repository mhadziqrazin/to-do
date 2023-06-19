interface InputTextProps {
  id: string
  onChange: (id: string, value: string) => void
  defaultValue?: string
}

const InputDateTime: React.FC<InputTextProps> = ({
  id, onChange, defaultValue
}) => {
  return (
    <input
      type='datetime-local'
      className={`
        text-lg p-4 border-2-theme border-focus-theme bg-theme outline-none rounded-xl
      `}
      value={'2023-06-17T20:23:41'}
      onChange={(e) => onChange(id, e.target.value)}
    />
  )
}

export default InputDateTime