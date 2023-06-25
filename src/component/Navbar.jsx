import { FaHome, FaRegAddressBook, FaInfoCircle, FaGuilded } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({open}) => {
     return (
          <>
          
               <div className="inline-flex items-center gap-4">
                    <Link to='/'><FaHome className="text-2xl"></FaHome></Link>
               <Link className={`${!open && 'scale-0'}`} to='/'>Home</Link>
               </div>
               <div className="inline-flex items-center gap-4 ">
                    <Link to='/contact'><FaRegAddressBook className="text-2xl"></FaRegAddressBook></Link>
               <Link className={`${!open && 'scale-0'}`} to='/contact'>Contact</Link>
               </div>
               <div className="inline-flex items-center gap-4">
                    <Link to='/information'><FaInfoCircle className="text-2xl"></FaInfoCircle></Link>
               <Link className={`${!open && 'scale-0'}`} to='/information'>Information</Link>
               </div>
               <div className="inline-flex items-center gap-4">
                    <Link to='/guide'><FaGuilded className="text-2xl"></FaGuilded></Link>
               <Link className={`${!open && 'scale-0'}`} to='/guide'>Guide</Link>
               </div>

          
          </>
     )
}
export default Navbar;