import { useEffect, useState } from "react";

// components
import { EmptyListMessage, Filter, IconBtn, Modal, Search, Task } from "../../components";

// types
import { todo } from "../../static/types";

// icons
import { FaPlus } from "react-icons/fa6";


const Main = () => {
  const [openModal, setOpenModal] = useState(false); //state managing the create task modal
  const [todoLists, setTodoLists] = useState<todo[]>([]); //state managing the main todo list
  const [todoListPreview, setTodoListsPreview] = useState<todo[]>([]); //state managing the filtered lists based on filter state
  const [filterValue, setFilterValue] = useState("all"); //state managing filter values(all, incomplete, complete)
  const [searchState, setSearchState] = useState(false); //state indicating when a user has made a search
  

  //  filter lists based on category effect
  useEffect(()=>{
      if(filterValue === "all"){
        setTodoListsPreview(todoLists);
      }else if(filterValue === "incomplete"){
        setTodoListsPreview(todoLists.filter(todo => !todo.state))
      }else if(filterValue === "complete"){
        setTodoListsPreview(todoLists.filter(todo => todo.state))
      }
  },[todoLists, filterValue]);

  const handleSearchRequest = (keyword:string) => {
    const searchRequestResult = todoLists.filter(todo => todo.content.toLowerCase().includes(keyword.toLowerCase()));
    setSearchState(true);
    setTodoListsPreview(searchRequestResult);
  }

  const handleClearSearchRequest = ()=> {
    setTodoListsPreview(todoLists);
    setSearchState(false);
  }
 
  console.log("todolist length: ", todoLists.length);
  
  return (
    <main className="w-full min-h-[70dvh] flex justify-center font-poppins">
      <section className="w-[90%] max-w-[34rem] flex flex-col">

        {/* search, create todo action container */}
        <div className="flex gap-1 transform -translate-y-1/2">
          {/*search feature component  */}
          <Search searchState={searchState} handleSearchEffect={handleSearchRequest} handleClearSearchList={handleClearSearchRequest} />

          {/*open modal component  */}
          <IconBtn action={setOpenModal}>
            <FaPlus className="size-4 text-base-100" />
          </IconBtn>

          {/*filter feature component  */}
          <Filter handleFilterEffect={setFilterValue} />
        </div>
        
        {/* todo list counts container */}
        <div className="flex justify-between items-center flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-1">
            <h3 className="text-sm md:text-base font-bold text-blue-light">Tasks Created</h3>
            <p className="text-sm md:text-base dark:text-base-200 text-base-400 dark:bg-base-400 bg-white dark:border-none border border-blue-dark rounded-full min-w-[1.2em] min-h-[1.2em] py-1 px-2 flex justify-center items-center">{todoLists.length}</p>
          </div>
          <div className="flex items-center gap-1">
            <h3 className="text-sm md:text-base font-bold text-purple-light">Completed</h3>
            <p className="text-sm md:text-base dark:text-base-200 text-base-400 dark:bg-base-400 bg-white dark:border-none border border-blue-dark rounded-full min-w-[1.2em] min-h-[1.2em] py-1 px-2 flex justify-center items-center">{todoLists.filter(todo => todo.state === true).length} of {todoLists.length}</p>
          </div>
        </div>

        {/* todo lists display container */}
        {
          searchState === true && todoListPreview.length === 0 ? (
            // empty search list container
            <EmptyListMessage 
              title="No current tasks registered with that term" 
              description="Tap the cross icon to create a task." 
            />
          ) : (filterValue === "all" || filterValue === "incomplete" || filterValue === "complete") && todoLists.length === 0 ? (
            // empty todo list container
            <EmptyListMessage 
              title="You do not have any tasks registered yet" 
              description="Tap the cross icon to start creating your first task." 
            />
            
          )  : filterValue === "incomplete" && todoListPreview.length === 0 ? (
            // empty incomplete list container
            <EmptyListMessage 
              title="All your tasks are completed" 
              description="Tap the cross icon to create a new task." 
            />
          ) : filterValue === "complete" && todoListPreview.length === 0 ? (
            // empty complete list container
            <EmptyListMessage 
              title="You do not have any complete tasks yet" 
              description="Tap the blue ring on your task to check it as complete." 
            />
          ) : (
            // display tasks
            <div className="mt-6 flex flex-col gap-2">
              {todoListPreview.map(({id, content, state})=> (
                <Task key={id} id={id} content={content} state={state} todoAction={setTodoLists} />
              ))}
            </div> 
          )
        }
      </section>

      {/* create task modal */}
      {openModal && (<Modal handleCloseModal={setOpenModal} handleCreateTask={setTodoLists} />)}
    </main>
  )
}

export default Main;



