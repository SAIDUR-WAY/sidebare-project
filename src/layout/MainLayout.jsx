import Sidebar from "../component/Sidebar";
import Footer from "../pages/Footer/Footer";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";


const MainLayout = () => {
     return (
          <div>
              <div className="flex">
              
              <Sidebar className=" absolute z-50"></Sidebar>
              <Home className="" ></Home>
               {/* <Outlet className="min-w-full relative min-h-full "></Outlet> */}
               </div>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;