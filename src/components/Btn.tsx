import classNames from "classnames";
import { buttonProp } from "../static/types";

const Btn = ({children, action, className, disabled}: buttonProp) => {
  return (
    <button disabled={disabled} onClick={action} className={classNames(className, "transition-all duration-300 rounded-md py-1 px-3")}>
      {children}
    </button>
  )
}

export default Btn;