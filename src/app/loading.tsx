import getUser from '@/actions/getUser'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default async function Loading() {
  const user = await getUser()

  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col gap-8 w-one">
        <div className="justify-center text-center">
          <h1 className="text-2xl">
            Hi, <span className="font-semibold text-primary">{user ? user.name : 'newcomer'}</span>!
          </h1>
        </div>
        <div className="bg-theme border-2-theme rounded-xl overflow-hidden shadow-theme">
          <section className="p-2">
            <Skeleton />
          </section>
          <hr className="border-1-theme" />
          <section className="p-2 font-light">
            <p>
              <Skeleton count={3} />
            </p>
          </section>
        </div>
        <div className="bg-theme border-2-theme rounded-xl overflow-hidden shadow-theme">
          <section className="p-2">
            <Skeleton />
          </section>
          <hr className="border-1-theme" />
          <section className="p-2 font-light">
            <p>
              <Skeleton count={3} />
            </p>
          </section>
        </div>
        <div className="bg-theme border-2-theme rounded-xl overflow-hidden shadow-theme">
          <section className="p-2">
            <Skeleton />
          </section>
          <hr className="border-1-theme" />
          <section className="p-2 font-light">
            <p>
              <Skeleton count={3} />
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}