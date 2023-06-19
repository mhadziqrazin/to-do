import getUser from "@/actions/getUser"
import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

interface DeleteParams {
  id: string
}

export async function DELETE(
  req: Request, { params }: { params: DeleteParams }
) {
  try {
    const user = await getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthenticated' }, { status: 403 })
    }

    const { id } = params

    if (!id) {
      return NextResponse.json({ error: 'Invalid ID!' }, { status: 400 })
    }

    await prisma.todo.delete({
      where: {
        id
      }
    })

    return NextResponse.json({ message: 'Deleted' }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}