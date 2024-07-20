import { iconButtonProp } from "../static/types";


const IconBtn = ({children, action}: iconButtonProp ) => {
  
  return (
    <button onClick={()=> action(prev => !prev)} className="bg-blue-dark hover:bg-blue-light transition-all duration-300 rounded-md px-3">
        {children}
    </button>
  )
}

export default IconBtn;