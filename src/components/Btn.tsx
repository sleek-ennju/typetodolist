import classNames from "classnames";
import { buttonProp } from "../static/types";

const Btn = ({children, action, className}: buttonProp) => {
  return (
    <button onClick={action} className={classNames(className, "transition-all duration-300 rounded-md py-1 px-3")}>
      {children}
    </button>
  )
}

export default Btn;