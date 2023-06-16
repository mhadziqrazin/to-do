'use server'

import { prisma } from "@/libs/prisma"
import { User } from "@prisma/client"

const getAllToDos = async (user: User, filter: string) => {
  if (!user) {
    return []
  }

  let query: any = { userId: user.id }

  switch (filter) {
    case 'Not yet':
      query.done = false
      break

    case 'Completed':
      query.done = true
  }

  try {
    const res = await prisma.todo.findMany({
      where: query
    })

    return res || []

  } catch (err) {
    return []
  }
}

export default getAllToDos