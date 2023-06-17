import getAllToDos from "@/actions/getAllToDos"
import getUser from "@/actions/getUser"
import ToDosModule from "@/components/modules/ToDosModule"
import { redirect } from "next/navigation"

export default async function NotYetTodos() {
  const user = await getUser()

  if (!user) {
    redirect('/login?callbackUrl=/todos/not-yet')
  }

  const todos = await getAllToDos(user, '/todos/all')

  return (
    <ToDosModule todos={todos} />
  )
}