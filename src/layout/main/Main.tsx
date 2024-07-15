import IconBtn from "../../components/IconBtn";
import Search from "../../components/Search";

// icons
import { FaPlus } from "react-icons/fa6";


const Main = () => {
  return (
    <main className="bg-base-600 w-full min-h-[70dvh] h-full flex justify-center font-poppins">
      <section>
        <div className="flex gap-1 transform -translate-y-1/2">
          <Search />
          <IconBtn>
            <FaPlus className="size-4 text-base-100" />
          </IconBtn>
        </div>
      </section>
    </main>
  )
}

export default Main;