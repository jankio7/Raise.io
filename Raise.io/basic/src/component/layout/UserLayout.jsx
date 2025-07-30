import { Outlet, useNavigate } from "react-router-dom";
import UserNavabr from "./UserNavbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { toast } from "react-toastify";


export default function UserLayout(){
    let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("userType")
    let nav=useNavigate()
    useEffect(()=>{
        if(!isLogin || userType!=5){
            toast.error("Please login")
            nav("/login")
        }
    },[])
    return(
        <>
           <UserNavabr/>
           <Outlet/>
           <Footer/>
        </>
    )
}
