import { useEffect } from "react";

const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return; // safety check

      if (window.scrollY > 100) {
        navbar.classList.add('nav-sticky');
      } else {
        navbar.classList.remove('nav-sticky');
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // empty dependency array = run once when mounted

  return(
    <>
      {/* Nav Bar Start */}
      <div className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand"></a>
          {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav ml-auto">
              <a href="#home" className="nav-item nav-link active">Home</a>
              <a href="#about" className="nav-item nav-link">About</a>
              <a href="#service" className="nav-item nav-link">Service</a>
              <a href="#experience" className="nav-item nav-link">Experience</a>
              <a href="#portfolio" className="nav-item nav-link">Projects</a>
              <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
          </div>
        </div>
      </div>
      {/* Nav Bar End */}
    </>
  )
}

export default Navbar