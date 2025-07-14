import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

export default function Login(){
        const [email,setEmail]=useState("ravinder@gmail.com")
        const [password,setPassword]=useState("")
        const changeEmail=(e)=>{
          console.log(e);
          setEmail(e.target.value)
        }
        let nav= useNavigate()
        const handleForm=(e)=>{
          e.preventDefault()
          if(email=="ravinder@gmail.com" && password=="12345"){
            toast.success("Login Successfully")
            console.log("hlo");
            
            // nav("/")
          }else{
            toast.error("invalid credentials");
          }
        }
    return(
        <> 

        <ToastContainer />

            <div className="col-lg-5 col-12 mx-auto" mr-5>
              <form
                className="custom-form contact-form my-5"
                action="#"
                method="post"
                role="form"
                onSubmit={handleForm}
              >
                <h2 >Login Form</h2>
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={changeEmail}


                    />
                  </div>
              
              
                </div>
                <input
                  type="password"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="password"
                
                  value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                />
                
                
                <button type="submit" className="form-control">
                  Submit 
                </button>
                  <div>Don't have an account? <Link to={"/register"}>Register Here!</Link></div>
              </form>
            </div>
          
    
       </>
    )
}