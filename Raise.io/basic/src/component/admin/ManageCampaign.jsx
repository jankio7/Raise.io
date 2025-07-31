import { RingLoader } from "react-spinners"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import { collection, deleteDoc, doc, getDoc, onSnapshot, query, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import ReactSwitch from "react-switch"

export default function ManageCampaign(){
      const [load, setLoad]=useState(true)
        const [AllCategory,setCategory]=useState([])
    
        const fetchData=()=>{
             const q=query(collection(db,"campaign")
          
        )
                    onSnapshot(q,async (categoryData)=>{
           
         
             let campaignData=   categoryData.docs.map((el)=>{
               
               return{id:el.id,...el.data()}
              })
              let updatedData=[]
              for(let i=0;i<campaignData.length;i++){
                let organiserId=campaignData[i].organiserId 
                let organiserDoc=await getDoc(doc(db,"users",organiserId))
                let organiserData=organiserDoc.data()
                let categoryId=campaignData[i].categoryId 
                let categoryDoc=await getDoc(doc(db,"category",categoryId))
                let categoryData=categoryDoc.data()
                updatedData.push({...campaignData[i],organiser:organiserData, category:categoryData})

              }
              setCategory(updatedData)
             setLoad(false)
             
           })
            
        }
    
        useEffect(()=>{
            fetchData()
           
            
        },[])
        
        const changeStatus= async(id, status)=>{
                
              Swal.fire({
                      title: "Are you sure?",
                      text: "You won't be able to revert this!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes"
                      }).then(async (result) => {
                      if (result.isConfirmed) {
                        let data={
                            status:!status
                        }
                          await updateDoc(doc(db,"campaign",id),data)
                          .then(()=>{
                              Swal.fire({
                              title: "Updated!",
                              text: "Your file has been deleted.",
                              icon: "success"
                              });
              
                          }).catch((error)=>{
                              toast.error(error.message)
                          })
                         
                      }
                      });  
    
                }
    return(
        <>
        <div className="container my-5">
                  {load?
                    <RingLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                : 
                <div className="row justify-content-center no-gutters">
                    <div className="col-md-12" style={{boxShadow:"0px 0px 15px gray"}}>
                        <div className="d-flex justify-content-end p-2">
                                {/* <Link to={"/admin/category"} className="btn btn-outline-dark">Add New +</Link> */}
                        </div>
                        <div className="contact-wrap w-100 p-md-2 p-2">
                            <h3 className="mb-3">Manage Campaign</h3>
                            <table className="table table-border table-hover">
                                    <thead>
                                        <tr>
                                            <th scope ="col">S.No</th>
                                            <th scope ="col">Title</th>
                                            <th scope ="col">Category</th>
                                            <th scope ="col">Organiser Details</th>
                                            <th scope ="col">Date</th>
                                            <th scope ="col">Goal</th>
                                            <th scope ="col">Money Raiser</th>
                                            <th scope ="col">Description</th>
                                            <th scope ="col">Actions</th>
                                            <th scope ="col">Approve and Decline</th>
                                        </tr>
                                    </thead>
                                
                                {
                                    AllCategory.map((el,index)=>{
                                        return <tbody>
                                                <tr>
                                                    <th scope="row">{index+1}</th>    
                                                    <td>{el?.campaigntitle}</td>
                                                    <td>{el?.category?.categoryname}</td>
                                                    <td>{el?.organiser?.fullname}</td>
                                                    <td>{el.startdate}</td>
                                                    <td>&#8377;{el.goalAmount}</td>
                                                    <td>&#8377;{el.moneyRaised}</td>
                                                    <td>{el.description}</td>
                                                    <td>{el?.status?"Active":"In-active"}</td>
                                                    <td>
                                                        <ReactSwitch checked ={el?.status} onChange={()=>{
                                                            changeStatus(el?.id, el?.status)
                                                        }}/>
                                                    </td>

                                                </tr>                               
                                        </tbody>
                                    })
                                    }
                                    
                                
                            </table>
                        </div>
                     </div>
                </div>
}  
            </div>
        

        </>
    )
}