import { useState } from 'react';
import { FaArrowLeft, FaRegListAlt, FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Sidebar = () => {
     const [open, setOpen] = useState(true)
     return (
          <div className={`bg-[#081A51] text-white h-screen w-60 relative p-4 pt-8 ${open ? 'w-72' : 'w-16' } duration-300 `}>
               <FaArrowLeft className={` bg-white rounded-full text-black absolute top-9 -right-3 border border-black text-2xl cursor-pointer ${!open && 'rotate-180'}`}  onClick={()=>setOpen(!open)} ></FaArrowLeft>
               <div className='inline-flex items-center justify-center gap-4 '>
                    <FaRegListAlt className= {`text-2xl cursor-pointer duration-500 ${!open && 'rotate-[360deg]'}`}></FaRegListAlt>
               <h1 className={`text-3xl text-center tracking-widest uppercase ${!open && 'scale-0'} duration-300`}>SideBar</h1>   
               </div>
               <div className= {`flex items-center rounded-md bg-gray-700 ${!open ? 'p-2.5' : 'p-2.5'} mt-2`}>
                    <FaSearch className='text-white ml- text-lg block float-left cursor-pointer text-center  '></FaSearch>
                    <input type='search' placeholder='Search' className='text-base bg-transparent w-full text-white focus:outline-none  hidden' />
                    </div>      
          </div>
     );
};

export default Sidebar;