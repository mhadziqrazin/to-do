'use server'

import prisma from "../libs/prismadb"
import { User } from ".prisma/client"

export interface ToDosParams {
  sort: 'asc' | 'desc' | undefined
}

const getAllToDos = async (user: User, path: string, searchParams: ToDosParams) => {
  if (!user) {
    return []
  }

  let query: any = { userId: user.id }

  if (path === '/todos/not-yet') {
    query.done = false
  } else if (path === '/todos/completed') {
    query.done = true
  }

  const order = searchParams.sort || 'asc'

  try {
    const res = await prisma.todo.findMany({
      where: query,
      orderBy: {dueAt: order},
      include: {
        feed: true
      }
    })

    return res || []

  } catch (err) {
    return []
  }
}

export default getAllToDos