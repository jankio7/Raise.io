import { Outlet } from "react-router-dom";
import OrganiserNavabr from "./OraganiserNavbar";
import Footer from "./Footer";


export default function OrganiserLayout(){
    return(
        <>
          <OrganiserNavabr/>
          <Outlet/>
          <Footer/>
        </>
    )
}