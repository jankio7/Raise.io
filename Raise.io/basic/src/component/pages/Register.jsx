import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";

export default function Register(){
         const[fullname,setFullName]=useState("Ravinder Kumar")
          const[email,setEmail]=useState("ravinderkumar7332@gmail.com")
          const[password,setPassword]=useState("")
          const[contact,setContact]=useState("")
          const changeFullname=(e)=>{
            console.log(e);
            setFullName(e.target.value)
          }
          let nav=useNavigate()
          const handleForm=(e)=>{
            e.preventDefault()
            if(fullname=="Ravinder Kumar" && email=="ravinderKumar7332@gmail.com" && password=="232425" && contact=="1234567897"){
                toast.info("Register Successfully!!")
                
                nav("/")
            }else{
                toast.error("Invalid credentials");
            }
          }

         
    return(
        <>
        <ToastContainer />
        <section
            className="hero-wrap hero-wrap-2"
            style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
            data-stellar-background-ratio="0.5"
        >
            <div className="overlay" />
            <div className="container">
            <div className="row no-gutters slider-text align-items-end">
                <div className="col-md-12 ftco-animate pb-2">
                <center>
                <h1 className="mb-0 bread">Register</h1>
                </center>
                </div>
            </div>
            </div>
        </section>
            <div className="container my-5">
              
            {/* contact form */}
            
           <div className="col-lg-8 col-12 mx-auto" mr-5>
                         <div className="col-md-7">
                <div className="contact-wrap w-100 p-md-5 p-4 my-4">
                 
                <form
                    method="POST"
                    id="contactForm"
                    name="contactForm"
                    className="contactForm"
                    onSubmit={handleForm}
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fullname"
                            id="fullName"
                            placeholder="Full Name"
                            value={fullname}
                            onChange={changeFullname}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={setEmail}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="subject">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Password"
                             value={password}
                            onChange={(e)=>{
                              setPassword(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                     <div className="col-md-12">
                        <div className="form-group">
                          <label className="label" htmlFor="email">
                            Contact
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            name="contact"
                            id="contact"
                            placeholder="Contact"
                            minLength={10}
                            maxLength={10}
                            value={contact}
                            onChange={(e)=>{
                                setContact(e.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            defaultValue="Submit"
                            className="btn btn-primary"
                          />
                          <div className="submitting" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-stretch">
                <div
                  className="info-wrap w-250 "
                  style={{ backgroundImage: "url(/assets/images/slide/boy.jpg)" }}
                ></div>
              </div>
            </div>
            </div>
           
        </>
    )
}