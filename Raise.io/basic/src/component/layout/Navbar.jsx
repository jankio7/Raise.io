import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
           <div className="wrap">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <p className="mb-0 phone pl-md-2">
            <Link to="#" className="mr-2">
              <span className="fa fa-phone mr-1" /> +00 1234 567
            </Link>
            <Link to="#">
              <span className="fa fa-paper-plane mr-1" /> o7servicesgmail.com
            </Link>
          </p>
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <div className="social-media">
            <p className="mb-0 d-flex">
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-facebook">
                  <i className="sr-only">Facebook</i>
                </span>
              </Link>
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-twitter">
                  <i className="sr-only">Twitter</i>
                </span>
              </Link>
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-instagram">
                  <i className="sr-only">Instagram</i>
                </span>
              </Link>
              <Link
                to="#"
                className="d-flex align-items-center justify-content-center"
              >
                <span className="fa fa-dribbble">
                  <i className="sr-only">Dribbble</i>
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-light ftco-navbar-light"
    id="ftco-navbar"
  >
    <div className="container">
      <Link className="navbar-brand" to="index.html">
        <span className="flaticon-pawprint-1 mr-2" />
        Raise.io
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars" /> Menu
      </button>
      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link">
              About
            </Link>
          </li>
      
          <li className="nav-item">
            <a href="/causes" className="nav-link">
              Causes
            </a>
          </li>
         
          <li className="nav-item">
            <Link to={"/volunter"} className="nav-link">
              Volunter
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/News"} className="nav-link">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/donate"} className="nav-link">
              Donate
            </Link>
          </li>
           <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>

    )
}