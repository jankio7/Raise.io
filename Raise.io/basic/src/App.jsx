import { BrowserRouter, Route,  Routes } from "react-router-dom";
import About from "./component/pages/About";
import Donate from "./component/pages/Donate";
import News from "./component/pages/News";
import Newsdetail from "./component/pages/Newsdetail";
import Layout from "./component/layout/Layout";
import Error from "./component/pages/Error";
import Login from "./component/auth/Login";
import About2 from "./component/pages/About2";
import Causes from "./component/pages/Causes";
import Volunter from "./component/pages/Volunter";
import News1 from "./component/pages/news1";
import Contact from "./component/pages/Contact";
import Register from "./component/auth/Register";
import { ToastContainer } from "react-toastify";
import Organization from "./component/pages/Organization";
import AdminLayout from "./component/layout/AdminLayout";
import OrganiserLayout from "./component/layout/OrganiserLayout";
import UserLayout from "./component/layout/UserLayout";
import AddCategory from "./component/admin/category/AddCategory";
import AddCampaign from "./component/user/campaign/AddCampaign";







function App() {
  return(
    <>
         <ToastContainer/>
        
         <BrowserRouter>
              <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="" element={<About/>}/>
                <Route path="about" element={<About2 />}/>
                <Route path="causes" element={<Causes/>}/>
                <Route path="volunter" element={<Volunter/>}/>
                <Route path="news" element={<News1/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="donate" element={<Donate />} />
                <Route path="news1" element={<News />} />
                <Route path="detail1" element={<Newsdetail />} />
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="organization" element={<Organization/>}/>
              </Route>

              <Route path="/admin" element={<AdminLayout/>}>
                <Route path="addcategory" element={<AddCategory/>}/>
              </Route>
 
              <Route path="/organiser" element={<OrganiserLayout/>} >
                <Route path="campaign" element={<AddCampaign/>}/>
              </Route>

              <Route path="/user" element={<UserLayout/>}></Route>
               
              
              <Route path="/" element={<Error/>}/>
          </Routes>
          </BrowserRouter>
         
    </>
  )
}
export default App