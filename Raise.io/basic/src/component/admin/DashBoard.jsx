import { collection, getCountFromServer, onSnapshot } from "firebase/firestore"
import { useEffect, useState, useSyncExternalStore } from "react"
import { Link } from "react-router-dom" 
import { db } from "../../Firebase"
import { RingLoader } from "react-spinners"

export default function DashBoard() {
        // const [load, setLoad]=useState(true)
        const [category, setCategory]=useState(0)
        const [campaign, setCampaign]=useState(0)
        const [organization,setOrganization]=useState(0)
        const [totalamount,setTotalAmount]=useState(0)
        useEffect(()=>{
            fetchUserCount()
            fetchBreedCount()
            fetchorganizationCount()
            fetchtotalamountCount()
        },[])
          // setLoad(false)
        const fetchUserCount=async ()=>{
            let usersCount= await getCountFromServer(collection(db,"category"))
            setCategory(usersCount.data().count);
        }
        const fetchBreedCount=async ()=>{
            let campaignCount= await getCountFromServer(collection(db,"campaign"))
            setCampaign(campaignCount.data().count);
            
        }
         const fetchorganizationCount=async ()=>{
            let campaignCount= await getCountFromServer(collection(db,"users"))
            setOrganization(campaignCount.data().count);
            
        }
      //  const fetchTotalAmountCount=async ()=>{
      //     let totalamountCount=await getCountFromServer(collection(db,"donations"))
      //     setTotalAmount(totalamountCount.data().count);
      //  }
      const fetchtotalamountCount= ()=>{
              let totalamount=0
           onSnapshot(collection(db,"donations"),(doc)=>{
            console.log(doc.docs);
            doc.docs.map((el)=>{
             totalamount= Number(el.data().amount)+totalamount
             setTotalAmount(totalamount);
            })
            
            
           })
              // setTotalAmount(totalamountcount.data().count);
              // console.log(totalamountcount.docs);
              
         }
    return(
        <>
           <section className="section-padding">
          <div className="container">
            {/* {load?
              <RingLoader color="#00BD56" size={30} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
              :  */}
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
                <Link to="/campaign/" className="nav-link">
                  <p className="featured-block-text">
                    Organization
                    </p>
                    <img
                      src="/assets/images/icons/receive.png"
                      className="featured-block-image img-fluid"
                      alt=""
                    />
                    <h1>{organization}</h1>
                    <i className="btn btn-Light">Read more</i> 
                    </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                <div className="featured-block d-flex justify-content-center align-items-center">
                  <Link to="/donate" className="nav-link">
                  <p className="featured-block-text">
                      Total Amount
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