import {
  createBrowserRouter ,
} from "react-router-dom"


import MainLayout from "../Layouts/MainLayouts/MainLayouts";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Secret/Secret";
import Login from "../pages/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "login",
        element:<Login></Login>,
      },
      {
        path: "signup",
        element:<Signup></Signup>,

      },
      
      // {
      //     path: "/social",
      //     element:<Social></Social>,
      //   },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ],
  },
]);
export default router;