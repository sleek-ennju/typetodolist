// image
import { clipboard } from "../assets";

// type
import { emptyTodoList } from "../static/types";

const EmptyListMessage = ({title, description}: emptyTodoList) => {
  return (
    <div className="border-t border-base-400 mt-6 flex flex-col justify-center items-center flex-1 gap-6 rounded-t-md">
        <img src={clipboard} className="block max-w-full w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] h-auto object-cover" alt="clipboard icon" />
        <div className="flex flex-col gap-1">
        <p className="text-xs sm:text-sm text-center text-base-300 font-bold">{title}</p>
        <p className="text-xs sm:text-sm text-center text-base-300 font-normal">{description}</p>
        </div>
  </div>
  )
}

export default EmptyListMessage;