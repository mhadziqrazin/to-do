import { Feed, Likes, Todo, User } from "@prisma/client"
import FeedCard from "../cards/FeedCard"

interface FeedsModuleProps {
  user: User | null
  feeds: (Feed & { todo: Todo, user: User, userLikes: Likes[] })[]
}

const FeedsModule: React.FC<FeedsModuleProps> = ({
  user, feeds
}) => {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col gap-8 w-one">
        <div className="justify-center text-center">
          <h1 className="text-2xl">
            Hi, <span className="font-semibold text-primary">{user ? user.name : 'newcomer'}</span>!
          </h1>
        </div>
        {feeds.map((feed) => (
          <FeedCard key={feed.id} feed={feed} user={user}/>
        ))}
      </section>
    </main>
  )
}

export default FeedsModule