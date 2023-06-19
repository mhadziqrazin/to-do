'use server'

import client from "@/libs/prisma"

const updateToDo = async (id: string, done: boolean) => {
  await client.todo.update({
    where: {
      id
    },
    data: {
      done
    }
  })
}

export default updateToDo