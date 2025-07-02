import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { List } from "react-bootstrap-icons";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top mobileNav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            Vaishali
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <List />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1Upl1z_DttmjoBD1CpufwJVPBn5KKtAXD/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
