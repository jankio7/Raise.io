import { collection, doc, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { db } from "../../Firebase";
import { RingLoader } from "react-spinners";

export default function Category(){
  const [load, setLoad]=useState(true)
  const {catId}=useParams()
    const [category,setCategory]=useState([])
    const fetchData = () => {
      if(!catId){
        var q = query(collection(db,"campaign"))
      }else{
        var q = query(collection(db,"campaign"), where("categoryId","==",catId))
      }
        onSnapshot(q,(categoryData)=>{
       
            setCategory(
                categoryData.docs.map((el)=>{
            
            return{id:el.id,...el.data()}
            }))
         
          setLoad(false)
       })
    } 
    useEffect(() => {
        fetchData()
    },[catId])
     
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
            {load?
                      <RingLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                      :
            <div className="row">

            
        {
        category.map((el)=>(
          <div className="col-lg-4  my-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap ">
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
                   <p>
                   {el.campaigntitle}
                  </p>
                 
                  </div>
                  <div className="progress mt-4">
                    <div
                      className="progress-bar"
                      style={{width:el?.moneyRaised/el?.goalAmount*100}}
                      role="progressbar"
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                   <div className="d-flex p-2 align-items-center my-2">
                    <p className="mb-0">
                      <strong>Raised:</strong>
                      &#8377;{el?.moneyRaised}
                    </p>
                    <p className="ms-auto mb-0">
                      <strong>goal:</strong>
                      &#8377;{el?.goalAmount}
                    </p>
                 </div>
                 <Link to={`/donate/${el?.id}/${el.organiserId}`} className="custom-btn btn">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
          ))
            }
            </div>
          }
        </div>
        </>
    )
}