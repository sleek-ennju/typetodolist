import { useState } from "react";

// components
import Btn  from "./Btn";

// types
import { modalProp, todo } from "../static/types";

// images
import { clipboard } from "../assets";

// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";


const Modal = ({handleCloseModal, handleCreateTask}: modalProp) => {
    const [userTask, setUserTask] = useState(""); //state storing value from input field
    const [isLoading, setIsLoading] = useState(false);

    // helper functions
    const closeModal = ()=> {
        handleCloseModal(prev => !prev);
    }

    const createTask = ()=> {
        setIsLoading(true);
        // create new task data
        const newTask: todo = {
            id: Date.now(),
            content: userTask,
            state: false,
        };

        handleCreateTask((prev) => [...prev, newTask]);
        setTimeout(()=>{
            toast.success('Your task was created successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
            setIsLoading(false);
            handleCloseModal(prev => !prev);
        }, 1000)
    } 
    console.log("loading state: ", isLoading);


  return (
    <section className="flex items-center justify-center bg-black bg-opacity-55 absolute top-0 left-0 w-full h-full font-poppins">
        <div className="w-[90%] max-w-[22rem] flex flex-col items-center gap-6 bg-base-400 border border-base-300 py-6 px-4 rounded-md">
            <div className="flex flex-col items-center gap-1">
                <img src={clipboard} className="block max-w-full w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] h-auto object-cover" alt="clipboard icon" />
                <h4 className="text-white text-sm sm:text-base font-semibold">New Task</h4>
            </div>

            <div className="w-full">
                <input value={userTask} onChange={(e)=> setUserTask(e.target.value)} type="text" className="bg-transparent border border-base-300 rounded-md outline-none text-base-300 w-full placeholder:text-sm placeholder:text-base-300 p-1" placeholder="Enter new note.." />
                <div className="flex justify-around flex-wrap gap-2 mt-4">
                    <Btn action={closeModal} className={"bg-base-500 border border-purple-dark hover:border-purple-light text-purple-dark hover:text-purple-light"}>
                        Cancel
                    </Btn>
                    <Btn action={createTask} className={"bg-purple-dark hover:bg-purple-light text-white flex items-center justify-center"}>
                        {isLoading ? <AiOutlineLoading3Quarters className="size-4 text-white animate-spin transition-all duration-300" /> : "Create"}
                    </Btn>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Modal;