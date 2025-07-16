export default function Volunter(){
    return(
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

    )
}