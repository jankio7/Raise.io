import { Outlet, useNavigate } from "react-router-dom";
// import AdminNavbar from "./AdminNavbar";
// import Footer from "./Footer";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Footer from "./Footer";
import AdminNavbar from "./AdminNavbar";


export default function AdminLayout(){
   let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("userType")
    let nav=useNavigate()
    useEffect(()=>{
        if(!isLogin || userType!=1){
            toast.error("Please login")
            nav("/login")
        }
    },[])
      return(
        <>
          <AdminNavbar/>
          <Outlet/>
          <Footer/>
        </>
    )
}