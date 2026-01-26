import React from "react";

const Experience = () => {

  return(
    <>
      {/* Experience Start */}
      <div className="experience" id="experience">
        <div className="container">
          <header className="section-header text-center " data-aos="zoom-in" >
            <p>My Resume</p>
            <h2>Working Experience</h2>
          </header>
          <div className="timeline">
            <div className="timeline-item left " data-aos="slide-up" >
              <div className="timeline-text">
                <div className="timeline-date">2020-2021</div>
                <h2>Beginner Web Developer</h2>
                <h4>Onyibest Computer School</h4>
                <p>
                  Learned and taught my computer skills in this computer school.
                </p>
              </div>
            </div>
            <div className="timeline-item right " data-aos="slide-up" >
              <div className="timeline-text">
                <div className="timeline-date">2022-2023</div>
                <h2>Team Lead</h2>
                <h4>Side Hustle Internship 6.0</h4>
                <p>
                  Improved my skills and lead and assist my team in our monthly projects.
                </p>
              </div>
            </div>
            <div className="timeline-item left " data-aos="slide-up" >
              <div className="timeline-text">
                <div className="timeline-date">2024 - 2025</div>
                <h2>Frontend Developer</h2>
                <h4>Startup Projects</h4>
                <p>
                  Collaborated with colleagues to build some startup projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Experience End */}
    </>
  )
}

export default Experience;