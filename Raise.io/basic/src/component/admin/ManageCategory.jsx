import { addDoc, collection, deleteDoc,doc,onSnapshot, query,Timestamp ,} from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { RingLoader } from "react-spinners"

export default function ManageCategory(){
     const [load, setLoad]=useState(true)
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
    
    const DeleteCategory= async(CategoryId)=>{
            
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
                      await deleteDoc(doc(db,"category",CategoryId))
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
        {/* <section
                className="hero-wrap hero-wrap-2"
                style={{ backgroundImage: 'url("/assets/images/public/assets/images/causes/group-african-kids-paying-attention-class.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                <div className="row no-gutters slider-text align-items-end">
                    <div className="col-md-8 ftco-animate pb-3">
                    <p className="breadcrumbs mb-2">
                        <span className="mr-2">
                        <Link to="/">
                            Home <i className="ion-ios-arrow-forward" />
                        </Link>
                        </span>{" "}
                       
                    </p>
                    <h1 className="mb-0 bread">Category</h1>
                    </div>
                </div>
                </div>
            </section> */}
            <div className="container my-5">
                    {load?
                               <RingLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                :
            <div className="row justify-content-center no-gutters">
              <div className="col-md-6" style={{boxShadow:"0px 0px 15px gray"}}>
                   <div className="d-flex justify-content-end p-2">
                        <Link to={"/admin/category"} className="btn btn-outline-dark">Add New +</Link>
                   </div>
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h3 className="mb-5">Manage Catgory</h3>
                  <table className="table table-border table-hover">
                         <thead>
                            <tr>
                                <th scope ="col">S.No</th>
                                <th scope ="col">Name</th>
                                <th scope ="col">Poster</th>
                                <th scope ="col">Actions</th>
                            </tr>
                         </thead>
                      {
                         AllCategory.map((el,index)=>{
                            return <tbody>
                                      <tr>
                                        <th scope="row">{index+1}</th>    
                                        <td>{el.categoryname}</td>
                                        <td><img className="img-fluid w-80 h-80" src={el.poster}/></td>
                                         <td className="">{el.Actions}
                                        
                                           <th> <Link to={"/admin/category/update/"+el.id} className="btn btn-success ">Edit</Link></th>
                                           <th> <button className="btn btn-danger" onClick={()=>{
                                            DeleteCategory(el.id)
                                         }}>Delete</button></th>
                                         </td>
                                         
                                    </tr>                               
                            </tbody>
                         })
                        }
                  </table>
                
                  
                                
                        {/* {
                            AllCategory.map((el)=>{
                                return <div className="card" style={{ width: "18rem" }}>
                                                            <img className="card-img-top" alt="Card image cap" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{el.Poster}</h5>
                                                                <p className="card-text">
                                                                {el.Actions}
                                                                </p>
                                                                <Link to="#" className="btn btn-primary">
                                                                Go somewhere
                                                                </Link>
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


