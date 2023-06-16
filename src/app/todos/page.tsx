import getUser from "@/actions/getUser"
import CreateButton from "@/components/buttons/CreateButton"
import { redirect } from "next/navigation"

export default async function Todos() {
  const user = await getUser()

  if (!user) {
    redirect('/login?callbackUrl=/todos')
  }

  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col gap-8 w-one">
        <div className="flex gap-4 items-center justify-center relative text-primary">
          <CreateButton />
          <p className="text-xl">
            All to do lists
          </p>
        </div>
      </section>
    </main>
  )
}