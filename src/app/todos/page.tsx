import getUser from "@/actions/getUser"
import { redirect } from "next/navigation"

export default async function Todos () {
  const user = await getUser()

  if (!user) {
    redirect('/login?callbackUrl=/todos')
  }

  return (
    <main className="page-center">
      hai
    </main>
  )
}