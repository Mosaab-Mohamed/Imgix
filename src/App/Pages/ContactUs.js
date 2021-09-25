const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <h1 className="contact_header">Contact Us</h1>
        <div className="row justify-content-around">
          <div className="col-12 col-md-6 mb-5">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="first-name" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="first-name" />
                </div>
                <div className="col">
                  <label htmlFor="second-name" className="form-label">
                    Second Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="second-name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input type="email" className="form-control" id="subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input type="email" className="form-control" id="subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="7"
                  placeholder="Write your notes or inquires here..."
                ></textarea>
              </div>
              <button className="contact_btn" type="submit">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-12 col-md-3">
            <div className="contact_info mb-4">
              <h5>Address</h5>
              <p>
                203 Fake St. Mountain
                <br />
                View, San Francisco,
                <br />
                California, USA
              </p>
            </div>
            <div className="contact_info mb-4">
              <h5>Phone</h5>
              <p>
                <a href="tel:+4733378901">+47 333 78 901</a>
              </p>
            </div>
            <div className="contact_info">
              <h5>Email Address</h5>
              <p>
                <a href="mailto:youremail@domain.com">youremail@domain.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
