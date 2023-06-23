import { BsPlusSquareFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex flex-col gap-8 w-one">
        <div className="flex items-center justify-center gap-4">
          <button
            className="shadow-theme text-primary hover:scale-110 transition"
          >
            <BsPlusSquareFill size={32} />
          </button>
          <button
            className="flex items-center justify-center w-full bg-primary text-invert-theme shadow-theme rounded-md h-[32px] p-1 hover:scale-[1.02] transition"
          >
            <p className="font-medium">
              Due date
            </p>
            <IoMdArrowDropdown size={20} className={`rotate-180 transition duration-300`} />
          </button>
        </div>
        {/* TO DO CARDS */}
        <div className={`rounded-xl bg-theme border-2-theme shadow-theme`}>
          <section className={`p-2`}>
            <p className={`font-medium text-xl capitalize`}>
              <Skeleton />
            </p>
          </section>
          <hr className="border-1-theme" />
          <section className="p-2 text-lg font-semibold">
            <p className="text-xs pb-4">
              <Skeleton />
            </p>
            <p className="font-light whitespace-pre-wrap break-words">
              <Skeleton count={2} />
            </p>
          </section>
        </div>
        <div className={`rounded-xl bg-theme border-2-theme shadow-theme`}>
          <section className={`p-2`}>
            <p className={`font-medium text-xl capitalize`}>
              <Skeleton />
            </p>
          </section>
          <hr className="border-1-theme" />
          <section className="p-2 text-lg font-semibold">
            <p className="text-xs pb-4">
              <Skeleton />
            </p>
            <p className="font-light whitespace-pre-wrap break-words">
              <Skeleton count={2} />
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}