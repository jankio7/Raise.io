import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { db } from "../../Firebase";
import { RingLoader } from "react-spinners";

export default function Causes(){
    const [load, setLoad]=useState(true)
      const [category,setCategory]=useState([])
      const fetchData = () => {
          let q = query(collection(db,"category")
              )
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
      },[])
       
    return(
         <section className="section-padding" id="section_3">
            <div className="container">
              {load?
                    <RingLoader color="#00BD56" size={50} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                :
              <div className="row">
                <div className="col-lg-12 col-12 text-center mb-4">
                  <h2>Our Causes</h2>
                </div>
                {category?.map((el,index)=>(
                <div className="col-lg-4 my-4 col-md-6 col-12 mb-4 mb-lg-0">
                  <div className="custom-block-wrap">
                    <img
                      src={el?.poster}
                      className="custom-block-image img-fluid"
                      alt=""
                    />
                    <div className="custom-block">
                      <div className="custom-block-body">
                        <h5 className="mb-3">{el?.categoryname}</h5>
                        
                        
                      </div>
                      <Link to={`/category/${el?.id}`} className="custom-btn btn">
                        View Campaigns
                      </Link>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            }
            </div>
        </section>
    )
}