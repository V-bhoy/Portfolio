import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";
import p2 from "../../Images/homepage.png"
import p3 from "../../Images/p3.png"

const Project = () => {
     useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="container" style={{ backgroundColor: "transparent" }}>
      <div className="title">
        <p>Recent Project</p>
      </div>
      <div className="row p-row" style={{ margin: "3rem", paddingTop: "30px" }}>
        <div className="col-lg-4" data-aos="fade-up" data-aos-duration="2000">
          <div>
            <img
              className="p-ss"
              src={p2}
              alt="faasos-clone"
              style={{ borderRadius: "0%", width: "auto" }}
            />
          </div>
          <div className="info">
            <h3>Fashion Ecom Website</h3>
            <p>
              This is an ecommerce website showcasing product & user features
              including authentication, add to cart, checkout, add review etc.
            </p>
            <p>
              <i></i>
              <strong>Tech Stack:</strong>&nbsp; Vite, React, Redux Toolkit,
              Axios
            </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/V-bhoy/ecommerce-web-app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light p-btn"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up" data-aos-duration="2000">
          <div>
            <img
              className="p-ss"
              src={p2}
              alt="faasos-clone"
              style={{ borderRadius: "0%", width: "auto" }}
            />
          </div>
          <div className="info">
            <h3>Ecommerce Backend</h3>
            <p>
              Backend System built for fashion ecom react app. Includes JWT authentication, payment integration and migrations for demo.
            </p>
            <p>
              <i></i>
              <strong>Tech Stack:</strong>&nbsp; NodeJS, Express, Knex, Postgres
            </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/V-bhoy/ecommerce-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light p-btn"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up" data-aos-duration="2000">
          <div>
            <img
              className="p-ss"
              src={p3}
              alt="lyst-clone"
              style={{ borderRadius: "0%", width: "auto" }}
            />
          </div>
          <div className="info">
            <h3>Lyst Clone</h3>
            <p>
              This is a react-redux based project clone of an e-commerce website
              which is an effort towards understanding of react and redux
              concepts.
            </p>
            <p>
              <i></i>
              <strong>Tech Stack:</strong>&nbsp; React with Redux
            </p>
            <div style={{ display: "flex" }}>
              <a
                href="https://github.com/V-bhoy/Lyst-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light p-btn"
              >
                Github
              </a>
              <a
                href="https://lyst-clone.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light p-btn"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project