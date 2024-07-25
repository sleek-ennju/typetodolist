import { useEffect, useState } from 'react';
import classNames from 'classnames';

// components
import Header from './header/Header';
import Main from './main/Main';

// icons
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const Todo = () => {
  const [darkMode, setDarkMode] = useState(false);

  // handle dark mode setting based on previous user settings
  useEffect(()=>{
    const theme = localStorage.getItem("darkMode");
    if(theme === "dark"){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }
  },[darkMode]);

  const handleDarkMode = ()=>{
    localStorage.setItem('darkMode', !darkMode ? "dark" : "light");
    setDarkMode(prev => !prev);
  }

  return (
    <div className={classNames(darkMode && "dark" ,'w-full min-h-dvh dark:bg-base-600 bg-slate-50 relative')}>
        <Header />
        <Main />

        {/* dark mode switcher */}
        <button onClick={handleDarkMode}  className='bg-purple-dark hover:bg-purple-light p-4 rounded-full fixed bottom-8 right-8'>
          {!darkMode ? <FaRegMoon className='size-4 text-white' /> : <MdOutlineWbSunny className='size-4 text-white'/> }
        </button>
    </div>
  )
}

export default Todo