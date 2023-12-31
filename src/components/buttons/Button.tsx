import { BarLoader } from "react-spinners"

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  secondary?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children, onClick, disabled, secondary, loading
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        text-lg font-medium w-full flex gap-1 place-content-center border-2 border-primary rounded-xl p-4 min-h-[64px] items-center
        disabled:cursor-not-allowed disabled:text-primary
        ${disabled && 'disabled:bg-transparent disabled:opacity-50'}
        ${secondary ? 'hover-secondary-theme' : 'hover-primary-theme'}
        ${loading && ' hover:bg-primary'}
      `}
    >
      {
        !loading ? (
          <>{children}</>
        ) : (<BarLoader color="white" />)
      }
    </button>
  )
}

export default Button