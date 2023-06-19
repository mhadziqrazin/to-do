'use server'

import prisma from "../libs/prismadb"
import { User } from ".prisma/client"

const getAllToDos = async (user: User, path: string) => {
  if (!user) {
    return []
  }

  let query: any = { userId: user.id }

  if (path === '/todos/not-yet') {
    query.done = false
  } else if (path === '/todos/completed') {
    query.done = true
  }

  try {
    const res = await prisma.todo.findMany({
      where: query,
      orderBy: {dueAt: 'asc'}
    })

    return res || []

  } catch (err) {
    return []
  }
}

export default getAllToDos