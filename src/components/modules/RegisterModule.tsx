'use client'

import Button from "@/components/buttons/Button";
import InputText from "@/components/inputs/InputText";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const RegisterModule = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const { register, handleSubmit, watch } = useForm<FieldValues>({
    defaultValues: {
      username: '',
      name: '',
      password: ''
    }
  })

  const username = watch('username')
  const name = watch('name')
  const password = watch('password')
  
  const disableButton = useMemo(() => {
    return (username === '') || (name === '') || (password === '')
  }, [username, name, password])

  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)
    
    try {
      const res = await axios.post('/api/auth/register', data)
      if (res.status === 201) {
        toast.success('Registered')
        router.push('/login')
      } else {
        toast.error(res.data.error as string)
      }
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status === 409) {
        toast.error(err.response.data.error)
      } else {
        toast.error('Something went wrong')
      }
    }

    setLoading(false)
  }

  return (
    <main className="page-center">
      <section className="flex flex-col gap-8 w-one">
        <h1 className="text-2xl">
          <span className="text-primary font-semibold">Register</span> to start actually do things
        </h1>
        <section className="flex flex-col place-content-center gap-4">
          <InputText
            id="username"
            label="exampleusername"
            register={register}
            required
          />
          <InputText
            id="name"
            label="Example Name"
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
            onClick={handleSubmit(handleRegister)}
            disabled={disableButton}
            loading={loading}
          >
            Register
          </Button>
        </section>
        <p className="text-center font-light">
          Already have an account? <span className="text-primary hover:underline">
            <Link href={"/login"}>
              Login
            </Link>
          </span>
        </p>
      </section>
    </main>
  )
}

export default RegisterModule