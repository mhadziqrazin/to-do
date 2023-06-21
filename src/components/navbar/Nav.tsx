import { GiRunningNinja } from "react-icons/gi"
import ToggleTheme from "../buttons/ToggleTheme"
import Link from "next/link"
import Filter from "./Filter"
import { MdLogin } from "react-icons/md"
import LogoutButton from "../buttons/LogoutButton"
import { User } from "@prisma/client"

interface NavProps {
  user: User | null
}

const Nav: React.FC<NavProps> = ({ user }) => {

  return (
    <nav className="shadow-theme bg-theme z-10 sticky w-full top-0">
      <div className="container mx-auto p-4">
        <ul className="flex items-center justify-between">
          <li>
            <Link href={"/"} className="flex gap-2 items-center text-primary">
              <GiRunningNinja size={30} />
              <h1 className="text-2xl font-bold hidden sm:block">
                TO DO
              </h1>
            </Link>
          </li>
          <li>
            <Filter />
          </li>
          <li className="flex gap-2 items-center">
            <ToggleTheme />
            {user ?
              (
                <LogoutButton />
              ) :
              (<>
                <Link
                  href={"/login"}
                  className="text-sm flex gap-1 items-center border-2 border-primary hover-primary-theme rounded-xl py-1 px-2"
                >
                  <p className="hidden sm:block">
                    Sign in
                  </p>
                  <MdLogin size={17} />
                </Link>
              </>)
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav