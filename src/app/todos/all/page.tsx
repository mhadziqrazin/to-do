import getAllToDos from "@/actions/getAllToDos"
import getUser from "@/actions/getUser"
import ToDosModule from "@/components/modules/ToDosModule"
import { redirect } from "next/navigation"
import ToDosPageProps from "../ToDosPageProps"

export default async function AllTodos({ searchParams }: ToDosPageProps) {
  const user = await getUser()

  if (!user) {
    redirect('/login?callbackUrl=/todos/all')
  }

  const todos = await getAllToDos(user, '/todos/all', searchParams)

  const emptyToDo = (
    <>
      <p className="font-medium text-lg">
        You don&apos;t have any To Do list :(
      </p>
      <p className="font-light">
        Start creating one by clicking on the plus button up left there!
      </p>
      <p className="font-light">
        After you finish a To Do list, you can share your accomplishment so everyone can see it on the Feed page!<br />
        (Flex mode 😎)
      </p>
    </>
  )

  return (
    <ToDosModule todos={todos} emptyToDo={emptyToDo} />
  )
}