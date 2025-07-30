import { Link } from "react-router-dom";


export default function DashBoardorg(){
    return(
        <>
            <section className="section-padding">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <Link to="/campaign/" className="nav-link">
                 <p className="featured-block-text">
                      category
                  </p>
                  <img
                    src="/assets/images/icons/hands.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                    

                  <i className="btn btn-Light">Read more</i> 
                  </Link>
              </div>
             
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <Link to="/admin/managecategory/" className="nav-link">
                <p className="featured-block-text">
                   Manage Category
                  </p> 
                  <img
                    src="/assets/images/icons/heart.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                   
                  <i className="btn btn-Light">Read more</i> 
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <Link to="/admin/managecampaign/" className="nav-link">
                 <p className="featured-block-text">
                   Campaign
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
                    Donation
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