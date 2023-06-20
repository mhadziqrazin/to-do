import getAllToDos from "@/actions/getAllToDos"
import getUser from "@/actions/getUser"
import ToDosModule from "@/components/modules/ToDosModule"
import { redirect } from "next/navigation"
import ToDosPageProps from "../ToDosPageProps"

export default async function CompletedTodos({ searchParams }: ToDosPageProps) {
  const user = await getUser()

  if (!user) {
    redirect('/login?callbackUrl=/todos/completed')
  }

  const todos = await getAllToDos(user, '/todos/completed', searchParams)

  return (
    <ToDosModule todos={todos} />
  )
}