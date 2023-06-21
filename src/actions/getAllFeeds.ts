import prisma from "@/libs/prismadb"

const getAllFeeds = async () => {
  try {
    const res = await prisma.feed.findMany()

    return res || []

  } catch (err) {
    return []
  }
}

export default getAllFeeds