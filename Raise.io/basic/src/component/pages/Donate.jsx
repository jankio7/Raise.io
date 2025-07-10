function Donate(){
    return(
    <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Kind Heart Charity - Donation</title>
  {/* CSS FILES */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/bootstrap-icons.css" rel="stylesheet" />
  <link href="css/templatemo-kind-heart-charity.css" rel="stylesheet" />
  {/*

TemplateMo 581 Kind Heart Charity

https://templatemo.com/tm-581-kind-heart-charity

*/}
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12 d-flex flex-wrap">
          <p className="d-flex me-4 mb-0">
            <i className="bi-geo-alt me-2" />
            Akershusstranda 20, 0150 Oslo, Norway
          </p>
          <p className="d-flex mb-0">
            <i className="bi-envelope me-2" />
            <a href="mailto:info@company.com">info@company.com</a>
          </p>
        </div>
        <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
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
              <a href="#" className="social-icon-link bi-youtube" />
            </li>
            <li className="social-icon-item">
              <a href="#" className="social-icon-link bi-whatsapp" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <nav className="navbar navbar-expand-lg bg-light shadow-lg">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <img src="/assets/images/logo.png" className="logo img-fluid" alt="" />
        <span>
          Kind Heart Charity
          <small>Non-profit Organization</small>
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link click-scroll" href="index.html#section_1">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="index.html#section_2">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="index.html#section_3">
              Causes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="index.html#section_4">
              Volunteer
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link click-scroll dropdown-toggle"
              href="index.html#section_5"
              id="navbarLightDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              News
            </a>
            <ul
              className="dropdown-menu dropdown-menu-light"
              aria-labelledby="navbarLightDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="news.html">
                  News Listing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="news-detail.html">
                  News Detail
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="index.html#section_6">
              Contact
            </a>
          </li>
          <li className="nav-item ms-3">
            <a
              className="nav-link custom-btn custom-border-btn btn"
              href="donate.html"
            >
              Donate
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>
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
                  <h5 className="mb-3">Donation Frequency</h5>
                </div>
                <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                  <div className="form-check form-check-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="DonationFrequency"
                      id="DonationFrequencyOne"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="DonationFrequencyOne"
                    >
                      One Time
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 col-6 form-check-group form-check-group-donation-frequency">
                  <div className="form-check form-check-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="DonationFrequency"
                      id="DonationFrequencyMonthly"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="DonationFrequencyMonthly"
                    >
                      Monthly
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                  <h5 className="mt-2 mb-3">Select an amount</h5>
                </div>
                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                  <div className="form-check form-check-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      $10
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                  <div className="form-check form-check-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      $15
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                  <div className="form-check form-check-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      $20
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                  <div className="form-check form-check-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault4"
                    >
                      $30
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                  <div className="form-check form-check-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault5"
                    >
                      $45
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6 form-check-group">
                  <div className="form-check form-check-radio">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault6"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault6"
                    >
                      $50
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 col-12 form-check-group">
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      $
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Custom amount"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
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
                    placeholder="Jack Doe"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-12 mt-2">
                  <input
                    type="email"
                    name="donation-email"
                    id="donation-email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Jackdoe@gmail.com"
                    required=""
                  />
                </div>
                <div className="col-lg-12 col-12">
                  <h5 className="mt-4 pt-1">Choose Payment</h5>
                </div>
                <div className="col-lg-12 col-12 mt-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="DonationPayment"
                      id="flexRadioDefault9"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault9"
                    >
                      <i className="bi-credit-card custom-icon ms-1" />
                      Debit or Credit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="DonationPayment"
                      id="flexRadioDefault10"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault10"
                    >
                      <i className="bi-paypal custom-icon ms-1" />
                      Paypal
                    </label>
                  </div>
                  <button type="submit" className="form-control mt-4">
                    Submit Donation
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
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
              <a href="#" className="footer-menu-link">
                Newsroom
              </a>
            </li>
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                Causes
              </a>
            </li>
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                Become a volunteer
              </a>
            </li>
            <li className="footer-menu-item">
              <a href="#" className="footer-menu-link">
                Partner with us
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mx-auto">
          <h5 className="site-footer-title mb-3">Contact Infomation</h5>
          <p className="text-white d-flex mb-2">
            <i className="bi-telephone me-2" />
            <a href="tel: 305-240-9671" className="site-footer-link">
              120-240-9600
            </a>
          </p>
          <p className="text-white d-flex">
            <i className="bi-envelope me-2" />
            <a href="mailto:donate@charity.org" className="site-footer-link">
              donate@charity.org
            </a>
          </p>
          <p className="text-white d-flex mt-3">
            <i className="bi-geo-alt me-2" />
            Akershusstranda 20, 0150 Oslo, Norway
          </p>
          <a href="#" className="custom-btn btn mt-3">
            Get Direction
          </a>
        </div>
      </div>
    </div>
    <div className="site-footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-12">
            <p className="copyright-text mb-0">
              Copyright © 2036 <a href="#">Kind Heart</a> Charity Org. Design:{" "}
              <a href="https://templatemo.com" target="_blank">
                TemplateMo
              </a>
              <br />
              Distribution:
              <a href="https://themewagon.com">ThemeWagon</a>
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
              <li className="social-icon-item">
                <a
                  href="https://youtube.com/templatemo"
                  className="social-icon-link bi-youtube"
                />
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
export default Donate