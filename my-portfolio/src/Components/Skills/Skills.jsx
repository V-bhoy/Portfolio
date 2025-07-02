import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skills.css";
import html from '../../Images/html5.webp'
import css from '../../Images/css3.webp'
import js from '../../Images/js.webp'
import react from '../../Images/react.png'
import redux from '../../Images/redux1.jpg'
import ui from '../../Images/ui.png'
import boot from '../../Images/boot1.png'
import express from '../../Images/express.png'
import node from '../../Images/node.jpg'
import mongo from '../../Images/mongodb.jpg'


const Skills = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="container">
      <div className="title">
        <p>Skills</p>
      </div>
      <div className="row" style={{ padding: "1rem" }}>
        <div
          className="col-lg-4 row-first"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p>Its incredible when skills and passion come together!</p>
        </div>
        <div
          className="col-lg-8 pt-4 pt-lg-0 content"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="row">
            <div className="col-lg-6">
              <h3 style={{ marginTop: "5px", color: "#18d26e" }}>
                Technical Skills
              </h3>
              {/* <div>
                           <img className="logo" src={html} alt="html5"/>
                           <img className="logo" src={css} alt="css3"/>
                           <img className="logo" src={js} style={{borderRadius:"50%", height:"70px", width:"70px"}} alt="js"/>
                       </div>
                       <div>
                           <img className="logo" src={react} style={{borderRadius:"50%", height:"70px", width:"70px"}} alt="react"/>
                           <img className="logo" src={redux} style={{borderRadius:"50%", height:"70px", width:"70px"}} alt="redux"/>
                           <img className="logo" src={boot} style={{borderRadius:"50%", height:"70px", width:"70px"}} alt="boot"/>
                           <img className="logo" src={ui} style={{borderRadius:"50%", height:"70px", width:"70px"}} alt="ui"/>
                       </div>
                       <div>
                           <img className="logo" src={node} style={{borderRadius:"50%", height:"70px", width:"70px"}} alt="nodejs"/>
                           <img className="logo" src={express} style={{borderRadius:"50%", height:"70px", width:"70px"}} alt="express"/>
                           <img className="logo" src={mongo} style={{borderRadius:"50%", height:"70px", width:"70px"}} alt="mongodb"/>
                       </div> */}
              <div>
                <ul>
                  <li><i className="icofont-rounded-right"></i>HTML, CSS, JS</li>
                  <li><i className="icofont-rounded-right"></i>React JS</li>
                  <li> <i className="icofont-rounded-right"></i>Redux, Redux Toolkit, Zustand</li>
                  <li><i className="icofont-rounded-right"></i>Tailwind, Material UI, Mantine </li>
                  <li> <i className="icofont-rounded-right"></i>Node JS, Express JS</li>
                  <li> <i className="icofont-rounded-right"></i>Java</li>
                  <li><i className="icofont-rounded-right"></i>Spring, SpringBoot</li>
                  <li> <i className="icofont-rounded-right"></i>My SQL, Postgres</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 style={{ margin: "10px 0", color: "#18d26e" }}>
                Soft Skills
              </h3>
              <div>
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>Interpersonal
                    Skills
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>Fluent English
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>Determined
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>Collaborative Team
                    Work
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>Perfection
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>Creativity
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>Adaptability
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>Work Ethic
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills