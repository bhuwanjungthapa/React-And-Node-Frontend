import { Navigate, Outlet } from "react-router-dom";

import Navbar from "admin/common/Navbar";
import { useContext } from "react";
import UserContext from "store/context/UserContext";

function Layout()
{
    const {user} = useContext(UserContext);

    if(user?.role === "admin")
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
    else{
        return(
            <Navigate to="/login"/>
        )
    }
}

export default Layout;