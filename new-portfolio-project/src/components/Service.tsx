
const Service = () => {

  return (
    <>
      {/* Service Start */}
      <div className="service" id="service">
        <div className="container">
          <div className="section-header text-center "data-aos="zoom-in" >
            <p>What I do</p>
            <h2>Awesome Quality Services</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 " data-aos="fade-up" >
              <div className="service-item">
                <div className="service-icon">
                  <i className="fa fa-laptop"></i>
                </div>
                <div className="service-text">
                  <h3>Responsive Web Design & UI <span style={{color: "#81817d"}}>Development</span></h3>
                  <p>
                    Pixel-perfect designs that work beautifully on all screen sizes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" >
              <div className="service-item">
                <div className="service-icon">
                  <i className="fa fa-laptop-code"></i>
                </div>
                <div className="service-text">
                  <h3>Web Development Support and Maintenance</h3>
                  <p>
                    Offer support and maintenance of websites after completing your project.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" >
              <div className="service-item">
                <div className="service-icon">
                  <i className="fab fa-android"></i>
                </div>
                <div className="service-text">
                  <h3>Web Hosting</h3>
                  <p>
                    Storing the website files on a server that can be accessed anywhere in the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 " data-aos="fade-up" >
              <div className="service-item">
                <div className="service-icon">
                  <i className="fab fa-apple"></i>
                </div>
                <div className="service-text">
                  <h3>Web Optimization</h3>
                  <p>
                    Making web apps more user-friendly and visible to the search engines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  )
}

export default Service;