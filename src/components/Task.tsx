import classNames from "classnames";

// components
import CheckFalse from "./CheckFalse";
import CheckTrue from "./CheckTrue";

// icon
import { BsTrash3Fill } from "react-icons/bs";

// type
import { task } from "../static/types";

const Task = ({id, content, state, todoAction}: task) => {

    // handle complete and incomplete state changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
       const newState = e.target.checked;
       todoAction((prev) => prev.map(todo => todo.id === id ? {...todo, state: newState} : todo));
    }

    const handleDelete = () => {
        todoAction((prev) => prev.filter((todo) => todo.id !== id));
    }

  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 p-4 dark:bg-base-500 bg-white border dark:border-base-400 border-blue-dark rounded-md">
        <label htmlFor={id} className="group self-start cursor-pointer">
            <input checked={state} onChange={handleChange} type="checkbox" id={id} hidden />
            {
                state ? ( <CheckTrue /> ) : ( <CheckFalse /> )
            }
        </label>
        <p className={classNames(state ? "line-through dark:text-base-300 text-base-300" : "dark:text-base-100 text-base-400", "flex-1 text-sm md:text-base transition-all duration-300")}>{content}</p>
        <button onClick={handleDelete} className="self-start group">
            <BsTrash3Fill className="size-4 md:size-5 dark:text-base-100 text-base-400 group-hover:text-danger transition-all duration-300" />
        </button>
    </div>
  )
}

export default Task;