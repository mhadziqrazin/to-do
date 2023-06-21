import getUser from "@/actions/getUser"
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

interface FeedParams {
  id: string
}

export async function POST(
  req: Request, { params }: { params: FeedParams }
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

    const res = await prisma.feed.create({
      data: {
        userId: user.id,
        todoId: id
      }
    })

    return NextResponse.json({ feed: res }, { status: 201 })

  } catch (err) {
    return NextResponse.json({ message: 'Something went wrong', error: err }, { status: 500 })
  }
}

export async function DELETE(
  req: Request, { params }: { params: FeedParams }
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

    await prisma.feed.delete({
      where: {
        id
      }
    })

    return NextResponse.json({ message: 'Deleted' }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ message: 'Something went wrong', error: err }, { status: 500 })
  }
}