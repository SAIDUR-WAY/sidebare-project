
import {
     createBrowserRouter

   } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Error from "../shared/error";
   const router = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout></MainLayout>,
       errorElement: <Error></Error>,
     },

   ]);

export default router;