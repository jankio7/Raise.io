import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {auth} from "../../Firebase";

export default function Login(){
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
       const changeEmail=(e)=>{
          
               setEmail(e.target.value)
         } 
           let nav=useNavigate()
   const handleForm=(e)=>{
    e.preventDefault()
  
signInWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
    console.log(userCredential)
    toast.success("Login Successfully!!")
    nav("/")
  })

  .catch((error) => {
    toast.error(error.message)
  });
}
const signInGoogle=()=>
{
  let provider=new GoogleAuthProvider()
  signInWithPopup(auth , provider)
  .then((userCred)=>
  {
    console.log(userCred.user.uid)
    toast.success("Login Successfully")
  })
  .catch((error)=>
  {
    toast.error(error.message)
  })
}
        
  
           return(
        <> 

        

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
                  name="password"
                  id="password"
                  
                  className="form-control"
                  placeholder="password"
                
                  value={password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                />
                
                
                <button type="submit" className="btn btn-primary my-2 " onClick={signInWithEmailAndPassword}>
                  Submit 
                </button>     
                <br/>
              <button className="btn btn-danger" onClick={signInGoogle}>Sign in with Google</button>
                  <div>Don't have an account? <Link to={"/register"}>Register Here!</Link></div>
                </form>   
            </div>

           //

       
        

         
    
       </>
    )
}