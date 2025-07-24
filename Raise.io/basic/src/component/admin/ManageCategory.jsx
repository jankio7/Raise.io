import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../Firebase"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function ManageCategory(){

    const [AllCategory,setCategory]=useState([])

    const fetchData=()=>{
       onSnapshot(collection(db,"category"),(categoryData)=>{
       
         setCategory(
            categoryData.docs.map((el)=>{
            // console.log(el.id,el.data());
            return( el.id, el.data())

            

            
        })
         )
       
        
       })
        
    }

    useEffect(()=>{
        fetchData()
        // console.log(AllBreeds);
        
    },[])
  
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

                {/* contact form  */}
            <div className="row justify-content-center no-gutters">
              <div className="col-md-6" style={{boxShadow:"0px 0px 15px gray"}}>
                <div className="contact-wrap w-100 p-md-2 p-2">
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
                                         <td>{el.Actions}</td>
                                         <td><button className="btn btn-danger">button</button>
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
                                    </div>

                                </>
                            )
                        }


