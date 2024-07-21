
import { filterProp } from "../static/types";


const Filter = ({handleFilterEffect}: filterProp) => {

    const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const filterValue = e.target.value;
        if(filterValue === "all"){
            handleFilterEffect((prev) => prev);
        }else if(filterValue === "incomplete"){
            handleFilterEffect((prev) => prev.filter((todo) => todo.state !== true));
        }else if(filterValue === "complete"){
            handleFilterEffect((prev) => prev.filter((todo) => todo.state !== false));
        }

    }


  return (
    <select  onChange={handleFilter} className="bg-blue-dark text-white text-sm outline-none cursor-pointer rounded-md w-full max-w-[7rem]">
        <option value="all" className="text-sm">All</option>
        <option value="incomplete" className="text-sm">Incomplete</option>
        <option value="complete" className="text-sm">Complete</option>
    </select>
  )
}

export default Filter;