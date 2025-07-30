import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { db } from "../../Firebase";

export default function Category(){
    const [category,setCategory]=useState([])
    const fetchData = () => {
        let q = query(collection(db,"campaign")
            )
        onSnapshot(q,(categoryData)=>{
       
            setCategory(
                categoryData.docs.map((el)=>{
            
            return{id:el.id,...el.data()}
            }))
         
         
       })
    } 
    useEffect(() => {
        fetchData()
    },[])
     
    const DeleteCampaign=(userId,) => {
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
         await deleteDoc(doc(db,"category",userId))
        
         Swal.fire({
        title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
        });
    }
});
    }
    return(
        <>
        <div className="container">
            <div className="row">

            
        {
        category.map((el)=>(
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <img
                  src={el?.image}
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">{el?.description}</h5>
                  <p>
                    {el?.description}
                  </p>
                  <p>
                    {el?.type}
                  </p>
                    
                  </div>
                  <Link to={`/user/donate/${el?.id}/${el.organiserId}`} className="custom-btn btn">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
        ))
            }
            </div>
        </div>
        </>
    )
}