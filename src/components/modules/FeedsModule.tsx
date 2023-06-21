import { Feed, Todo, User } from "@prisma/client"
import FeedCard from "../cards/FeedCard"

interface FeedsModuleProps {
  user: User | null
  feeds: (Feed & { todo: Todo, user: User })[]
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
          <FeedCard key={feed.id} feed={feed} />
        ))}
      </section>
    </main>
  )
}

export default FeedsModule