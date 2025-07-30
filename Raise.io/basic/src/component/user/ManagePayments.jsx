import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, Timestamp, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import axios from "axios"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { PacmanLoader, RingLoader } from "react-spinners"

export default function ManagePayment(){
    const [load, setLoad]=useState(true)
    const [allPay,setAllPay]=useState([])

    const fetchData=()=>{
        const q=query(collection(db,"payments")
        // ,where("type","==","Dog")
    ) 
        onSnapshot(q,async (payDoc)=>{
            let payData=  payDoc.docs.map((el)=>{
                // console.log(el.id,el.data());
                return{id:el.id,...el.data()}
            })
            // console.log(petData);
            let updatePayData=[]
            for(let i=0;i<payData.length;i++){
                let userId=payData[i].userId;
                // console.log(breedId);
                let userDoc= await getDoc(doc(db,"users", userId))
                // console.log(breedDoc.data());
                updatePayData.push({...payData[i], user:userDoc.data()})
            }
            // console.log(updatePetData);
            setAllPay(updatePayData)
            setLoad(false)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    const DeleteCampaign= (campaignId)=>{
       
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
            await deleteDoc(doc(db,"campaign",campaignId))
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
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                <div className="row no-gutters slider-text align-items-end">
                    <div className="col-md-9 ftco-animate pb-5">
                    <p className="breadcrumbs mb-2">
                        <span className="mr-5">
                        <a href="index.html">
                            Home <i className="ion-ios-arrow-forward" />
                        </a>
                        </span>{" "}
                        <span>
                        payment <i className="ion-ios-arrow-forward" />
                        </span>
                    </p>
                    <h1 className="mb-0 bread">payment</h1>
                    </div>
                </div>
                </div>
            </section>
            <div className="container my-1">
            {load?
            <RingLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
            <div className="row justify-content-center no-gutters">
              <div className="col-md-6" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="d-flex justify-content-end p-2">
                    <Link to={"/admin/category/"} className="btn btn-outline-primary">Add New +</Link>
                </div>
                <div className="contact-wrap w-100 p-md-1 p-2">
                  <h3 className="mb-4">Manage pay</h3>
                  <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">User email</th>
                                        <th scope="col">Amount</th>
                                        
                                 

                                        </tr>
                                    </thead>
                  {
                    allPay.map((el,index)=>{
                        return <tbody>
                                        <tr>
                                        <th scope="row">{index+1}</th>
                                        <td>{el.user?.name}</td>
                                        <td>{el.user?.email}</td>
                                        <td>&#8377;{el.amount}</td>
                                        
                                        </tr>
                                       
                                    </tbody>

                        
                    })
                  }
                                </table>

{/*                                 
{
    AllBreeds.map((el)=>{
         return <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src={el.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{el.breedName}</h5>
                                        <p className="card-text">
                                        {el.description}
                                        </p>
                                        <a href="#" className="btn btn-primary">
                                        Go somewhere
                                        </a>
                                    </div>
</div>
    })
} */}
                               


                 
                </div>
              </div>
             
            </div>
            }
            </div>

        </>
    )
}


