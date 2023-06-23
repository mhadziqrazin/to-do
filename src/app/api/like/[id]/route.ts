import getUser from "@/actions/getUser"
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

interface LikeParams {
  id: string
}

export async function POST(
  req: Request, { params }: { params: LikeParams }
) {
  try {
    const user = await getUser()

    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params

    if (!id) {
      return NextResponse.json({ message: 'Invalid ID!' }, { status: 400 })
    }

    const res = await prisma.likes.create({
      data: {
        userId: user.id,
        feedId: id
      }
    })

    return NextResponse.json({ likes: res }, { status: 201 })

  } catch (err) {
    return NextResponse.json({ message: 'Something went wrong', error: err }, { status: 500 })
  }
}

export async function DELETE(
  req: Request, { params }: { params: LikeParams }
) {
  try {
    const user = await getUser()

    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params

    if (!id) {
      return NextResponse.json({ message: 'Invalid ID!' }, { status: 400 })
    }

    await prisma.likes.delete({
      where: {
        userId_feedId: { userId: user.id, feedId: id }
      }
    })

    return NextResponse.json({ message: 'Removed like' }, { status: 200 })

  } catch (err) {
    return NextResponse.json({ message: 'Something went wrong', error: err }, { status: 500 })
  }
}