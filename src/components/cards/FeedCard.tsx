import { Feed as FeedCard, Todo, User } from "@prisma/client"
import Avatar from "../images/Avatar"

interface FeedCardProps {
  feed: FeedCard & { todo: Todo, user: User }
}

const FeedCard: React.FC<FeedCardProps> = ({ feed }) => {
  return (
    <div className="bg-theme border-2-theme rounded-xl overflow-hidden shadow-theme">
      <section className="flex items-center p-2">
        <div className="flex gap-2 items-center">
          <Avatar src={feed.user.image || undefined} />
          <h1>
            {feed.user.name}
          </h1>
        </div>
        <p>
          
        </p>
      </section>
    </div>
  )
}

export default FeedCard