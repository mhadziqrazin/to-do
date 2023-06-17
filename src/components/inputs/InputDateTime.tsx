interface InputTextProps {
  id: string
  onChange: (id: string, value: string) => void
}

const InputDateTime: React.FC<InputTextProps> = ({
  id, onChange
}) => {
  return (
    <input
      type='datetime-local'
      className={`
        text-lg p-4 border-2-theme border-focus-theme bg-theme outline-none rounded-xl
      `}
      onChange={(e) => onChange(id, e.target.value)}
    />
  )
}

export default InputDateTime