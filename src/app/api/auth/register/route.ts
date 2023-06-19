import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import prisma from "@/libs/prisma"
import { Prisma } from "@prisma/client"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { username, name, password } = body

    if (!username || !name || !password) {
      return NextResponse.json({ error: "Invalid credentials!" }, { status: 401 })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
      data: {
        username,
        name,
        password: hashedPassword
      }
    })

    return NextResponse.json({ user: user }, { status: 201 })

  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
      return NextResponse.json({ error: "Username already exists" }, { status: 409 })
    }
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}