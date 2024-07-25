import { useState } from "react";

// icons
import { IoSearch, IoClose } from "react-icons/io5";

// type
import { searchProp } from "../static/types";
import classNames from "classnames";


const Search = ({handleSearchEffect, handleClearSearchList, searchState}: searchProp) => {
  const [userKeyword, setUserKeyword] = useState("");

  const clearSearch = ()=>{
    setUserKeyword("");
    handleClearSearchList();
  }
  
  

  return (
    <div className="flex flex-grow gap-2 dark:bg-base-500 bg-white border border-blue-dark dark:border-none rounded-md py-[0.4rem] px-2 w-fit">
        <button onClick={clearSearch} className={classNames(searchState ? "block" : "hidden","group")}>
          <IoClose 
            className="dark:text-base-300 text-base-400 size-[1.15rem] group-hover:text-danger transition-all duration-300"
          />
        </button>
        <input 
          value={userKeyword} 
          onChange={(e)=> setUserKeyword(e.target.value)} 
          className="bg-transparent outline-none dark:text-base-300 text-base-400 w-full placeholder:text-sm placeholder:text-base-300" 
          placeholder="Search Todo Notes.." 
          type="text" 
        />
        <button onClick={()=> handleSearchEffect(userKeyword)} className="group" disabled={!userKeyword ? true : false}>
          <IoSearch 
            className="dark:text-base-300 text-base-400 size-[1.15rem] dark:group-hover:text-base-200 group-hover:text-base-300 group-disabled:cursor-not-allowed group-disabled:text-opacity-40 transition-all duration-300" 
          />
        </button>
    </div>
  )
}

export default Search;