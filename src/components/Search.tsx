import { useState } from "react";
import { IoSearch } from "react-icons/io5";


const Search = () => {
  const [userKeyword, setUserKeyword] = useState("");

  return (
    <div className="flex flex-grow gap-2 bg-base-500 rounded-md py-[0.4rem] px-2 w-fit">
        <input value={userKeyword} onChange={(e)=> setUserKeyword(e.target.value)} className="bg-transparent outline-none text-base-300 w-full placeholder:text-sm placeholder:text-base-300" placeholder="Search Todo Notes.." type="text" name="" id="" />
        <button className="group">
            <IoSearch className="text-base-300 size-[1.15rem] group-hover:text-base-200 transition-all duration-300" />
        </button>
    </div>
  )
}

export default Search;