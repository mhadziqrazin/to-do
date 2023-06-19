import getUser from "@/actions/getUser"

export default async function Home() {
  const user = await getUser()

  return (
    <>
      <section className="grid page-center">
        <div className="justify-center text-center">
          <h1 className="text-2xl">
            Hi, <span className="font-semibold text-primary">{user ? user.name : 'Hi newcomer!'}</span>!
          </h1>
          <p>
            {user ? 'Sorry this page is under development :( Stay tuned!' : undefined}
          </p>
          <p className="text-secondary-theme">
            But no worry you can still use the basic To Do list feature (ik, it&apos;s boring)
          </p>
        </div>
      </section>
    </>
  )
}
