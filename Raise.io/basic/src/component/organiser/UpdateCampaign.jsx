import { collection, doc, getDoc, onSnapshot, query, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { db } from "../../Firebase"

export default function UpdateCampaign(){
    const {id}=useParams()
    const [campaigntitle,setCampaignTitle]=useState("")
    const [type,setType]=useState("")
    const [description,setDescription]=useState("")
    const [totalamount,setTotalAmount]=useState("")
    const [startdate,setStartDate]=useState("")
    const [enddate,setEndDate]=useState("")
    const [image,setImage]=useState("")
    const [imagename,setImageName]=useState("")
    const [categoryId, setCategoryId]=useState("")
    const [previousImg,setPreviousImg]=useState("")
      const [AllCategory,setAllCategory]=useState([])
         const fetchCategoryData=()=>{
                    const q=query(collection(db,"category")
                   //  where("type","==","Education")
               )
                           onSnapshot(q,(categoryData)=>{
                  
                    setAllCategory(
                       categoryData.docs.map((el)=>{
                      
                      return{id:el.id,...el.data()}
                     }))
                    setLoad(false)
                    
                  })
                   
               }
           
               useEffect(()=>{
                   fetchCategoryData()
                  
                   
               },[])
    useEffect(()=>
    {
        fetchData()
    },[])
    const fetchData = async()=>
    {
        let campaigndoc=await getDoc(doc(db,"campaign",id))
        let campaignData=campaigndoc.data()
        setCampaignTitle(campaignData.campaigntitle)
        setCategoryId(campaignData.categoryId)
        setDescription(campaignData.description)
        setTotalAmount(campaignData.goalAmount)
        setStartDate(campaignData.startdate)
        setPreviousImg(campaignData.image)

    }
    const changeImage=(e)=>{
        setImageName(e.target.value)
        setImage(e.target.files[0])
    }
    const handleForm=async (e)=>{
        e.preventDefault()
        if(!!imagename){
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
                    }else{
                      saveData(previousImg)
                    }
             }
     const nav=useNavigate()
     const saveData =async(imageUrl)=>
     {
        try{
            let data={
                campaigntitle,
                description,
                 image:imageUrl,
                goalamount:totalamount,
                categoryId,
                startdate
            }
            await updateDoc(doc(db,"campaign",id),data)
            toast.success("Data Updated Successfully!")
            nav("/organiser/campaign12")
        }
        catch(err)
        {
            toast.error(err.message)
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
                <h2 className=" my-3 justify-content:center">Update Campaign</h2>
                
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
            </div>
        </>
    )
}