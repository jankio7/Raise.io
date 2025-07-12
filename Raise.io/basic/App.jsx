import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./src/component/layout/Layout"
import About from "./src/component/pages/About"
import Donate from "./src/component/pages/Donate"
import News from "./src/component/pages/News"
import Newsdetail from "./src/component/pages/Newsdetail"
import Login from "./src/component/auth/Login"
import About2 from "./src/component/pages/About2"
import Causes from "./src/component/pages/Causes"




function App(){
  return(
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/" element={<About/>}/>
      <Route path="/about" element={<About2/>}/>
      <Route path="/causes" element={<Causes/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/newsedetail" element={<Newsdetail/>}/>
      <Route path="/login" element={<Login/>}/>
      
      <Route path="/" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    
   
    </>
  )
  
}
export default App