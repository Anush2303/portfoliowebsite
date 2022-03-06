import React from "react";
import '../css/Homepage.css';
import Navbar from './Navbar';
import self from "../images/self.jpeg";

function Homepage(){
return(
<div className="header">
  <div className="head-1">
   <Navbar />
   <div className="boxc row">
     <div className="col-12 col-md-12 col-lg-8">
            <p className="sub">HELLO,WORLD.</p>
            <p className="banner">I'M ANUSH GUPTA</p>
            <h2 style={{color:"yellow",marginLeft:"5%",fontWeight:"bold"}}>ANUSH GUPTA</h2>     
            <p className="banner_">#while(!(<span style={{color:"yellow"}}>succeed</span>=try()))</p>
             <form action="/about">
             <button className="animate__animated animate__zoomIn glow-on-hover block" style={{color:'white',marginLeft:"5%"}}>KNOW ME MORE{<i class="fas fa-code"></i>}</button>    
             </form>
     </div>
     <div className="col-12 col-md-12 col-lg-4">
            <img className="imgggg" src={self} alt="img"/>
     </div>
   </div>
  </div>
</div>
);
}
export default Homepage;
