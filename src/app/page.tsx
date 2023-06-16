import getUser from "@/actions/getUser"

export default async function Home() {
  const user = await getUser()

  return (
    <>
      <section className="">
        {user ? user.name : 'Hi newcomer!'}
      </section>
    </>
  )
}
