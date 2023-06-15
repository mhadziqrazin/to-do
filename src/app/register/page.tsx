'use client'

import InputText from "@/components/inputs/InputText";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";

export default function Register() {
  const { register } = useForm<FieldValues>({
    defaultValues: {
      username: '',
      name: '',
      password: ''
    }
  })
  return (
    <main className="page-center">
      <section>
        <h1 className="text-2xl">
          <span className="text-primary font-semibold">Register</span> to start actually do things
        </h1>
        <section className="flex flex-col items-center gap-4">
          <InputText
            id="username"
            label="exampleusername"
            register={register}
          />
          <InputText
            id="name"
            label="Example Name"
            register={register}
          />
          <InputText
            id="password"
            label="Password"
            type="password"
            register={register}
          />
        </section>
        <p className="text-center font-light">
          Already have an account? <span className="text-primary underline">
            <Link href={"/login"}>
              Login
            </Link>
          </span>
        </p>
      </section>
    </main>
  )
}