import React, { useEffect } from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../../Images/profile.png";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <div className="title">
        <p>About</p>
      </div>
      <div className="row">
        <div className="col-lg-4  row-first" data-aos="fade-right">
          <img className="img-fluid" src={profile} alt="profile" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Full Stack Web Developer</h3>
          <p className="font-italic">
            I’m a web developer with a background in Electronics Engineering,
            having graduated from College of Engineering Pune. After my
            graduation, I honed my skills in the MERN stack at Masai School and
            went on to gain 2.1 years of experience at Apnaklub, a fast-growing
            B2B startup.
            <br />
            <br />
            My core strength lies in designing clean, responsive UIs and
            building robust full-stack applications by applying modern React
            concepts alongside solid backend integrations.
            <br />
            <br />
            Lately, I’ve been expanding my skill set by learning Java &
            frameworks through dedicated courses to stay up-to-date and ready to
            tackle new challenges. I’m now actively looking for opportunities to
            build and scale impactful products.
            <br />
            <br />
            Beyond work, I’m passionate about dance, art, music, and spending
            time with animals and nature — they keep me inspired and creative
            every day.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Birthday:</strong> 13 March 2000
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://vaishali-bhoyar.netlify.app"
                    className="webLink"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <i class="icofont-rounded-right"></i> <strong>City:</strong>{" "}
                  Pune, Maharashtra
                </li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li>
                  <i class="icofont-rounded-right"></i>{" "}
                  <strong>Experience:</strong> 2.1 yrs
                </li>
                <li>
                  <i class="icofont-rounded-right"></i> <strong>Degree:</strong>{" "}
                  BTech (E&Tc)
                </li>
                <li>
                  <i class="icofont-rounded-right"></i> <strong>Email:</strong>{" "}
                  vaishubhoyar004@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <p className="para-end">
            Looking forward to work with the organizations in handling real time
            projects, gain more knowledge and uplift my abilities & skills.
            <br />
            <br />
            <a
              href="https://drive.google.com/file/d/15ljUdlgLF5X9H2_NY_ghHvzXBlJzepXL/view?usp=drive_link"
              className="a-btn btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold" }}
            >
              RESUME
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
