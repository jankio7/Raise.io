import { useState } from "react"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"


export default function AddCampaign(){
    const [campaigntitle,setCampaignTitle]=useState("")
     const [type, setType]=useState("")
     const [description,setDescription]=useState("") 
     const [image,setImage]=useState({})
     const [imagename,setImageName]=useState("")
     const [totalamount,setTotalAmount]=useState("")
     const [startdate,setStartDate]=useState("")
     const [enddate,setEndDate]=useState("")
      const handleForm=async (e)=>{
     e.preventDefault()
      const formData = new FormData();
      formData.append("file",image);
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
          }

         const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0]);
    }
     const saveData=async (imageUrl)=>{
         try{
            //insertion 
            let data={
                campaigntitle,
                type,
                description,
                image:imageUrl,
                totalamount,
                startdate,
                enddate,
                status:true,
                createdAt:Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await addDoc(collection(db, "campaign"), data)
            toast.success("Campaign added successfully!")
            setCampaignTitle("")
            setType("")
            setDescription("")
            setImage({})
            setImageName("")
             
            setTotalAmount("")
            setStartDate("")
            setEndDate("")
        }
        catch(err){
            toast.error(err.message)
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
                <h2 className=" my-3 justify-content:center">Add Campaign</h2>
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Campaign Title"
                      value={campaigntitle}
                      onChange={(e)=>{
                        setCampaignTitle(e.target.value)
                      }}


                    />
                  </div>
              
              
                </div>
                
                <select
                     className="form-control"
                     valur={type}
                     onChange={(e)=>{
                        setType(e.target.value)
                     }}
                 >
                 <option disabled selected value={("")}>Choose one</option>
                 <option>Health</option>
                 <option>Education</option>
                 <option>Food</option>
                 <option>Cloth</option>
                </select>
                 
                 <input
                  type="text"
                  name="description"
                  id="description"
                  
                  className="form-control"
                  placeholder="Description"
                
                  value={description}
                  onChange={(e)=>{
                    setDescription(e.target.value)
                  }}
                /> 
                <input
                  type="file"
                  name="image"
                  id="image"
                  
                  className="form-control"
                  placeholder="image"
                  value={imagename}
                  onChange={changeImage}
                />
                 <input
                  type="text"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="total amount"
                  value={totalamount}
                  onChange={(e)=>{
                    setTotalAmount(e.target.value)
                  }}
                />
                  <input
                  type="tel"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="Start Date"
                  value={startdate}
                  onChange={(e)=>{
                    setStartDate(e.target.value)
                  }}
                />
                  <input
                  type="tel"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="End Date"
                  value={enddate}
                  onChange={(e)=>{
                    setEndDate(e.target.value)
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