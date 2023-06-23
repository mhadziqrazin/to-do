'use client'

import { Feed, Likes, Todo, User } from "@prisma/client"
import Avatar from "../images/Avatar"
import { format, formatDistance } from "date-fns"
import { AiFillLike } from "react-icons/ai"
import { useMemo, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

interface FeedCardProps {
  feed: Feed & { todo: Todo, user: User, userLikes: Likes[] }
  user: User | null
}

const FeedCard: React.FC<FeedCardProps> = ({ feed, user }) => {
  const [likes, setLikes] = useState(feed.userLikes.length)
  const router = useRouter()
  
  const hasLiked = useMemo(() => {
    const isLiked = feed.userLikes.filter((like) => like.userId === user?.id)
    return isLiked.length === 1
  }, [user])

  const [liked, setLiked] = useState(hasLiked)

  const handleLike = async () => {
    if (!user) {
      return toast.error('Login first 🥺')
    }

    if (!liked) {
      setLikes((value) => value + 1)
      setLiked(true)
      await addLike()
    } else {
      setLikes((value) => value - 1)
      setLiked(false)
      await removeLike()
    }
  }

  const addLike = async () => {
    try {
      const res = await axios.post(`/api/like/${feed.id}`)
      
      if (res.status !== 201) {
        throw new Error()
      }

      router.refresh()
    } catch (err) {
      console.log(err)
      setLiked(hasLiked)
    }
  }

  const removeLike = async () => {
    try {
      const res = await axios.delete(`/api/like/${feed.id}`)
      
      if (res.status !== 200) {
        throw new Error()
      }

      router.refresh()
    } catch (err) {
      console.log(err)
      setLiked(hasLiked)
    }
  }

  return (
    <div className="bg-theme border-2-theme rounded-xl overflow-hidden shadow-theme">
      <section className="flex justify-between items-center p-2">
        <div className="flex gap-2 items-center max-w-[calc(100%-74px)]">
          <Avatar src={feed.user.image || undefined} />
          <h1 className="text-lg overflow-x-auto">
            {feed.user.username}
          </h1>
        </div>
        <div className="text-xs text-secondary-theme flex flex-col items-end">
          <p>
            {format(feed.createdAt, 'dd/MM/yyyy')}
          </p>
          <p>
            {format(feed.createdAt, 'HH:mm')}
          </p>
        </div>
      </section>
      <hr className="border-1-theme" />
      <section className="p-2 font-light">
        <p>
          I just finished &quot;<span className="font-medium">{feed.todo.title}</span>&quot; that has due date on {format(feed.todo.dueAt, 'dd/MM/yyyy - HH:mm',)}!
        </p>
        {
          feed.todo.dueAt >= feed.createdAt ? (
            <p>
              And it&apos;s <span className="text-primary font-medium">{formatDistance(feed.todo.dueAt, feed.createdAt)}</span> earlier!!
            </p>
          ) : (
            <p>
              But it&apos;s <span className="text-primary font-medium">{formatDistance(feed.todo.dueAt, feed.createdAt)}</span> late :(
            </p>
          )
        }
      </section>
      <section className="p-2 flex gap-2 items-center">
        <button
          onClick={handleLike}
          className={`${liked && 'text-primary'} hover:scale-110 transition`}
        >
          <AiFillLike size={20} />
        </button>
        <p>
          {likes}
        </p>
      </section>
    </div>
  )
}

export default FeedCard