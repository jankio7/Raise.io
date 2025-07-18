import { Outlet } from "react-router-dom";
import UserNavabr from "./UserNavbar";
import Footer from "./Footer";


export default function UserLayout(){
    return(
        <>
           <UserNavabr/>
           <Outlet/>
           <Footer/>
        </>
    )
}
