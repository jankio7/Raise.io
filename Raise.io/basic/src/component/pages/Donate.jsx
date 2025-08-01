import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import { db } from "../../Firebase"; // Ensure Firebase is initialized
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Donate(){
             const [name, setName]=useState("")
             const [email, setEmail]=useState("")
            const [amt,setAmt]=useState(0)
             const handlePayment = () => {
               const options = {
                 key: "rzp_test_81R6461VPRt25N", // Razorpay Key ID
                 amount: amt*100, // Amount in paisa (₹500)
                 currency: "INR",
                 name: "SAVIOUR",
                 description: "Product or Service",
                 handler: async function (response) {
                   // Save payment ID to Firebase Firestore
                   const ref = doc(db, "payments", response.razorpay_payment_id);
                   await setDoc(ref, {
                     paymentId: response.razorpay_payment_id,
                     status: "success",
                     amount:amt,
                     userId:sessionStorage.getItem("userId"),
                     timestamp: Date.now(),
                   });
                   toast("Payment successful!");
                 },
                 prefill: {
                   name: "Test User",
                   email: "test@example.com",
                   contact: "9999999999",
                 },
                 theme: {
                   color:"#5ABFAB",
                 },
               };
           
               const rzp = new window.Razorpay(options);
               rzp.open();
             };
    return(
        <>
        <section className="donate-section">
  <div className="section-overlay" />
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-12 mx-auto">
        <form
          className="custom-form donate-form"
          action="#"
          method="get"
          role="form"
        >
            
          <h3 className="mb-4">Make a donation</h3>
          <div className="row">
            
            
            <div className="col-lg-12 col-12">
              <h5 className="mt-2 mb-3">Select an amount</h5>
            </div>
           
            <div className="col-lg-12 col-12 form-check-group">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  ₹
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Custom amount"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={amt} onChange={(e)=>{setAmt(e.target.value)}}
                />
              </div>
            </div>
            <div className="col-lg-12 col-12">
              <h5 className="mt-1">Personal Info</h5>
            </div>
            <div className="col-lg-6 col-12 mt-2">
              <input
                type="text"
                name="donation-name"
                id="donation-name"
                className="form-control"
                placeholder="Full Name"
                required=""
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
              />
            </div>
            <div className="col-lg-6 col-12 mt-2">
              <input
                type="email"
                name="donation-email"
                id="donation-email"
                pattern="[^ @]*@[^ @]*"
                className="form-control"
                placeholder="Email"
                required=""
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              />
            </div>
            
            <div className="col-lg-12 col-12 mt-2">
              
              <button type="submit" onClick={handlePayment} className="form-control mt-4">
                Submit Donation
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        </>
    );
}