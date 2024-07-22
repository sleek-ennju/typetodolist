
import { filterProp } from "../static/types";


const Filter = ({handleFilterEffect}: filterProp) => {
    
  return (
    <select  onChange={(e)=> handleFilterEffect(e.target.value) } className="bg-blue-dark text-white text-sm outline-none cursor-pointer rounded-md w-full max-w-[7rem]">
        <option value="all" className="text-sm">All</option>
        <option value="incomplete" className="text-sm">Incomplete</option>
        <option value="complete" className="text-sm">Complete</option>
    </select>
  )
}

export default Filter;