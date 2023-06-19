import getUser from "@/actions/getUser";
import RegisterModule from "@/components/modules/RegisterModule";
import { redirect } from "next/navigation";

export default async function Register() {
  const user = await getUser()

  if (user) {
    redirect('/todos')
  }
  
  return (
    <RegisterModule />
  )
}