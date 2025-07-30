import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

export default function ViewDonation(){
    return(
        <>
         <div className="container my-5">
                    {load?
                               <RingLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                :
            <div className="row justify-content-center no-gutters">
              <div className="col-md-6" style={{boxShadow:"0px 0px 15px gray"}}>
                   <div className="d-flex justify-content-end p-2">
                        {/* <Link to={"/admin/category"} className="btn btn-outline-dark">Add New +</Link> */}
                   </div>
                <div className="contact-wrap w-100 p-md-2 p-2">
                  <h3 className="mb-5">View Donation</h3>
                  <table className="table table-border table-hover">
                         <thead>
                            <tr>
                                <th scope ="col">S.No</th>
                                <th scope ="col">User</th>
                                <th scope ="col">Campaign</th>
                                <th scope ="col">Amount</th>
                                 <th scope ="col">Details</th>
                                  <th scope ="col">Donated</th>
                            </tr>
                         </thead>
                         </table>
                 </div>
                    
                 </div>
                
        </div>
}
</div>
        </>
    )
}