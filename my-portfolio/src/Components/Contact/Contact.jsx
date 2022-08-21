import React,{ useEffect, useState, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const form= useRef();
    const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_tqm5man",
          "template_3o60l2e",
          form.current,
          "JN3T1bW1x5go7CQgz"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <div className='container'>
        <div className="title">
            <p>Contact</p>
        </div>
        <div className="row">
            <div className="col-lg-4" data-aos="fade-right" data-aos-duration="1500">
                <div className="c-left" >
                   <p>Get in Touch</p>
                   <p>Feel Free to Contact Me.</p>
                </div>
               
            </div>
            <div className="col-lg-8 form">
              <form ref={form} onSubmit={sendEmail}>
                 <input type="text" name="user_name" className='user' placeholder='Name' />
                 <input type="email" name="user_email" className='user' placeholder='Email' />
                 <textarea  name="message" className='user' placeholder='Message' />
                 <input type="submit" value="Send"  className='btn btn-outline-light f-btn' />
                 <span style={{fontSize:"1rem", color:"white"}}>{done && "Thanks for Contacting me!"}</span>
               </form>
            </div>
        </div>
    </div>
  )
}

export default Contact