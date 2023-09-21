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
          <FeedCard key={feed.id} feed={feed} user={user} />
        ))}
      </section>

      <p className="mt-16 text-[0.5rem] md:text-xs text-center font-light opacity-70">
        Created by <span className="font-semibold text-primary">Muhammad Hadziq Razin</span> &copy; 2023. All Rights Reserved.
      </p>
    </main>
  )
}

export default FeedsModule