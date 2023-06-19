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
        className="rounded-full border-2 border-primary shadow-md"
      />
    </div>
  )
}

export default Avatar