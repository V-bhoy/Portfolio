import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";
import p1 from "../../Images/p1.png"
import p2 from "../../Images/p2.png"
import p3 from "../../Images/p3.png"

const Project = () => {
     useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='container' style={{backgroundColor:"transparent"}}>
         <div className="title">
             <p>Recent Project</p>
         </div>
         <div className="row p-row" style={{margin:"3rem", paddingTop:"30px"}}>
             <div className="col-lg-4" data-aos="fade-up" data-aos-duration="2000">
                  <div>
                      <img className='p-ss' src={p3} alt="lyst-clone" style={{borderRadius:"0%", width:"auto"}}/>
                 </div>
                  <div className='info'>
                      <h3>Lyst Clone</h3>
                      <p>This is a react-redux based project clone of an e-commerce website which is an effort towards understanding of react and redux concepts.</p>
                      <p><i></i><strong>Tech Stack:</strong>&nbsp; React with Redux</p>
                      <div style={{display:"flex"}}>
                         <a href="https://github.com/V-bhoy/Lyst-clone" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light p-btn'>Github</a>
                          <a href="https://lyst-clone.netlify.app" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light p-btn'>Link</a>
                      </div>
                      
                  </div>
                 
             </div>
             <div className="col-lg-4" data-aos="fade-up" data-aos-duration="2000">
                   <div>
                        <img className='p-ss' src={p2} alt="faasos-clone" style={{borderRadius:"0%", width:"auto"}}/>
                 </div>
                 <div className='info'>
                      <h3>Faasos Clone</h3>
                      <p>This is a clone of an online food delivery website with the database created for the meals available for a particular location</p>
                      <p><i></i><strong>Tech Stack:</strong>&nbsp; Pure HTML, CSS, JS</p>
                      <div style={{display:"flex"}}>
                         <a href="https://github.com/V-bhoy/Fasoos-Clone" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light p-btn'>Github</a>
                          <a href="https://faasos-clone-d98532.netlify.app/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light p-btn'>Link</a>
                      </div>
                 </div>
                 
             </div>
             <div className="col-lg-4" data-aos="fade-up" data-aos-duration="2000">
                 <div>
                   <img className='p-ss' src={p1} alt="overstock-clone" style={{borderRadius:"0%", width:"auto"}}/>
                 </div>
                 <div className='info'>
                      <h3>OverStock Clone</h3>
                      <p>This project is a beginner project where the website is cloned using the basic core concepts of html, css and js.</p>
                      <p><i></i><strong>Tech Stack:</strong>&nbsp; Pure HTML, CSS, JS</p>
                      <div style={{display:"flex"}}>
                         <a href="https://github.com/amananshul/Over_Stock_project" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light p-btn'>Github</a>
                          <a href="https://profound-praline-6eee04.netlify.app/" target="_blank" rel="noopener noreferrer" className='btn btn-outline-light p-btn'>Link</a>
                      </div>
                 </div>
                 
             </div>
         </div>
    </div>
  )
}

export default Project