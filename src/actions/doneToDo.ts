'use server'

import prisma from "../libs/prismadb"

const updateToDo = async (id: string, done: boolean) => {
  await prisma.todo.update({
    where: {
      id
    },
    data: {
      done
    }
  })
}

export default updateToDo