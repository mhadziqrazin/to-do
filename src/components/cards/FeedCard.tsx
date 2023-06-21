import { Feed as FeedCard, Todo, User } from "@prisma/client"
import Avatar from "../images/Avatar"
import { format } from "date-fns"

interface FeedCardProps {
  feed: FeedCard & { todo: Todo, user: User }
}

const FeedCard: React.FC<FeedCardProps> = ({ feed }) => {
  return (
    <div className="bg-theme border-2-theme rounded-xl overflow-hidden shadow-theme">
      <section className="flex justify-between items-center p-2">
        <div className="flex gap-2 items-center">
          <Avatar src={feed.user.image || undefined} />
          <h1 className="text-lg">
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
    </div>
  )
}

export default FeedCard