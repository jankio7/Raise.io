import { collection, getCountFromServer } from "firebase/firestore"
import { useEffect, useState, useSyncExternalStore } from "react"
import { Link } from "react-router-dom" 
import { db } from "../../Firebase"

export default function DashBoard() {
     const [category, setCategory]=useState(0)
        const [campaign, setCampaign]=useState(0)
        useEffect(()=>{
            fetchUserCount()
            fetchBreedCount()
        },[])
        const fetchUserCount=async ()=>{
            let usersCount= await getCountFromServer(collection(db,"category"))
            setCategory(usersCount.data().count);
        }
        const fetchBreedCount=async ()=>{
            let campaignCount= await getCountFromServer(collection(db,"campaign"))
            setCampaign(campaignCount.data().count);
            
        }
    return(
        <>
              <section className="section-padding">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <Link to="/category/" className="nav-link">
                 <p className="featured-block-text">
                      category
                  </p>
                  <img
                    src="/assets/images/icons/hands.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                    <h1>{category}</h1>

                  <i className="btn btn-Light">Read more</i> 
                  </Link>
              </div>
             
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <Link to="/campaign/" className="nav-link">
                <p className="featured-block-text">
                   Campaign
                  </p> 
                  <img
                    src="/assets/images/icons/heart.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                   <h1>{campaign}</h1>
                  <i className="btn btn-Light">Read more</i> 
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <Link to="/admin/managecampaign/" className="nav-link">
                 <p className="featured-block-text">
                   Organization
                  </p>
                  <img
                    src="/assets/images/icons/receive.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                  <i className="btn btn-Light">Read more</i> 
                  </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <Link to="/donate" className="nav-linm">
                <p className="featured-block-text">
                    Total Amount
                  </p>
                  <img
                    src="/assets/images/icons/scholarship.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
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