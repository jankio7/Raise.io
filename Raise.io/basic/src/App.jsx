import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./component/pages/About";
import Donate from "./component/pages/Donate";
import News from "./component/pages/News";
import Newsdetail from "./component/pages/Newsdetail";
import Home from "./component/pages/About";



function App() {
  return(
      <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/donate" element={<Donate />} />
           <Route path="/news" element={<News />} />
           <Route path="/newsdetail" element={<Newsdetail />} />
       </Routes>
    </>
  )
}
export default App