'use server'

import prisma from "../libs/prismadb"
import { authOptions } from "../pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

const getUser = async () => {
  try {
    const session: any = await getServerSession(authOptions)

    if (!session || !session.id) {
      return null
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.id
      }
    })

    if (!user) {
      return null
    }

    return user
    
  } catch (err) {
    return null
  }
}
export default getUser