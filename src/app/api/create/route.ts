import getUser from "@/actions/getUser";
import client from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await getUser()

    if (!user) {
      return NextResponse.json({ error: 'Login required' }, { status: 401 })
    }

    const body = await req.json()
    const { title, description, dueAt } = body

    if (!title || !description || !dueAt) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    const res = await client.todo.create({
      data: {
        title,
        description,
        dueAt,
        userId: user.id
      }
    })

    return NextResponse.json({ todo: res }, { status: 201 })

  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}