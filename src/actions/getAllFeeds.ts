import prisma from "@/libs/prismadb"

const getAllFeeds = async () => {
  try {
    const res = await prisma.feed.findMany({
      include: {
        todo: true,
        user: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    return res || []

  } catch (err) {
    return []
  }
}

export default getAllFeeds