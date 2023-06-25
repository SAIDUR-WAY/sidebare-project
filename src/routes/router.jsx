
import {
     createBrowserRouter

   } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../shared/error";
import Contact from "../pages/contact";
import Information from "../pages/Information";
import Guide from "../pages/Guide";
   const router = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout></MainLayout>,
       errorElement: <Error></Error>,
       children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/information',
          element: <Information></Information>
        },
        {
          path: '/guide',
          element: <Guide></Guide>
        }
       ]
     },

   ]);

export default router;