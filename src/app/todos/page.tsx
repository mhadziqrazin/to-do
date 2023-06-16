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
        <div className="flex gap-4 items-center justify-center relative">
          <CreateButton />
          <p className="text-2xl font-semibold">
            ALL TO DO LISTS
          </p>
        </div>
      </section>
    </main>
  )
}