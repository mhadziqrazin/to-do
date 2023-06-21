import Image from "next/image"

interface AvatarProps {
  src?: string
  onClick?: () => void
}

const Avatar: React.FC<AvatarProps> = ({ src, onClick }) => {
  return (
    <div onClick={onClick}>
      <Image
        alt='Avatar'
        height={"30"}
        width={"30"}
        src={src || "/images/placeholder.jpg"}
        className="rounded-full min-h-[30px] min-w-[30px] shadow-md"
      />
    </div>
  )
}

export default Avatar