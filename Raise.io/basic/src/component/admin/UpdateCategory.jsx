import { addDoc, collection , doc, getDoc, Timestamp ,updateDoc} from "firebase/firestore"
import { useState ,useEffect} from "react"

import { toast } from "react-toastify"
import axios from "axios"
import { db } from "../../Firebase"
import { Link, useNavigate, useParams } from "react-router-dom"
import { RingLoader } from "react-spinners"

   
export default function UpdateCategory(){
    
     const {id}=useParams()
     const [categoryname,setCategoryName]=useState("")
     const [poster,setPoster]=useState({})
     const [posterName, setPosterName]=useState("")
     const [previousImg,setPreviousImg]=useState("")
    useEffect(()=>{
            fetchData()
        },[])
        const fetchData=async ()=>{
           let categoryDoc=await getDoc(doc(db, "category", id))
           let categoryData=categoryDoc.data()
          //  console.log(categoryData);
           
           setCategoryName(categoryData.categoryname)
           setPreviousImg(categoryData.poster)
        }
            const handleForm= async (e)=>{
              e.preventDefault()
                    if(!!posterName){
                const formData = new FormData();
                formData.append("file",poster);
                formData.append("upload_preset","images");
                    try {
                    const response = await axios.post(
                          `https://api.cloudinary.com/v1_1/dsc2mxwti/image/upload`, 
                          formData
                            );
                             
                      saveData(response.data.secure_url)
                    } catch (error) {
                        toast.error("Error uploading image:", error.message);
                      }
                    }else{
                      saveData(previousImg)
                    }
             }
            const changeposter=(e)=>{
              setPosterName(e.target.value)
              setPoster(e.target.files[0]);
            }
            const nav=useNavigate()
            const saveData=async (posterUrl)=>{
              try {
                let data={
                  categoryname,
                  poster:posterUrl,
                  status:true,
                  createdAt:Timestamp.now()
                }
                // console.log(data);
                
                 await updateDoc(doc(db, "category", id), data)
                      toast.success("category updated successfully!")
                      nav("/admin/managecategory")
                  }
                  catch(err){
                      toast.error(err.messsage)
                   }
            }

    return(
        <>
          <div className="col-lg-5 col-12 mx-auto" >
           
              <form
                className="custom-form contact-form my-5 justify-content:center"
                action="#"
                method="post"
                role="form"
                onSubmit={handleForm}
              >
                <h2 className=" my-3 justify-content:center">Update  Category</h2>
                
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
            
          </div>
           
    
 
           
        </>
    )
}