import getAllFeeds from "@/actions/getAllFeeds"
import getUser from "@/actions/getUser"
import FeedsModule from "@/components/modules/FeedsModule"

export default async function Home() {
  const user = await getUser()
  const feeds = await getAllFeeds()

  return (
    <FeedsModule user={user} feeds={feeds} />
  )
}
