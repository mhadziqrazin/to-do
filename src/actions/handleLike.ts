'use server'

import prisma from "@/libs/prismadb"
import getUser from "./getUser"

export const addLike = async (feedId: string) => {
  try {
    const user = await getUser()

    if (!user) {
      return null
    }

    return await prisma.likes.create({
      data: {
        userId: user.id,
        feedId
      }
    })
  } catch (err) {
    return null
  }
}

export const removeLike = async (feedId: string) => {
  try {

    const user = await getUser()

    if (!user) {
      return null
    }

    return await prisma.likes.delete({
      where: {
        userId_feedId: { userId: user.id, feedId }
      }
    })
  } catch (err) {
    return null
  }
}
