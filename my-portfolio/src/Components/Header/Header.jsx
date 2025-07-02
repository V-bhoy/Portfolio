import React from 'react';
import Icofont from 'react-icofont';
import "./header.css";
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';


const Header = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className='wrapper' id="home">
         <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 520,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "rgba(250,250,250,0.2)",
          },
          links: {
            color: "#ffffff1c",
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 45,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  
        <a href="#" style={{textDecoration:"none"}}><h1>Vaishali Bhoyar</h1></a>
        <h2>I'm a passionate <span>Web Developer</span> from India </h2>
        <div className='social-links'>
            <a href="https://twitter.com/V_Bhoy13" className="twitter" target="_blank" rel="noopener noreferrer"><Icofont icon="twitter"></Icofont></a>
            <a href="https://www.linkedin.com/in/vaishali-b-b65509200" className="linkedin" target="_blank" rel="noopener noreferrer"><Icofont icon="linkedin"></Icofont></a>
            <a href="https://github.com/V-bhoy" className="github" target="_blank" rel="noopener noreferrer"><Icofont icon="github"></Icofont></a>
            <a href="https://www.facebook.com/vaishali.bhoyar.3551" className="facebook" target="_blank" rel="noopener noreferrer"><Icofont icon="facebook"></Icofont></a>
            <a href="https://www.instagram.com/rach_1303_" className="instagram" target="_blank" rel="noopener noreferrer"><Icofont icon="instagram"></Icofont></a>
        </div>
      
      
    </div>
  )
}

export default Header