import React,{useState} from "react";
import '../css/About.css';
import 'animate.css';

const About=()=>{
  const [bgColour, setBgColour] = useState("linear-gradient(to bottom right, #000066 36%, #000000 100%)")
    const [fcolor,setfcolor]=useState("white")
    const styles={
        background:`${bgColour}`,
        color:`${fcolor}`
    }   
  function handlechange(){
    setBgColour("black")
    setfcolor("yellow")
  }
  function change(){
    setBgColour("linear-gradient(to bottom right, #000066 36%, #000000 100%)")
    setfcolor("white")
  }
    return(
    <div className="about">
      <div className="row">
      <a href="/link"><i class="linkbtn fas fa-code-branch fa-4x"></i></a>
      </div>
       <div className="row container mx-auto">
           <div class="text col col-12 col-lg-6">
            <div class="card animate__animated animate__zoomIn" onMouseEnter={handlechange} onMouseLeave={change} style={styles}>
              <div class="card-body">
                <h3 className="card-title">HEY CODERS!</h3>
                <h3 class="card-title line-1 anim-typewriter">I'M ANUSH</h3>
                <div class="card-text">
                  <h3>I am well versed in data structures and algorithm in C++!</h3>
                  <h3>I am a MERN stack Web developer!</h3>
                  <h3>In short, I am a coding enthusiast!</h3>
                  <h3>always eager to explore and learn something new :)</h3>
                  <h6><i>That's all I could think of about myself:/)</i></h6>
            </div>
           </div>
          </div>
        </div>
        <div className="text col-12 col-lg-6">
          <div className="heading animate__animated animate__zoomIn">
           <p class="subhead">KNOW ME MORE !</p>
           </div>
           <ul class="social-media-list animate__animated animate__shakeX">
            <a href="https://github.com/Anush2303" target="_blank" rel="noreferrer"><li  class="contact-icon">
              <i class="fab fa-github fa-5x"  aria-hidden="true"></i></li>
            </a>
            <a href="https://www.linkedin.com/in/anush-gupta-288a99155/" target="_blank" rel="noreferrer"><li class="contact-icon">
              <i class="fab fa-linkedin fa-5x" aria-hidden="true"></i></li>
            </a>
            <a href="https://www.instagram.com/anush_g2303/" target="_blank" rel="noreferrer" ><li class="contact-icon">
              <i class="fab fa-instagram fa-5x" aria-hidden="true"></i></li>
            </a>       
          </ul>
            <form target="_blank" action="https://pdfhost.io/v/UzYQREuBi_anush_resume_">
              <button target="_blank" className="glow-on-hover" style={{color:'white',marginTop:'15px'}}>CHECKOUT RESUME!</button>
            </form>
        </div>
        </div>
       </div>
    );
}
export default About;
