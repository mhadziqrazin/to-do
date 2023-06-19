import getUser from "@/actions/getUser"
import LoginModule from "@/components/modules/LoginModule"
import { redirect } from "next/navigation"

export default async function Login() {
  const user = await getUser()

  if (user) {
    redirect('/todos')
  }
  
  return (
    <LoginModule />
  )
}