import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {auth , db} from "../../Firebase";
import {doc , getDoc, setDoc, Timestamp} from "firebase/firestore"

export default function Login(){
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")

        const signInWithGoogle=()=>{
             let provider=new GoogleAuthProvider()
             signInWithPopup(auth, provider)
             .then((userCred)=>{
                 let userId=userCred.user.uid;
                getUserData(userId)
             })
             .catch((err)=>{
               toast.error(err.message)
             })
           }
       const changeEmail=(e)=>{
          
               setEmail(e.target.value)
         } 
          
         let nav=useNavigate() //hook which redirect from one page to other
           const handleForm=(e)=>{
             e.preventDefault() //stops form from reloading
            //  console.log(234567);
             
             signInWithEmailAndPassword(auth, email, password)
             .then((userCred)=>{
              console.log(userCred);
              
               // console.log("sign in", userCred.user.uid);
               let userId=userCred.user.uid
               getUserData(userId)
             })
             .catch((error)=>{
               toast.error(error.message);
             })
           }
         
           const getUserData=async (userId)=>{
             // console.log(userId);
            let userDoc=await getDoc(doc(db,"users", userId))
           //  console.log(userDoc.data());
            let userData=userDoc.data()
             if(userData?.status){
            sessionStorage.setItem("name", userData?.fullname)
            sessionStorage.setItem("email", userData?.email)
            sessionStorage.setItem("userType", userData?.userType)
            sessionStorage.setItem("userId", userId)
            sessionStorage.setItem("isLogin", true)
            toast.success("Login successfully")
            if(userData?.userType==1){
             nav("/admin")
            }
            else if(userData?.userType==2){
             nav("/organiser")
            }
            else{
             nav("/")
            } 

          }else{
            toast.error("Account is blocked")
          }
            
            } 
          
           return(
        <> 

         <div className="col-lg-5 col-12 mx-auto" >
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
                
                
                <button type="submit" className="btn btn-primary my-2 col-md-16 col-md-6 mx-auto;
                   ">
                  Submit 
                </button>     
                <br/>
              <button type="button" className="btn btn-danger col-md-6 col-md-6" onClick={signInWithGoogle}>Sign in with Google</button>
                  <div className="my-3">Don't have an account? <Link to={"/register"}>Register Here!</Link></div>
                </form>   
            </div>

           //

       
        

         
    
       </>
    )
}