
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../compoents/Footer/Footer";
import Navber from "../../compoents/Navber/Navber";
import { createContext } from "react";


export const authContext = createContext()
const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login') ||
  location.pathname.includes('signup');
  return (

    <div className="mx-auto container px-20">
     <div className="mx-auto container px-20">
      {noHeaderFooter ||<Navber></Navber>}
       <Outlet/>
       {noHeaderFooter || <Footer></Footer>}
     </div>
    </div>
  );
};

export default MainLayout;