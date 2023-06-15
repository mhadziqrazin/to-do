import { GiRunningNinja } from "react-icons/gi"
import ToggleTheme from "../buttons/ToggleTheme"

interface NavProps { }

const Nav: React.FC<NavProps> = ({ }) => {
  
  return (
    <nav className="shadow-theme bg-theme z-10 sticky top-0">
      <div className="container mx-auto p-4">
        <ul className="flex items-center justify-between">
          <li className="flex gap-2 items-center text-primary">
            <GiRunningNinja size={25} />
            <h1 className="text-2xl font-bold">
              TO DO
            </h1>
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