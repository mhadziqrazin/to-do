import { GiRunningNinja } from "react-icons/gi"
import ToggleTheme from "../buttons/ToggleTheme"
import Link from "next/link"
import Filter from "./Filter"

interface NavProps { }

const Nav: React.FC<NavProps> = ({ }) => {

  return (
    <nav className="shadow-theme bg-theme z-10 sticky top-0">
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
          <li>
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav