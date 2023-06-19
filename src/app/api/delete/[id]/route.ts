import getUser from "@/actions/getUser"
import client from "@/libs/prismadb"
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

    await client.todo.delete({
      where: {
        id
      }
    })

    return NextResponse.json({ message: 'Deleted' }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}