'use client'

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useMemo, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { signIn } from "next-auth/react"
import InputText from "@/components/inputs/InputText"
import Button from "@/components/buttons/Button"

export default function Login() {
  const [loading, setLoading] = useState(false)
  const params = useSearchParams()
  const router = useRouter()
  const { register, handleSubmit, watch } = useForm<FieldValues>({
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const username = watch('username')
  const password = watch('password')

  const disableButton = useMemo(() => {
    return (username === '') || (password === '')
  }, [username, password])

  const handleSignIn: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)
    const callbackUrl = params?.get('callbackUrl') || '/'

    try {
      const res = await signIn('credentials', {
        ...data,
        redirect: false
      })
      if (res?.ok) {
        toast.success('Logged in')
        router.push(callbackUrl)
        router.refresh()
      } else {
        toast.error(res?.error as string)
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  return (
    <main className="page-center">
      <section className="flex flex-col gap-8 w-one">
        <h1 className="text-2xl">
          <span className="text-primary font-semibold">Login</span> and start actually do things
        </h1>
        <section className="flex flex-col place-content-center gap-4">
          <InputText
            id="username"
            label="exampleusername"
            register={register}
            required
          />
          <InputText
            id="password"
            label="Password"
            type="password"
            register={register}
            required
          />
          <Button
            onClick={handleSubmit(handleSignIn)}
            disabled={disableButton}
            loading={loading}
          >
            Login
          </Button>
        </section>
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