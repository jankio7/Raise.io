import {Link} from "react-router-dom";

export default function Causes(){
    return(
         <section className="section-padding" id="section_3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center mb-4">
              <h2>Our Causes</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <img
                  src="/assets/images/causes/group-african-kids-paying-attention-class.jpg"
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Children Education</h5>
                    <p>
                       The fundraiser project focuses on supporting children's education by providing essential resources like books, uniforms, and tuition aid. It aims to ensure underprivileged children have access to quality learning opportunities.
                    </p>
                    
                  </div>
                  <Link to="donate.html" className="custom-btn btn">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="custom-block-wrap">
                <img
                  src="/assets/images/causes/poor-child-landfill-looks-forward-with-hope.jpg"
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Poverty Development</h5>
                    <p>
                     he fundraiser project aims to support poverty alleviation by funding skill development, basic necessities, and livelihood programs. It seeks to empower underprivileged communities towards sustainable economic growth.
                    </p>
                    
                  </div>
                  <Link to="donate.html" className="custom-btn btn">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="custom-block-wrap">
                <img
                  src="/assets/images/causes/african-woman-pouring-water-recipient-outdoors.jpg"
                  className="custom-block-image img-fluid"
                  alt=""
                />
                <div className="custom-block">
                  <div className="custom-block-body">
                    <h5 className="mb-3">Supply drinking water</h5>
                    <p>
                      The fundraiser project aims to provide clean and safe drinking water to communities in need by setting up water filters, tanks, or borewells. It focuses on improving health and hygiene through sustainable water solutions.
                    </p>
                    
                  </div>
                  <Link to="donate.html" className="custom-btn btn">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}