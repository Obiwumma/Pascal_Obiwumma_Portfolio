import React from "react";

const Footer = () => {

  return (
    <>
      {/* Footer Start */}
      <div className="footer" data-aos="fade-in" >
        <div className="container-fluid">
          <div className="container">
            <div className="footer-info">
              <h2>Pascal Obiwumma</h2>
              <h3>D12, Gado Nasko Road, Phase 4, Kubwa, Abuja</h3>
              <div className="footer-menu">
                <p>+2349071143318</p>
                <p>pobiwumma@gmail.com</p>
              </div>
              <div className="footer-social">
                <a href="https://twitter.com/Pascal_FTM?t=oY82Kk2-C4jlrLDdO1AEoA&s=09"><i className="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/isabella.curvs.7"><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
          <div className="container copyright">
            <p>&copy; <a href="#">Pascal's Portfolio</a>, All Right Reserved </p>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
}

export default Footer;