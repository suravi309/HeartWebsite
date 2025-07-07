
// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../../Shared/NavBar/Navbar";
// import Footer from "../../Shared/Footer/Footer";

import { Outlet } from "react-router-dom";
import Footer from "../../compoents/Footer/Footer";
import Navber from "../../compoents/Navber/Navber";


const MainLayout = () => {
  // const location = useLocation();
  // console.log(location);
  // const noHeaderFooter = location.pathname.includes('login')
  return (
    <div className="mx-auto container px-20">
      {/* {noHeaderFooter || <Navbar></Navbar>}
      <Outlet />
      {noHeaderFooter || <Footer></Footer>} */}
      
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;