import getAllToDos from "@/actions/getAllToDos"
import getUser from "@/actions/getUser"
import ToDosModule from "@/components/modules/ToDosModule"
import { redirect } from "next/navigation"

export default async function CompletedTodos() {
  const user = await getUser()

  if (!user) {
    redirect('/login?callbackUrl=/todos/completed')
  }

  const todos = await getAllToDos(user, '/todos/completed')

  return (
    <ToDosModule todos={todos} />
  )
}