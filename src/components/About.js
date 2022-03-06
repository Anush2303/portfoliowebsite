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
    setBgColour("white")
    setfcolor("darkblue")
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
                <p className="card-title">HEY CODERS!</p>
                <p>I'M ANUSH GUPTA</p>
                <div class="card-text">
                  <p>A COE Major Undergrad</p>
                  <p>I am well versed in data structures and algorithm in C++!</p>
                  <p>I am a MERN stack Web developer!</p>
                  <p>In short, I am a coding enthusiast!</p>
                  <p>always eager to explore and learn something new :)</p>
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
         <form target="_blank" action="https://pdfhost.io/v/zPb1Gn31V_ANUSHGUPTA_CV_1" style={{textAlign:"center"}}>
              <button target="_blank" className="glow-on-hover block" style={{color:'white',marginTop:'45px',textAlign:"center"}}>CHECKOUT RESUME!</button>
            </form>
        </div>
        </div>
       </div>
    );
}
export default About;
