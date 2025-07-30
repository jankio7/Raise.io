import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "../../Firebase"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { RingLoader } from "react-spinners"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function Campaign(){
        const [load, setLoad]=useState(true)
        const [AllCampaign,setAllCampaign]=useState([])
    
        const fetchData=()=>{
            const q=query(collection(db,"campaign")
            // ,where("type","==","Dog")
        ) 
            onSnapshot(q,(campaignData)=>{
                setAllCampaign(
                    campaignData.docs.map((el)=>{
                    // console.log(el.id,el.data());
                    return{id:el.id,...el.data()}
                }))
                setLoad(false)
            })
        }
    
        useEffect(()=>{
            fetchData()
        },[])
    
        const DeleteCampaign= (CampaignId)=>{
           
            Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteDoc(doc(db,"campaign",CampaignId))
                .then(()=>{
                    Swal.fire({
                    title: "Deleted!",
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
           <section
                className="hero-wrap hero-wrap-2" >
                <div className="overlay" />
                <div className="container">
                <div className="row no-gutters slider-text align-items-end">
                    <div className="col-md-9 ftco-animate pb-5">
                   
                       
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-5">
            {load?
            <RingLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
            <div className="row justify-content-center no-gutters">
              <div className="col-md-12" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="d-flex justify-content-end p-2">
                    <Link to={"/organiser/campaign/"} className="btn btn-outline-primary">Add New +</Link>
                </div>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-4">Manage Breed</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Total Amount</th>
                                        <th scope="col">Actions</th>

                                        </tr>
                                    </thead>
                  {
                    AllCampaign.map((el,index)=>{
                        return <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el.titlename}</td>
                                        <td><img className="img-fluid w-80 h-80" src={el.poster}/></td>
                                        <td>{el.category}</td>
                                        <td>{el.description}</td>
                                        <td>{el.totalamount}</td>
                                         <td>
                                            <Link to={"/organiser/campaign/update/"+el.id} className="btn btn-outline-success mx-2">Edit</Link>
                                            <button className="btn btn-danger" onClick={()=>{
                                            DeleteCampaign(el.id)
                                         }}>Delete </button></td>

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