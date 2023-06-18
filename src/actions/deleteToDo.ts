'use server'

import { prisma } from "../libs/prisma"

const deleteToDo = async (id: string) => {
  await prisma.todo.delete({
    where : {
      id
    }
  })
}

export default deleteToDo