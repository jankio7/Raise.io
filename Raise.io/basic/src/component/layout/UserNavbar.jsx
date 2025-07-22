

import {Link ,  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function UserNavabr(){
            let isLogin=sessionStorage.getItem("isLogin")
            const nav=useNavigate()
            const logout=()=>{
            Swal.fire({
            title: "Are you sure you want to logout?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
          }).then((result) => {
            if (result.isConfirmed) {
              sessionStorage.clear()
              nav("/login")
              Swal.fire({
                title: "Logout!",
                text: "Logout successfully.",
                icon: "success"
              });
            }
          });
            }

    return(
        <>
                    <header className="site-header">
             <div className="container">
               <div className="row">
                 <div className="col-lg-8 col-12 d-flex flex-wrap">
                   <p className="d-flex me-4 mb-0">
                     <i className="bi-geo-alt me-2" />
                     Ghurial,jalandhar (India)
                   </p>
                   <p className="d-flex mb-0">
                     <i className="bi-envelope me-2" />
                     <a href="mailto:info@company.com">info@company.com</a>
                   </p>
                 </div>
                 <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                   <ul className="social-icon">
                     <li className="social-icon-item">
                       <a href="#" className="social-icon-link bi-twitter" />
                     </li>
                     <li className="social-icon-item">
                       <a href="#" className="social-icon-link bi-facebook" />
                     </li>
                     <li className="social-icon-item">
                       <a href="#" className="social-icon-link bi-instagram" />
                     </li>
                     <li className="social-icon-item">
                       <a href="#" className="social-icon-link bi-youtube" />
                     </li>
                     <li className="social-icon-item">
                       <a href="#" className="social-icon-link bi-whatsapp" />
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </header>
           
             <nav
               className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-light ftco-navbar-light mx-auto"
               id="ftco-navbar"
             >
               <div className="container mx-auto">
                 <Link className="navbar-brand" to="index.html">
                   <span className="flaticon-pawprint-1 mr-2" />
                   Raise.io
                 </Link>
                 <button
                   className="navbar-toggler"
                   type="button"
                   data-toggle="collapse"
                   data-target="#ftco-nav"
                   aria-controls="ftco-nav"
                   aria-expanded="false"
                   aria-label="Toggle navigation"
                 >
                   <span className="fa fa-bars" /> Menu
                 </button>
                 <div className="collapse navbar-collapse " id="ftco-nav">
                   <ul className="navbar-nav ml-auto justify-content:felx-end">
                     <li className="nav-item active">
                       <Link to="register" className="nav-link">
                         Register
                       </Link>
                     </li>
                     <li className="nav-item">
                       <Link to={"campaign"} className="nav-link">
                         Category
                       </Link>
                     </li>
                 
                     <li className="nav-item">
                       <a href="/causes" className="nav-link">
                         Campaign
                       </a>
                     </li>
                    
                     <li className="nav-item">
                       <Link to={"/volunter"} className="nav-link">
                          Donate
                       </Link>
                      </li>
                       <li className="nav-item">
                       <Link to={"/volunter"} className="nav-link">
                          View Donation
                       </Link>
                      </li>
                             
                       
                     {
                       isLogin?
                       <li className="nav-item">
                       <Link to={"#"}  onClick={logout} className="nav-link">
                         Logout
                       </Link>
                       </li>
                     :
                      <li className="nav-item">
                       <Link to={"/login"} className="nav-link">
                         Login
                       </Link>
                     </li>
                     }
                     
                     
                   </ul>
                 </div>
               </div>
             </nav>
           
        </>
    )
}