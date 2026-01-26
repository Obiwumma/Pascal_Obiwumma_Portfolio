import React from "react";
import SkillBar from "./SkillBar.js";

const About = () => {

  return(
    <>
      {/* About Start */}
      <div className="about wow fadeInUp" data-aos="fade-up" data-wow-delay="0.1s" id="about">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/assets/aboutme.png" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-header text-left">
                  <p>Learn About Me</p>
                  <h2>Pascal Obiwumma – Building the Web, One Pixel at a Time</h2>
                </div>
                <div className="about-text">
                  <h1>Hello!</h1>
                  <p>
                    I'm Pascal Obiwumma, I'm a front-end developer based in FCT, Nigeria. My interest in web development began back in 2020 when I decided to build a website for a school project and in that way, learned a lot about HTML and CSS.
                  </p>
                  <p>
                    What began as curiosity has grown into a passion.
                    I've built everything from polished  web app clones to advanced platforms crafting digital experiences for startups, businesses, and individual clients alike.  My passion? Creating cutting-edge, interactive websites that push boundaries and drive progress both for Nigeria's tech ecosystem and the world.
                  </p>
                </div>
                <div className="skills">
                  <SkillBar name="HTML" level={90} color="#1DB8D0" />
                  <SkillBar name="CSS" level={85} color="#0EA5E9" />
                  <SkillBar name="JavaScript" level={80} color="#3B82F6" />
                  <SkillBar name="React" level={80} color="#3A68D2" />
                  <SkillBar name="Tailwind" level={70} color="#3A68D2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  )
}

export default About;