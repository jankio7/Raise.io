import { Link } from "react-router-dom";

function About(){
      return(
          <>
        
 
    <main>
      <section className="hero-section hero-section-full-height">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12 p-0">
              <div
                id="hero-slide"
                className="carousel carousel-fade slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/assets/images/slide/volunteer-helping-with-donation-box.jpg"
                      className="carousel-image img-fluid"
                      alt="..."
                    />
                    <div className="carousel-caption d-flex flex-column justify-content-end">
                      <h1>be a Kind Heart</h1>
                      <p className="mx-end">Donate Charity </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg"
                      className="carousel-image img-fluid"
                      alt="..."
                    />
                    <div className="carousel-caption d-flex flex-column justify-content-end">
                      <h1>Non-profit</h1>
                      <p>You can support us to grow more</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/images/slide/medium-shot-people-collecting-donations.jpg"
                      className="carousel-image img-fluid"
                      alt="..."
                    />
                    <div className="carousel-caption d-flex flex-column justify-content-end">
                      <h1>Humanity</h1>
                      <p>Donate for Charity</p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#hero-slide"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#hero-slide"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 text-center mx-auto">
              <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img
                    src="/assets/images/icons/hands.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                  <p className="featured-block-text">
                    Become a <strong>volunteer</strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img
                    src="/assets/images/icons/heart.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                  <p className="featured-block-text">
                    <strong>Caring</strong> Earth
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img
                    src="/assets/images/icons/receive.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                  <p className="featured-block-text">
                    Make a <strong>Donation</strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <div className="featured-block d-flex justify-content-center align-items-center">
                <a href="donate.html" className="d-block">
                  <img
                    src="/assets/images/icons/scholarship.png"
                    className="featured-block-image img-fluid"
                    alt=""
                  />
                  <p className="featured-block-text">
                    <strong>Scholarship</strong> Program
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <img
                src="/assets/images/boy.jpg"
                className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-md-7 col-12">
              <div className="custom-text-block">
                <h2 className="mb-0">Arshpreet Singh</h2>
                <p className="text-muted mb-lg-4 mb-md-4">Founding Partner</p>
                <p>
                 Our founding partner plays a vital role in shaping the vision and strategic direction of the fundraiser project. With a deep commitment to social impact, they provide crucial guidance and initial support.


                </p>
                <p>
                 

They contribute foundational resources, networking opportunities, and mentorship to ensure project sustainability. Their belief in our mission empowers us to reach underserved communities effectively.
                </p>
                <ul className="social-icon mt-4">
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-twitter" />
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-facebook" />
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-instagram" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section section-padding section-bg">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 col-12 ms-auto">
              <h2 className="mb-0">
                Make an impact. <br /> Save lives.
              </h2>
            </div>
            <div className="col-lg-5 col-12">
              <a href="#" className="me-4">
                Make a donation
              </a>
              <a href="#section_4" className="custom-btn btn smoothscroll">
                Become a volunteer
              </a>
            </div>
          </div>
        </div>
      </section>
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
                  <a href="donate.html" className="custom-btn btn">
                    Donate now
                  </a>
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
                     The fundraiser project aims to support poverty alleviation by funding skill development, basic necessities, and livelihood programs. It seeks to empower underprivileged communities towards sustainable economic growth.
                    </p>
                    
                  </div>
                  <a href="donate.html" className="custom-btn btn">
                    Donate now
                  </a>
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
                  <a href="donate.html" className="custom-btn btn">
                    Donate now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="volunteer-section section-padding" id="section_4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="text-white mb-4">Volunteer</h2>
              <form
                className="custom-form volunteer-form mb-5 mb-lg-0"
                action="#"
                method="post"
                role="form"
              >
                <h3 className="mb-4">Become a volunteer today</h3>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      name="volunteer-name"
                      id="volunteer-name"
                      className="form-control"
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      name="volunteer-email"
                      id="volunteer-email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      name="volunteer-subject"
                      id="volunteer-subject"
                      className="form-control"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="input-group input-group-file">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile02"
                      />
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupFile02"
                      >
                        Upload your CV
                      </label>
                      <i className="bi-cloud-arrow-up ms-auto" />
                    </div>
                  </div>
                </div>
                <textarea
                  name="volunteer-message"
                  rows={3}
                  className="form-control"
                  id="volunteer-message"
                  placeholder="Comment (Optional)"
                  defaultValue={""}
                />
                <button type="submit" className="form-control">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6 col-12">
              <img
                src="/assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg"
                className="volunteer-image img-fluid"
                alt=""
              />
              <div className="custom-block-body text-center">
                <h4 className="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>
                <p className="text-white">
                 Volunteers support the fundraiser project by assisting in planning, promotion, and community engagement to ensure its success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section section-padding" id="section_5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 mb-5">
              <h2>Latest News</h2>
            </div>
            <div className="col-lg-7 col-12">
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
                      
                      
                    </div>
                    <div className="news-block-author mx-5">
                      
                      
                    </div>
                    <div className="news-block-comment">
                      
                        
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
                      The fundraiser project promotes clothing donation drives in urban areas to collect and 
                      distribute garments to homeless and low-income families, supporting dignity and basic needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-block mt-3">
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
                      The fundraiser project includes food donation drives in targeted areas to provide meals and essential groceries to underprivileged families, helping to reduce hunger and improve nutrition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mx-auto">
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
      <section className="testimonial-section section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <h2 className="mb-lg-3">Happy customers</h2>
              <div
                id="testimonial-carousel"
                className="carousel carousel-fade slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption">
                      <h4 className="carousel-title">
                       support that improved their living conditions, education, and well-being. Their satisfaction reflects the project's meaningful impact and success.

                      </h4>
                      <small className="carousel-name">
                        <span className="carousel-name-title">Maria</span>, Boss
                      </small>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <h4 className="carousel-title">
                        Sed leo nisl, posuere at molestie ac, suscipit auctor
                        mauris quis metus tempor orci
                      </h4>
                      <small className="carousel-name">
                        <span className="carousel-name-title">Thomas</span>,
                        Partner
                      </small>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <h4 className="carousel-title">
                        Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                        omeg kohm tokito charity theme
                      </h4>
                      <small className="carousel-name">
                        <span className="carousel-name-title">Jane</span>, Advisor
                      </small>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <h4 className="carousel-title">
                        Sed leo nisl, posuere at molestie ac, suscipit auctor
                        mauris quis metus tempor orci
                      </h4>
                      <small className="carousel-name">
                        <span className="carousel-name-title">Bob</span>,
                        Entreprenuer
                      </small>
                    </div>
                  </div>
                  <ol className="carousel-indicators">
                    <li
                      data-bs-target="#testimonial-carousel"
                      data-bs-slide-to={0}
                      className="active"
                    >
                      <img
                        src="/assets/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                        className="img-fluid rounded-circle avatar-image"
                        alt="avatar"
                      />
                    </li>
                    <li
                      data-bs-target="#testimonial-carousel"
                      data-bs-slide-to={1}
                      className=""
                    >
                      <img
                        src="/assets/images/avatar/portrait-young-redhead-bearded-male.jpg"
                        className="img-fluid rounded-circle avatar-image"
                        alt="avatar"
                      />
                    </li>
                    <li
                      data-bs-target="#testimonial-carousel"
                      data-bs-slide-to={2}
                      className=""
                    >
                      <img
                        src="/assets/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
                        className="img-fluid rounded-circle avatar-image"
                        alt="avatar"
                      />
                    </li>
                    <li
                      data-bs-target="#testimonial-carousel"
                      data-bs-slide-to={3}
                      className=""
                    >
                      <img
                        src="/assets/images/avatar/studio-portrait-emotional-happy-funny.jpg"
                        className="img-fluid rounded-circle avatar-image"
                        alt="avatar"
                      />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section section-padding" id="section_6">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 mx-auto mb-5 mb-lg-0 ">
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
                    Ghurial,Jalandhar (india)
                  </p>
                  <p className="d-flex mb-2">
                    <i className="bi-telephone me-2" />
                    <a href="tel: 305-240-9671">7901795389</a>
                  </p>
                  <p className="d-flex">
                    <i className="bi-envelope me-2" />
                    <a href="mailto:info@yourgmail.com">donate@charity.org</a>
                  </p>
                  <a href="#" className="custom-btn btn mt-3">
                    Get Direction
                  </a>
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
                <h2>Contact form</h2>
                <p className="mb-4">
                  Or, you can just send an email:
                  <a href="#">info@charity.org</a>
                </p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="form-control"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="form-control"
                      placeholder="Last Name"
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
                  placeholder="Email"
                  required=""
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Contact Number"
                  required=""
                />
                <textarea
                  name="message"
                  rows={5}
                  className="form-control"
                  id="message"
                  placeholder="Your Message"
                  defaultValue={""}
                />
                <button type="submit" className="form-control">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>




        </>
    )
}
  export default About