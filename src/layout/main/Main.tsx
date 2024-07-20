// components
import { IconBtn, Modal, Search } from "../../components";

// types
import { todo } from "../../static/types";

// images
import { clipboard } from "../../assets";

// icons
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";


const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [todoLists, setTodoLists] = useState<todo[]>([]);

  console.log("todoLists: ", todoLists);

 
  
  
  return (
    <main className="w-full min-h-[70dvh] flex justify-center font-poppins">
      <section className="w-[90%] max-w-[34rem] flex flex-col">

        {/* search, create todo action container */}
        <div className="flex gap-1 transform -translate-y-1/2">
          <Search />
          <IconBtn action={setOpenModal}>
            <FaPlus className="size-4 text-base-100" />
          </IconBtn>
        </div>
        
        {/* todo list counts container */}
        <div className="flex justify-between items-center flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-1">
            <h3 className="text-xs sm:text-sm font-bold text-blue-light">Tasks Created</h3>
            <p className="text-xs sm:text-sm text-base-200 bg-base-400 rounded-full min-w-[1.2em] min-h-[1.2em] py-1 px-2 flex justify-center items-center">0</p>
          </div>
          <div className="flex items-center gap-1">
            <h3 className="text-xs sm:text-sm font-bold text-purple-light">Completed</h3>
            <p className="text-xs sm:text-sm text-base-200 bg-base-400 rounded-full min-w-[1.2em] min-h-[1.2em] py-1 px-2 flex justify-center items-center">0</p>
          </div>
        </div>

        {/* todo lists display container */}
        {
          todoLists.length === 0 ? (
            // empty todo list container
            <div className="border-t border-base-400 mt-6 flex flex-col justify-center items-center flex-1 gap-6 rounded-t-md">
              <img src={clipboard} className="block max-w-full w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] h-auto object-cover" alt="clipboard icon" />
              <div className="flex flex-col gap-1">
                <p className="text-xs sm:text-sm text-center text-base-300 font-bold">You do not have any tasks registered yet</p>
                <p className="text-xs sm:text-sm text-center text-base-300 font-normal">Tap the cross icon to start creating your first task.</p>
              </div>
            </div>
          ) : (
            <div className="">

            </div>
          )
        }
      </section>

      {openModal && (<Modal handleCloseModal={setOpenModal} handleCreateTask={setTodoLists} />)}
      
    </main>
  )
}

export default Main;