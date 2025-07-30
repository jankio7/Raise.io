import { Outlet, useNavigate } from "react-router-dom";
import OrganiserNavabr from "./OraganiserNavbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { toast } from "react-toastify";


export default function OrganiserLayout(){
    let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("userType")
    let nav=useNavigate()
    useEffect(()=>{
        if(!isLogin || userType!=2){
            toast.error("Please login")
            nav("/login")
        }
    },[])
    return(
        <>
          <OrganiserNavabr/>
          <Outlet/>
          <Footer/>
        </>
    )
}