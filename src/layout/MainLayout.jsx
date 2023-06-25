import Sidebar from "../component/Sidebar";
import Footer from "../pages/Footer/Footer";
import { Outlet } from "react-router-dom";


const MainLayout = () => {
     return (
          <div>
              <div className="flex">
              
              <Sidebar className="z-50"></Sidebar>
               <div className='w-full'>
               <Outlet></Outlet>
               </div>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;