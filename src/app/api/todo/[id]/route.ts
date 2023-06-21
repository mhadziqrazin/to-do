import getUser from "@/actions/getUser"
import prisma from "@/libs/prismadb"
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
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
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
    return NextResponse.json({ message: 'Something went wrong', error: err }, { status: 500 })
  }
}