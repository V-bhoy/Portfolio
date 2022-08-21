import React, { useEffect } from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../../Images/profile.jpeg";

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
            I am a web developer and an electronics engineer too. I have done my
            graduation from College of Engineering Pune and soon after that I
            got specialized in MERN stack at Masai School.
            <br />
            I have keen interest in designing the UI and implementing responsive
            components by deploying react concepts along with the backend
            technology.
            <br />
            Apart from that, I love to dance, be with pets and animals, draw and
            sketch, vibe with music and nature.
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
                  <a href="https://vaishali-bhoyar.netlify.app" className="webLink">Link</a>
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
                  <i class="icofont-rounded-right"></i> <strong>Age:</strong> 22
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
              href="https://drive.google.com/file/d/1TJCj9LS1xfUg3OC0XMZk65VMqzMnlvJ-/view?usp=sharing"
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
