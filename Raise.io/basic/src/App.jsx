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
import AddCategory from "./component/admin/AddCategory";
import AddCampaign from "./component/organiser/AddCampaign";
import AddRegister from "./component/user/AddRegister";
import ManageCategory from "./component/admin/ManageCategory";
import DashBoard from "./component/admin/DashBoard";
import UpdateCategory from "./component/admin/UpdateCategory";
import ManageCampaign from "./component/admin/ManageCampaign";
import DashBoardorg from "./component/organiser/DashBoardorg";
import Campaign1 from "./component/organiser/Campaign1";
import Category from "./component/user/category";
import ViewDonation from "./component/admin/ViewDonation";
import UpdateCampaign from "./component/organiser/UpdateCampaign";
import UserRegister from "./component/user/UserRegister";
import OrganiserRegister from "./component/organiser/OrganiserRegister";
import Payment from "./component/user/Payment";
import ManagePayment from "./component/user/ManagePayments";








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
                <Route index element={<DashBoard/>}/>
                <Route path="category" element={<AddCategory/>}/>
                <Route path="managecategory" element={<ManageCategory/>}/>
                <Route path="category/update/:id" element={<UpdateCategory/>}/>
                <Route path="managecampaign" element={<ManageCampaign/>}/>
                <Route path="viewdonation" element={<ViewDonation/>}/>
              </Route>
 
              <Route path="/organiser" element={<OrganiserLayout/>} >
                <Route index element={<DashBoardorg/>}/>
                <Route path="register" element={<OrganiserRegister/>}/>
                <Route path="campaign" element={<AddCampaign/>}/>
                {/* <Route path="campaign1" element={<Campaign/>}/> */}
                {/* <Route path="campaign12" element={<Campaign1/>}/> */}
                <Route path="campaign12" element={<Campaign1/>}/>
                <Route path="campaign/update/:id" element={<UpdateCampaign/>}/>
              </Route>

              <Route path="/user" element={<UserLayout/>}>
                <Route path="register" element={<UserRegister/>}/>
                <Route path="category" element={<Category/>}/>
                <Route path="donate/:campaignId/:organiserId" element={<Payment/>}/>
                <Route path="managepayment" element={<ManagePayment/>}/>
                
              </Route>
               
              
              <Route path="/" element={<Error/>}/>
          </Routes>
          </BrowserRouter>
         
    </>
  )
}
export default App