import { addDoc, collection , Timestamp } from "firebase/firestore"
import { useState } from "react"

import { toast } from "react-toastify"
import axios from "axios"
import { db } from "../../Firebase"
import { RingLoader } from "react-spinners"

   
export default function AddCategory(){
     const [load, setLoad]=useState(true)
    const [categoryname,setCategoryName]=useState("")
    const [poster,setPoster]=useState({})
    const [posterName, setPosterName]=useState("")
    const handleForm=async (e)=>{
      e.preventDefault()
          const formData = new FormData();
          formData.append("file",poster);
          formData.append("upload_preset","images");9
            try {
            const response = await axios.post(
                  `https://api.cloudinary.com/v1_1/dsc2mxwti/image/upload`, 
                   formData
                            );
            saveData(response.data.secure_url)
           } catch (error) {
              toast.error("Error uploading image:", error.message);
            }
          }
          setLoad(false)
             
         
        const changeposter=(e)=>{
          setPosterName(e.target.value)
          setPoster(e.target.files[0]);
        }
    const saveData=async (posterUrl)=>{
       try {
        let data={
            categoryname,
            poster:posterUrl,
          
            status:true,
            createdAt:Timestamp.now()
          }
          await addDoc(collection(db,"category"),data)
          toast.success("Category added successfully!")
          setCategoryName("")
          setPosterName("")
          setPoster("")
         }
            catch(err){
              toast.error(err.messsage)
            }
          }

    return(
        <>
          <div className="col-lg-5 col-12 mx-auto" >
             {load?
                    <RingLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                : 
              <form
                className="custom-form contact-form my-5 justify-content:center"
                action="#"
                method="post"
                role="form"
                onSubmit={handleForm}
              >
                <h2 className=" my-3 justify-content:center">Add Category</h2>
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="category Name"
                      value={categoryname}
                      onChange={(e)=>{
                        setCategoryName(e.target.value)
                      }}


                    />
                  </div>
              
              
                </div>
                <input
                  type="file"
                  name="poster"
                  id="poster"
                  
                  className="form-control"
                  placeholder="poster"
                
                  value={posterName}
                  onChange={changeposter}
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