import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

export default function Register(){
        const [fullname,setFullName]=useState("")
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [contact,setContact]=useState("")
        const [address,setAddress]=useState("")

        const changeEmail=(e)=>{
          console.log(e);
          setEmail(e.target.value)
        }
        let nav = useNavigate()
        const handleForm=(e)=> {
            e.preventDefault()
            if(fullname=="Ravinder Kumar" && email=="ravinderKumar7332@gmail.com" && password=="12345" && contact=="1234567897" && address=="ghurial(jalandhar)"){
                toast.success("Login Successfully")
                nav("/")
            }else{
                toast.error("Invalid Credentials!!")
            }
        }
        
        return(
        <>
        <ToastContainer />
        <div className="col-lg-5 col-12 mx-auto" mr-5>
              <form
                className="custom-form contact-form my-5 justify-content:center"
                action="#"
                method="post"
                role="form"
                onSubmit={handleForm}
              >
                <h2 className="mx-auto">Register Here</h2>
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="Full Name"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Full Name"
                      value={fullname}
                      onChange={(e)=>{
                        setFullName(e.target.value)
                      }}


                    />
                  </div>
              
              
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  
                  className="form-control"
                  placeholder="Email"
                
                  value={email}
                  onChange={changeEmail}
                />
                 
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
                <input
                  type="contact"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="contact"
                
                  value={contact}
                  onChange={(e)=>{
                    setContact(e.target.value)
                  }}
                />
                 <input
                  type="contact"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="Addess"
                
                  value={address}
                  onChange={(e)=>{
                    setAddress(e.target.value)
                  }}
                />
                
                
                <button type="submit" className="form-control">
                  Submit 
                </button>
                
              </form>
            </div>
          
    
 
           
        </>
    )
}