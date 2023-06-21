import { Feed, User } from "@prisma/client"

interface FeedsModuleProps {
  user: User | null
  feeds: Feed[]
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
        {/* {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))} */}
      </section>
    </main>
  )
}

export default FeedsModule