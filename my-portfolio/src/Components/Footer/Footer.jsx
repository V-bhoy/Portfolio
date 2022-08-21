import React from 'react'
import Icofont from 'react-icofont';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='.footer'>
        <div style={{backgroundColor:"rgba(0,0,0,0.7)",width: "100%", height:"400px"}}>
        <div className="f-content">
           <span style={{fontSize:"1.2rem",color:"rgba(255,255,255,0.5)",fontWeight:"bold"}}>vaishubhoyar004@gmail.com</span>
            <div className="f-icons">
                <a href="https://twitter.com/V_Bhoy13" target="_blank" rel="noopener noreferrer" className="twitter"><Icofont icon="twitter"></Icofont></a>
                <a href="https://www.facebook.com/vaishali.bhoyar.3551" target="_blank" rel="noopener noreferrer" className="facebook"><Icofont icon="facebook"></Icofont></a>
                <a href="https://www.instagram.com/rach_1303_" target="_blank" rel="noopener noreferrer" className="instagram"><Icofont icon="instagram"></Icofont></a>
                <a href="https://www.linkedin.com/in/vaishali-b-b65509200" target="_blank" rel="noopener noreferrer" className="linkedin"><Icofont icon="linkedin"></Icofont></a>
                <a href="https://github.com/V-bhoy" target="_blank" rel="noopener noreferrer" className="github"><Icofont icon="github"></Icofont></a>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer