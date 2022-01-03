import React from "react";
import '../css/Contact.css';

function Contact(){
    return (
      <div className="cont">
        <div className="rowimg" style={{paddingBottom:'7px'}}>
           <p className='titleanimate_ animate__animated animate__zoomIn khead__'><i class="page fas fa-stopwatch"></i>GET IN TOUCH!</p>
           <a href="/link"><i class="linkbtn_ linkbtn fas fa-code-branch fa-4x"></i></a>
         </div>
        <div className="row">
          <div className="col-lg-6 animate__animated animate__zoomIn">
              <img src="https://acegif.com/wp-content/gifs/handshake-43.gif" className="contimg" alt="img"/>
          </div>
        <div class="col">
        <div class="contact-wrapper">
          <div className="row">
          <ul class="contact-list animate__animated animate__zoomIn">
            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Pitampura,Delhi</span></i></li>
            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:7292030414" title="Give me a call">7292030414</a></span></i></li>
            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:anushgupta2303@gmail.com" title="Send me an email">anushgupta2303@gmail.com</a></span></i></li>
          </ul>
          </div>
          </div>
          <div className="row">
          <ul class="social-media-list_ animate__animated animate__shakeX">
            <a href="https://github.com/Anush2303" target="_blank" rel="noreferrer"><li  class="contact-icon">
              <i class="fab fa-github fa-7x"  aria-hidden="true"></i></li>
            </a>
            <a href="https://www.linkedin.com/in/anush-gupta-288a99155/" target="_blank" rel="noreferrer"><li class="contact-icon">
              <i class="fab fa-linkedin fa-7x" aria-hidden="true"></i></li>
            </a>
            <a href="https://www.instagram.com/anush_g2303/" target="_blank" rel="noreferrer"><li class="contact-icon">
              <i class="fab fa-instagram fa-7x" aria-hidden="true"></i></li>
            </a>       
          </ul>
          </div>
          <div className="form">
          <h4 className="form"><i>All your critic reviews and ofcourse, some words of appreciation <i class="smile fas fa-smile-wink"></i>  are warmly welcomed and deeply appreciated!</i></h4>
          <form target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLSc7IVDN1Ryshv11OLkBrDAe8mnuBVC_wi1CjWnMKf_X-8xLCQ/viewform?usp=sf_link">
              <button target="_blank" className="glow-on-hover " style={{color:'white',textAlign:"center"}}>GET IN TOUCH!</button>
          </form>
          </div>
      </div>
      </div>
      </div>
    );
}
export default Contact;