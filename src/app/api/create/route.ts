import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    
  } catch (err) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}