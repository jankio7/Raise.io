import { collection, getCountFromServer } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Firebase";
import { RingLoader } from "react-spinners";


export default function DashBoardorg(){
  //  const [load, setLoad]=useState(true)
   const [totalamount,setTotalAmount]=useState(0)
   const [campaign,setCampaign]=useState(0)
   useEffect(()=>{
    fetchtotalamountCount()
    fetchcampaignCount()
   },[])
    // setLoad(false)
   const fetchcampaignCount=async() =>{
    let campaign=await getCountFromServer(collection(db,"campaign"))
    setCampaign(campaign.data().count);
   }
   const fetchtotalamountCount=async ()=>{
        let totalamountcount=await getCountFromServer(collection(db,"donations"))
        setTotalAmount(totalamountcount.data().count);
   }
    return(
        <>
            <section className="section-padding">
        <div className="container ">
            {/* {load?
            <RingLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            : */}
          <div className="row  justify-content-center align-items-center">
            
           
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center ">
                <Link to="/admin/managecampaign/" className="nav-link">
                 <p className="featured-block-text">
                   Campaign
                  </p>
                  <img
                    src="/assets/images/icons/receive.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                  <h1>{campaign}</h1>
                  <i className="btn btn-Light">Read more</i> 
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <Link to="/donate" className="nav-linm">
                <p className="featured-block-text">
                    Donation
                  </p>
                  <img
                    src="/assets/images/icons/scholarship.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                  <h1> &#8377;{totalamount}</h1>
                 <i className="btn btn-Light">Read more</i> 
                </Link>
              </div>
            </div>
          </div>
        
        </div>
      </section>         
        </>
    )
}