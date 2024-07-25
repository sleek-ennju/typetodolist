import { useEffect, useState } from "react";

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

    

    // focus on input field once modal is rendered
    useEffect(()=>{
        const input = document.getElementById("createTask_input");
        input?.focus();
    },[])

    const closeModal = ()=> {
        handleCloseModal(prev => !prev);
    }

    const createTask = ()=> {
        setIsLoading(true);
        // create new task data
        const newTask: todo = {
            id: Date.now().toString(),
            content: userTask,
            state: false,
        };
        
        // prolong propagation time for 500 milli seconds
        setTimeout(()=>{
            handleCreateTask((prev) => [...prev, newTask]);
        }, 500);

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
        }, 500)
    } 


  return (
    <section className="flex items-center justify-center bg-black bg-opacity-55 dark:bg-opacity-75 absolute top-0 left-0 w-full h-full font-poppins">
        <div className="w-[90%] max-w-[22rem] flex flex-col items-center gap-6 dark:bg-base-400 bg-white dark:border border-2 dark:border-base-300 border-blue-dark py-6 px-4 rounded-md shadow-md">
            <div className="flex flex-col items-center gap-1">
                <img src={clipboard} className="block max-w-full w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] h-auto object-cover" alt="clipboard icon" />
                <h4 className="dark:text-white text-base-400 text-sm sm:text-base font-semibold">New Task</h4>
            </div>

            <div className="w-full">
                <input 
                    id="createTask_input"
                    value={userTask} 
                    onChange={(e)=> setUserTask(e.target.value)} 
                    type="text" 
                    className="bg-transparent border dark:border-base-300 border-base-400 rounded-md outline-none dark:text-base-300 text-base-400 w-full text-sm md:text-base placeholder:text-sm placeholder:text-base-300 p-1" 
                    placeholder="Enter new note.." 
                />
                <div className="flex justify-around flex-wrap gap-2 mt-4">
                    <Btn action={closeModal} className={"tex-sm md:text-base dark:bg-base-500 bg-white border border-purple-dark hover:border-purple-light text-purple-dark hover:text-purple-light"}>
                        Cancel
                    </Btn>
                    <Btn action={createTask} disabled={!userTask ? true : false} className={"tex-sm md:text-base bg-purple-dark hover:bg-purple-light text-white flex items-center justify-center disabled:cursor-not-allowed disabled:bg-opacity-40"}>
                        {isLoading ? <AiOutlineLoading3Quarters className="size-4 text-white animate-spin transition-all duration-300" /> : "Create"}
                    </Btn>
                </div>
            </div>
      </div>
    </section>
  )
}

export default Modal;