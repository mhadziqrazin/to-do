'use server'

import { prisma } from "@/libs/prisma"
import { User } from "@prisma/client"

const getAllToDos = async (user: User) => {
  try {
    if (!user) {
      return []
    }
    
    const res = await prisma.todo.findMany({
      where: {
        userId: user.id
      }
    })

    return res

  } catch (err) {
    return []
  }
}

export default getAllToDos