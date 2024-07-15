import { iconButtonProp } from "../static/types";


const IconBtn = ({children}: iconButtonProp ) => {
  return (
    <button className="bg-blue-dark hover:bg-blue-light transition-all duration-300 rounded-md px-2">
        {children}
    </button>
  )
}

export default IconBtn;