// image
import { logo } from "../../assets";

const Header = () => {
  return (
    <header className="dark:bg-base-700 bg-white w-full h-[30dvh] flex items-center justify-center">
      <img src={logo} className="block max-w-full w-[5.875rem] sm:w-[6.875rem] md:w-[7.875rem] h-auto object-cover" alt="Todo logo" />
    </header>
  )
}

export default Header;