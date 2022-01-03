import React from "react";
import '../css/Homepage.css';
import Navbar from './Navbar';
import Preloader from "./Preloader";
import 'animate.css';
function Homepage(){
return(
<div className="header">
  <div className="head-1"></div>
  <div className="head-2"></div>
  <div className="head-3"></div>
  <div className="head-4"></div>
  <Navbar />
  <Preloader/>
    <div className="box head animate__animated animate__fadeIn">
        <h2>ANUSH GUPTA</h2>
          <div className="row knowmebtn animate__animated animate__zoomIn" style={{textAlign:'center'}}>
            <div className="wrap" style={{textAlign:'center'}}>
              <form action="/about">
              <button className="glow-on-hover" style={{color:'white'}}>KNOW ME {<i class="fas fa-code"></i>}</button>
              </form>
            </div>
          </div>
        </div>
    </div>
);
}
export default Homepage;