'use client'

import Link from "next/link"
import { FieldValues, useForm } from "react-hook-form"

export default function Login() {
  const { } = useForm<FieldValues>({
    defaultValues: {

    }
  })
  return (
    <main className="page-center">
      <section className="flex flex-col justify-center gap-8 w-one">
        <h1 className="text-2xl">
          <span className="text-primary font-semibold">Login</span> and start actually do things
        </h1>
        <p className="text-center font-light">
          Don&apos;t have an account? <span className="text-primary hover:underline">
            <Link href={"/register"}>
              Register
            </Link>
          </span>
        </p>
      </section>
    </main>
  )
}