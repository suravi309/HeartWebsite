import {
  createBrowserRouter ,
} from "react-router-dom"

import Home from "../pages/Home";
import MainLayout from "../Layouts/MainLayouts/MainLayouts";
import Error from "../pages/Error/Error";
// import Home from "../Pages/Home/Home/Home";
// import Menu from "../Pages/Menu/Menu/Menu";
// import OrderMain from "../Pages/Order/OrderMain";
// import Login from "../component/Login/Login";

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
      // {
      //   path: "menu",
      //   element:<Menu></Menu>,
      // },
      // {
      //   path: "order/:category",
      //   element:<OrderMain></OrderMain>,
      // },
      // {
      //   path: "login",
      //   element:<Login></Login>,
      // }
    ],
  },
]);
export default router;