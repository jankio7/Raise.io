
import { useEffect, useState } from "react"
import { addDoc, collection, onSnapshot, query, Timestamp } from "firebase/firestore"
// import { db } from "../../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import { db } from "../../Firebase"
import { RingLoader } from "react-spinners"


export default function AddCampaign(){
   const [load, setLoad]=useState(true)
    const [campaigntitle,setCampaignTitle]=useState("")
     const [type, setType]=useState("")
     const [description,setDescription]=useState("") 
     const [image,setImage]=useState({})
     const [imagename,setImageName]=useState("")
     const [totalamount,setTotalAmount]=useState("")
     const [startdate,setStartDate]=useState("")
     const [enddate,setEndDate]=useState("")
     const [categoryId, setCategoryId]=useState("")
       const [AllCategory,setCategory]=useState([])
     
         const fetchData=()=>{
              const q=query(collection(db,"category")
             //  where("type","==","Education")
         )
                     onSnapshot(q,(categoryData)=>{
            
              setCategory(
                 categoryData.docs.map((el)=>{
                
                return{id:el.id,...el.data()}
               }))
              setLoad(false)
              
            })
             
         }
     
         useEffect(()=>{
             fetchData()
            
             
         },[])
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
                
                description,
                image:imageUrl,
                goalAmount:totalamount,
                organiserId:sessionStorage.getItem("userId"),
                categoryId,
                moneyRaised:0,
                startdate,
                status:false,
                createdAt:Timestamp.now()
            }
            // console.log(data);
            //addDoc(collection(db, "collectionName"), data)
            await addDoc(collection(db, "campaign"), data)
            toast.success("Campaign added successfully!")
            setCampaignTitle("")
            setDescription("")
            setImage({})
            setImageName("")
             setCategoryId("")
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
                     value={categoryId}
                     onChange={(e)=>{
                        setCategoryId(e.target.value)
                     }}
                 >
                 <option disabled selected value={("")}>Choose one</option>
                 {AllCategory?.map((el,index)=>(
                 <option value={el?.id}>{el?.categoryname}</option>
                ))}
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
                  type="date"
                  name="subject"
                  id="subject"
                  
                  className="form-control"
                  placeholder="Start Date"
                  value={startdate}
                  onChange={(e)=>{
                    setStartDate(e.target.value)
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