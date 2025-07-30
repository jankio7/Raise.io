import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { toast } from "react-toastify";
import { auth,db } from "../../Firebase";
import { doc , setDoc , Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";

export default function AddRegister(){
        
        const [fullname,setFullName]=useState("")
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [contact,setContact]=useState("")
        const [address,setAddress]=useState("")

      const handleForm=(e)=>{
          e.preventDefault()
          createUserWithEmailAndPassword(auth,email,password)
          .then((userCred)=>{
            let userId=userCred.user.uid
            saveData(userId)
          })
          .catch((error)=>{
            toast.error(error.message)
          })
        setLoad(false)   
      } 
        
       const saveData=async(userId)=>{
        try{
          let data={
            fullname:fullname,
            email:email,
            password:password,
            contact:contact,
            address:address,
            userId:userId,
            userType:5,
            status:true,
            createAt:Timestamp.now()
          }
          await setDoc(doc(db,"users",userId),data)
          toast.success("Register Successfully!")
          getUserData(userId)
        }
        catch(err){
          toast.error("err.message")
        }
       }
       const nav=useNavigate()
        const getUserData=async(userId)=>{
          let userDoc=await getDoc(doc(db,"users",userId))
          let userData=userDoc.data()
               sessionStorage.setItem("name", userData?.name)
               sessionStorage.setItem("email", userData?.email)
               sessionStorage.setItem("userType", userData?.userType)
               sessionStorage.setItem("userId", userId)
               sessionStorage.setItem("isLogin", true)
               toast.success("Login successfully")
               if(userData?.userType==1){
                nav("/admin")
               }else{
                nav("/")
               }
        }
        return(
        <>
        
        <div className="col-lg-5 col-12 mx-auto" >
            {load?
            <RingLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
          
              <form
                className="custom-form contact-form my-5 justify-content:center"
                action="#"
                method="post"
                role="form"
                onSubmit={handleForm}
              >
                <h2 className=" my-3 justify-content:center">Register</h2>
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
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
                  onChange={(e)=>{
                     setEmail(e.target.value)
                  }}
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
                  type="tel"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="contact"
                  minLength={10}
                  maxLength={10}
                  value={contact}
                  onChange={(e)=>{
                    setContact(e.target.value)
                  }}
                />
                                 
                <button type="submit" className="form-control">
                  Submit 
                </button>
                
              </form>
           }
          </div>
          
    
 
           
        </>
    )
}