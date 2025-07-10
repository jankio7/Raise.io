function Newsdetail() {
    return(
        <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Kind Heart Charity - News Detail</title>
  
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <link href="css/bootstrap-icons.css" rel="stylesheet" />
  <link href="css/templatemo-kind-heart-charity.css" rel="stylesheet" />
  
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
            <a className="nav-link smoothscroll" href="index.html#section_2">
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
                <a className="dropdown-item active" href="news-detail.html">
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
    <section className="news-detail-header-section text-center">
      <div className="section-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h1 className="text-white">News Detail</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="news-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="news-block">
              <div className="news-block-top">
                <img
                  src="/assets/images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                  className="news-image img-fluid"
                  alt=""
                />
                <div className="news-category-block">
                  <a href="#" className="category-block-link">
                    Lifestyle,
                  </a>
                  <a href="#" className="category-block-link">
                    Clothing Donation
                  </a>
                </div>
              </div>
              <div className="news-block-info">
                <div className="d-flex mt-2">
                  <div className="news-block-date">
                    <p>
                      <i className="bi-calendar4 custom-icon me-1" />
                      October 12, 2036
                    </p>
                  </div>
                  <div className="news-block-author mx-5">
                    <p>
                      <i className="bi-person custom-icon me-1" />
                      By Admin
                    </p>
                  </div>
                  <div className="news-block-comment">
                    <p>
                      <i className="bi-chat-left custom-icon me-1" />
                      48 Comments
                    </p>
                  </div>
                </div>
                <div className="news-block-title mb-2">
                  <h4>Clothing donation to urban area</h4>
                </div>
                <div className="news-block-body">
                  <p>
                    <strong>Lorem Ipsum</strong> dolor sit amet, consectetur
                    adipsicing kengan omeg kohm tokito Professional charity
                    theme based on Bootstrap
                  </p>
                  <p>
                    <strong>Sed leo</strong> nisl, This is a Bootstrap 5.2.2 CSS
                    template for charity organization websites. You can feel
                    free to use it. Please tell your friends about TemplateMo
                    website. Thank you.
                  </p>
                  <blockquote>
                    Sed leo nisl, posuere at molestie ac, suscipit auctor
                    mauris. Etiam quis metus elementum, tempor risus vel,
                    condimentum orci.
                  </blockquote>
                </div>
                <div className="row mt-5 mb-4">
                  <div className="col-lg-6 col-12 mb-4 mb-lg-0">
                    <img
                      src="/assets/images/news/africa-humanitarian-aid-doctor.jpg"
                      className="news-detail-image img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <img
                      src="/assets/images/news/close-up-happy-people-working-together.jpg"
                      className="news-detail-image img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <p>
                  You are not allowed to redistribute this template ZIP file on
                  any other template collection website. Please{" "}
                  <a href="https://templatemo.com/contact" target="_blank">
                    contact TemplateMo
                  </a>{" "}
                  for more information.
                </p>
                <div className="social-share border-top mt-5 py-4 d-flex flex-wrap align-items-center">
                  <div className="tags-block me-auto">
                    <a href="#" className="tags-block-link">
                      Donation
                    </a>
                    <a href="#" className="tags-block-link">
                      Clothing
                    </a>
                    <a href="#" className="tags-block-link">
                      Food
                    </a>
                  </div>
                  <div className="d-flex">
                    <a href="#" className="social-icon-link bi-facebook" />
                    <a href="#" className="social-icon-link bi-twitter" />
                    <a href="#" className="social-icon-link bi-printer" />
                    <a href="#" className="social-icon-link bi-envelope" />
                  </div>
                </div>
                <div className="author-comment d-flex mt-3 mb-4">
                  <img
                    src="/assets/images/avatar/studio-portrait-emotional-happy-funny.jpg"
                    className="img-fluid avatar-image"
                    alt=""
                  />
                  <div className="author-comment-info ms-3">
                    <h6 className="mb-1">Jack</h6>
                    <p className="mb-0">
                      Kind Heart Charity is the most supportive organization.
                      This is Bootstrap 5 HTML CSS template for everyone. Thank
                      you.
                    </p>
                    <div className="d-flex mt-2">
                      <a href="#" className="author-comment-link me-3">
                        Like
                      </a>
                      <a href="#" className="author-comment-link">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="author-comment d-flex ms-5 ps-3">
                  <img
                    src="/assets/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
                    className="img-fluid avatar-image"
                    alt=""
                  />
                  <div className="author-comment-info ms-3">
                    <h6 className="mb-1">Daisy</h6>
                    <p className="mb-0">
                      Sed leo nisl, posuere at molestie ac, suscipit auctor
                      mauris. Etiam quis metus elementum, tempor risus vel,
                      condimentum orci
                    </p>
                    <div className="d-flex mt-2">
                      <a href="#" className="author-comment-link me-3">
                        Like
                      </a>
                      <a href="#" className="author-comment-link">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="author-comment d-flex mt-3 mb-4">
                  <img
                    src="/assets/images/avatar/portrait-young-redhead-bearded-male.jpg"
                    className="img-fluid avatar-image"
                    alt=""
                  />
                  <div className="author-comment-info ms-3">
                    <h6 className="mb-1">Wilson</h6>
                    <p className="mb-0">
                      Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                      omeg kohm tokito Professional charity theme based on
                      Bootstrap
                    </p>
                    <div className="d-flex mt-2">
                      <a href="#" className="author-comment-link me-3">
                        Like
                      </a>
                      <a href="#" className="author-comment-link">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
                <form
                  className="custom-form comment-form mt-4"
                  action="#"
                  method="post"
                  role="form"
                >
                  <h6 className="mb-3">Write a comment</h6>
                  <textarea
                    name="comment-message"
                    rows={4}
                    className="form-control"
                    id="comment-message"
                    placeholder="Your comment here"
                    defaultValue={""}
                  />
                  <div className="col-lg-3 col-md-4 col-6 ms-auto">
                    <button type="submit" className="form-control">
                      Comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mx-auto mt-4 mt-lg-0">
            <form
              className="custom-form search-form"
              action="#"
              method="post"
              role="form"
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button type="submit" className="form-control">
                <i className="bi-search" />
              </button>
            </form>
            <h5 className="mt-5 mb-3">Recent news</h5>
            <div className="news-block news-block-two-col d-flex mt-4">
              <div className="news-block-two-col-image-wrap">
                <a href="news-detail.html">
                  <img
                    src="/assets/images/news/africa-humanitarian-aid-doctor.jpg"
                    className="news-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6>
                    <a
                      href="news-detail.html"
                      className="news-block-title-link"
                    >
                      Food donation area
                    </a>
                  </h6>
                </div>
                <div className="news-block-date">
                  <p>
                    <i className="bi-calendar4 custom-icon me-1" />
                    October 16, 2036
                  </p>
                </div>
              </div>
            </div>
            <div className="news-block news-block-two-col d-flex mt-4">
              <div className="news-block-two-col-image-wrap">
                <a href="news-detail.html">
                  <img
                    src="/assets/images/news/close-up-happy-people-working-together.jpg"
                    className="news-image img-fluid"
                    alt=""
                  />
                </a>
              </div>
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6>
                    <a
                      href="news-detail.html"
                      className="news-block-title-link"
                    >
                      Volunteering Clean
                    </a>
                  </h6>
                </div>
                <div className="news-block-date">
                  <p>
                    <i className="bi-calendar4 custom-icon me-1" />
                    October 20, 2036
                  </p>
                </div>
              </div>
            </div>
            <div className="category-block d-flex flex-column">
              <h5 className="mb-3">Categories</h5>
              <a href="#" className="category-block-link">
                Drinking water
                <span className="badge">20</span>
              </a>
              <a href="#" className="category-block-link">
                Food Donation
                <span className="badge">30</span>
              </a>
              <a href="#" className="category-block-link">
                Children Education
                <span className="badge">10</span>
              </a>
              <a href="#" className="category-block-link">
                Poverty Development
                <span className="badge">15</span>
              </a>
              <a href="#" className="category-block-link">
                Clothing Donation
                <span className="badge">20</span>
              </a>
            </div>
            <div className="tags-block">
              <h5 className="mb-3">Tags</h5>
              <a href="#" className="tags-block-link">
                Donation
              </a>
              <a href="#" className="tags-block-link">
                Clothing
              </a>
              <a href="#" className="tags-block-link">
                Food
              </a>
              <a href="#" className="tags-block-link">
                Children
              </a>
              <a href="#" className="tags-block-link">
                Education
              </a>
              <a href="#" className="tags-block-link">
                Poverty
              </a>
              <a href="#" className="tags-block-link">
                Clean Water
              </a>
            </div>
            <form
              className="custom-form subscribe-form"
              action="#"
              method="post"
              role="form"
            >
              <h5 className="mb-4">Newsletter Form</h5>
              <input
                type="email"
                name="subscribe-email"
                id="subscribe-email"
                pattern="[^ @]*@[^ @]*"
                className="form-control"
                placeholder="Email Address"
                required=""
              />
              <div className="col-lg-12 col-12">
                <button type="submit" className="form-control">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section className="news-section section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 mb-4">
            <h2>Related news</h2>
          </div>
          <div className="col-lg-6 col-12">
            <div className="news-block">
              <div className="news-block-top">
                <a href="news-detail.html">
                  <img
                    src="/assets/images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                    className="news-image img-fluid"
                    alt=""
                  />
                </a>
                <div className="news-category-block">
                  <a href="#" className="category-block-link">
                    Lifestyle,
                  </a>
                  <a href="#" className="category-block-link">
                    Clothing Donation
                  </a>
                </div>
              </div>
              <div className="news-block-info">
                <div className="d-flex mt-2">
                  <div className="news-block-date">
                    <p>
                      <i className="bi-calendar4 custom-icon me-1" />
                      October 16, 2036
                    </p>
                  </div>
                  <div className="news-block-author mx-5">
                    <p>
                      <i className="bi-person custom-icon me-1" />
                      By Admin
                    </p>
                  </div>
                  <div className="news-block-comment">
                    <p>
                      <i className="bi-chat-left custom-icon me-1" />
                      24 Comments
                    </p>
                  </div>
                </div>
                <div className="news-block-title mb-2">
                  <h4>
                    <a
                      href="news-detail.html"
                      className="news-block-title-link"
                    >
                      Clothing donation to urban area
                    </a>
                  </h4>
                </div>
                <div className="news-block-body">
                  <p>
                    Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                    omeg kohm tokito Professional charity theme based on
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="news-block">
              <div className="news-block-top">
                <a href="news-detail.html">
                  <img
                    src="/assets/images/news/medium-shot-people-collecting-foodstuff.jpg"
                    className="news-image img-fluid"
                    alt=""
                  />
                </a>
                <div className="news-category-block">
                  <a href="#" className="category-block-link">
                    Food,
                  </a>
                  <a href="#" className="category-block-link">
                    Donation,
                  </a>
                  <a href="#" className="category-block-link">
                    Caring
                  </a>
                </div>
              </div>
              <div className="news-block-info">
                <div className="d-flex mt-2">
                  <div className="news-block-date">
                    <p>
                      <i className="bi-calendar4 custom-icon me-1" />
                      October 20, 2036
                    </p>
                  </div>
                  <div className="news-block-author mx-5">
                    <p>
                      <i className="bi-person custom-icon me-1" />
                      By Admin
                    </p>
                  </div>
                  <div className="news-block-comment">
                    <p>
                      <i className="bi-chat-left custom-icon me-1" />
                      36 Comments
                    </p>
                  </div>
                </div>
                <div className="news-block-title mb-2">
                  <h4>
                    <a
                      href="news-detail.html"
                      className="news-block-title-link"
                    >
                      Food donation area
                    </a>
                  </h4>
                </div>
                <div className="news-block-body">
                  <p>
                    Sed leo nisl, posuere at molestie ac, suscipit auctor
                    mauris. Etiam quis metus elementum, tempor risus vel,
                    condimentum orci
                  </p>
                </div>
              </div>
            </div>
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
              305-240-9671
            </a>
          </p>
          <p className="text-white d-flex">
            <i className="bi-envelope me-2" />
            <a href="mailto:info@yourgmail.com" className="site-footer-link">
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
              </a>{" "}
              <br />
              Distribution: <a href="https://themewagon.com">ThemeWagon</a>
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
  {/* JAVASCRIPT FILES */}
</>

    )
}
export default Newsdetail