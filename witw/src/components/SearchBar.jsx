import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const SearchBar = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <form className={`w-full md:w-[60%] lg:w-[45%] flex justify-between items-center ${theme=='light'?'bg-c-white': 'bg-m-dark'} px-2 py-2 rounded-md mt-8`} >


      <div className="flex items-center gap-1 flex-1 ">
        <CiSearch className=" text-light-blue text-lg " />
        <input className={`w-full  border-0 ${theme==='light'? 'text-c-gray bg-c-white':'text-c-white bg-m-dark'}  focus:outline-none text-sm `} type="search" name="userName" placeholder="Search a Country" />

      </div>



      <div className="flex items-center gap-1">
        {/* <span className="text-sm text-[red] ">err</span> */}
        <button className=" bg-light-blue px-4 py-3 rounded-md text-c-white text-sm ">Search</button>
      </div>
    </form>
  )
}

export default SearchBar
