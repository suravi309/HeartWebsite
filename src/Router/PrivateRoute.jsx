import { useContext } from "react"
import { authContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({children}) {
  const {user,loading} = useContext(authContext);
  const location = useLocation();

  
  if(loading){
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56 progress-warning"></progress>
      </div>
    );
  }
  if (user){
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>

  
}
