import getUser from "@/actions/getUser"
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

interface UpdateParams {
  id: string
}

export async function PUT(req: Request, { params }: { params: UpdateParams }) {
  try {
    const user = await getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthenticated' }, { status: 403 })
    }

    const { id } = params

    if (!id) {
      return NextResponse.json({ error: 'Invalid ID!' }, { status: 400 })
    }

    const body = await req.json()

    if (!body) {
      return NextResponse.json({ error: 'Invalid payload' })
    }

    const res = await prisma.todo.update({
      where: {
        id
      },
      data: body
    })

    return NextResponse.json({ todo: res }, { status: 200 })
    
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}