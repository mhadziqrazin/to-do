import getAllToDos from "@/actions/getAllToDos"
import getUser from "@/actions/getUser"
import ToDosModule from "@/components/modules/ToDosModule"
import { Todo } from "@prisma/client"
import { redirect } from "next/navigation"

export default async function AllTodos() {
  const user = await getUser()

  if (!user) {
    redirect('/login?callbackUrl=/todos/all')
  }

  const todos = await getAllToDos(user, '/todos/all')
  // const todos: Todo[] = []

  return (
    <ToDosModule todos={todos} />
  )
}