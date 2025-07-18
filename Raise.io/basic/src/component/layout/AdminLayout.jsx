import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./Footer";


export default function AdminLayout(){
    return(
        <>
          <AdminNavbar/>
          <Outlet/>
          <Footer/>
        </>
    )
}