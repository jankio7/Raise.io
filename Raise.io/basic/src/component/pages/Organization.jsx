import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth,db } from "../../Firebase";
import { doc , setDoc , Timestamp } from "firebase/firestore";

export default function Organization(){
        const [name,setName]=useState("")
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [contact,setContact]=useState("")
        const [gstin,setGstIn]=useState("")
        const [about,setAbout]=useState("")
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
       } 
        
       const saveData=async(userId)=>{
        try{
          let data={
            name:name,
            email:email,
            password:password,
            contact:contact,
            gstin:gstin,
            about:about,
            userId:userId,
            userType:3,
            status:true,
            createAt:Timestamp.now()
          }
          await setDoc(doc(db,"users",userId),data)
          toast.success("Register Successfully!")

        }
        catch(err){
          toast.error("err.message")
        }
       }
        return(
        <>
        
        <div className="col-lg-5 col-12 mx-auto" mr-5>
              <form
                className="custom-form contact-form my-5 justify-content:center"
                action="#"
                method="post"
                role="form"
                onSubmit={handleForm}
              >
                <h2 className=" my-3 justify-content:center">Organization</h2>
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e)=>{
                        setName(e.target.value)
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
                 <input
                  type="text"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="gstin"
                  value={gstin}
                  onChange={(e)=>{
                    setGstIn(e.target.value)
                  }}
                />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="about"
                  value={about}
                  onChange={(e)=>{
                    setAbout(e.target.value)
                  }}
                />
               
                
                  <input
                  type="text"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="address"
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