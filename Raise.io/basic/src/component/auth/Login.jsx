import { Link } from "react-router-dom";

export default function Login(){
    return(
        <> 
            <section className="contact-section section-padding" id="section_6">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
              <div className="contact-info-wrap">
                <h2>Raise.io</h2>
                <div className="contact-image-wrap d-flex flex-wrap">
                  <img
                    src="/assets/images/boy.jpg"
                    className="img-fluid avatar-image"
                    alt=""
                  />
                  <div className="d-flex flex-column justify-content-center ms-3">
                    <p className="mb-0">Ravinder Kumar</p>
                    <p className="mb-0">
                      <strong>Founder</strong>
                    </p>
                  </div>
                </div>
                <div className="contact-info">
                  <h5 className="mb-3">Contact Infomation</h5>
                  <p className="d-flex mb-2">
                    <i className="bi-geo-alt me-2" />
                    Ghurial ,Jalandhar(punjab)
                  </p>
                  <p className="d-flex mb-2">
                    <i className="bi-telephone me-2" />
                    <a href="tel: 305-240-9671">7901795389</a>
                  </p>
                  <p className="d-flex">
                    <i className="bi-envelope me-2" />
                    <a href="mailto:info@yourgmail.com">o7services.org</a>
                  </p>
                  <Link to="#" className="custom-btn btn mt-3">
                     send Messages
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 mx-auto">
              <form
                className="custom-form contact-form"
                action="#"
                method="post"
                role="form"
              >
                <h2 >Login Form</h2>
                
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="form-control"
                      placeholder="Email"
                      required=""
                    />
                  </div>
              
              
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="password"
                  required=""
                />
                
                
                <button type="submit" className="form-control">
                  Sign in 
                </button>
                Don't have an account?<Link>Sign Up</Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 mb-4">
            <img src="/assets/images/logo.png" className="logo img-fluid" alt="" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <h5 className="site-footer-title mb-3">Quick Links</h5>
            <ul className="footer-menu">
              <li className="footer-menu-item">
                <a href="#" className="footer-menu-link">
                  Our Story
                </a>
              </li>
              <li className="footer-menu-item">
                <Link to="#" className="footer-menu-link">
                  Newsroom
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="#" className="footer-menu-link">
                  Causes
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="#" className="footer-menu-link">
                  Become a volunteer
                </Link>
              </li>
              <li className="footer-menu-item">
                <Link to="#" className="footer-menu-link">
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mx-auto">
            <h5 className="site-footer-title mb-3">Contact Infomation</h5>
            <p className="text-white d-flex mb-2">
              <i className="bi-telephone me-2" />
              <Link to="tel: 305-240-9671" className="site-footer-link">
                305-240-9671
              </Link>
            </p>
            <p className="text-white d-flex">
              <i className="bi-envelope me-2" />
              <Link to="mailto:info@yourgmail.com" className="site-footer-link">
                donate@charity.org
              </Link>
            </p>
            <p className="text-white d-flex mt-3">
              <i className="bi-geo-alt me-2" />
              Akershusstranda 20, 0150 Oslo, Norway
            </p>
            <Link to="#" className="custom-btn btn mt-3">
              Get Direction
            </Link>
          </div>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 col-12">
              <p className="copyright-text mb-0">
                Copyright © 2036 <a href="#">Kind Heart</a> Charity Org. Design:{" "}
                <Link to="https://templatemo.com" target="_blank">
                  TemplateMo
                </Link>
                <br />
                Distribution:
                <Link to="https://themewagon.com">ThemeWagon</Link>
              </p>
            </div>
            <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
              <ul className="social-icon">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-twitter" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-instagram" />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-linkedin" />
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

     </>
    )
}