import getUser from "@/actions/getUser"
import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

interface UpdateParams {
  id: string
}

export async function PUT(req: Request, { params }: { params: UpdateParams }) {
  const user = await getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 403 })
  }

  const { id } = params

  if (!id) {
    return NextResponse.json({error: 'Invalid ID!'}, {status: 400})
  }
  
  const res = await prisma.todo.update({
    where: {
      id
    },
    data: {

    }
  })
}