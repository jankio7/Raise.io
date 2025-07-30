import { doc, getDoc, Timestamp } from "firebase/firestore"
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
    const [previousImg,setPreviousImg]=useState("")
    useEffect(()=>
    {
        fetchData()
    },[])
    const fetchData = async()=>
    {
        let campaigndoc=await getDoc(doc(db,"campaign",id))
        let campaignData=campaigndoc.data()
        setCampaignTitle(campaignData.campaigntitle)
        setType(campaignData.type)
        setDescription(campaignData.description)
        setTotalAmount(campaignData.totalamount)
        setStartDate(campaignData.startdate)
        setEndDate(campaignData.enddate)
        setPreviousImg(campaignData.previousImg)

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
                type,
                description,
                totalamount,
                startdate,
                enddate,
                image:imageUrl,
                status:true,
                credetAt:Timestamp.now()
            }
            await updateDoc(doc(db,"campaign",id),data)
            toast.success("Data Updated Successfully!")
            nav("/organiser/campaign/update/")
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
                // onSubmit={handleForm}
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