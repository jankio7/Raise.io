import { collection, onSnapshot, query, updateDoc, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { db } from "../../Firebase";
import { toast } from "react-toastify";

export default function ViewDonation() {
     const [load, setLoad]=useState(true)
  const [AllDonation, setDonation] = useState([]);

  const fetchData = () => {
    const q =query (collection(db, "donations")
    // , where("organiserId","==",sessionStorage.getItem("userId"))
    );


    onSnapshot(q,  async (donationDoc) => {
        // console.log(donationData);
        
        let donationData=donationDoc.docs.map((el)=>{
                // console.log(el.data());
                return {id:el.id, ...el.data()}
                
        });
        setLoad(false)
             
        let updateData=[]
        for(let i=0;i<donationData.length;i++){
            let userId=donationData[i].userId
            let campaignId=donationData[i].campaignId
            let organiserId=donationData[i].organiserId
            let userDoc=await getDoc(doc(db,"users",userId))
            let organiserDoc=await getDoc(doc(db,"users",organiserId))
            let campaignDoc=await getDoc(doc(db,"campaign",campaignId))
            let userData=userDoc.data()
            let organiserData=organiserDoc.data()
            let campaignData=campaignDoc.data()
            updateData.push({...donationData[i], user:userData, organiser:organiserData, campaign:campaignData})
        }
        setDonation(updateData)
        
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const changeStatus = async (id, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let data = {
          status: !status,
        };
        await donationDoc(doc(db, "donation", id), data)
          .then(() => {
            Swal.fire({
              title: "successfully",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };
  return (
    <>
      <div className="container my-5">
        {load?
                 <RingLoader color="#00BD56" size={40} cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
          :
        <div className="row justify-content-center no-gutters">
          <div className="col-md-10" style={{ boxShadow: "0px 0px 15px gray" }}>
            <div className="d-flex justify-content-end p-2">
              {/* <Link to={"/admin/category"} className="btn btn-outline-dark">Add New +</Link> */}
            </div>
            <div className="contact-wrap w-100 p-md-5 p-4 table-responsive">
              <h3 className="mb-5">View Donation</h3>
              <table className="table table-border table-hover">
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">User</th>
                    <th scope="col">Organiser</th>
                    <th scope="col">Campaign</th>
                    <th scope ="col">Amount</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {AllDonation.map((el, index) => {
                  return (
                    <tbody>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <th>
                            {el?.user?.fullname}<br/>
                            {el?.user?.email}<br/>
                            {el?.user?.contact}<br/>
                        </th>
                        <th>
                            {el?.organiser?.fullname}<br/>
                            {el?.organiser?.email}<br/>
                            {el?.organiser?.contact}<br/>
                        </th>
                        <th>{el?.campaign?.campaigntitle}</th>
                        <th>&#8377;{el?.amount}</th>
                        <th>{el?.status}</th>
                      </tr>
                      
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
       }
      </div>
    </>
  );
}
