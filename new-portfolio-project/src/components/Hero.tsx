import { ReactTyped } from "react-typed";

const Hero = () => {

  return (
    <>
      {/* Hero Start */}
      <div className="hero" id="home">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <div className="hero-content">
                <div className="hero-text">
                  <p>I'm</p>
                  <h1>Pascal Obiwumma</h1>
                  <h2>
                    <ReactTyped
                      strings={['Web Developer', 'Front End Developer', 'UI Developer']}
                      typeSpeed={50}
                      backSpeed={50}
                      loop
                    ></ReactTyped>
                  </h2>
                  <div className="typed-text">Web Developer, Front End Developer</div>
                </div>
                <div className="hero-btn">
                  {/* <a className="btn" href="">Hire Me</a> */}
                  {/* <a className="btn" href="">Contact Me</a> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 d-none d-md-block">
              <div className="hero-image">
                <img height="400px" src="/assets/developer.webp" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}
    </>
  )
}

export default Hero;