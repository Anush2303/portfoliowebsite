import React from "react";
import '../css/Project.css'
import 'animate.css';

function Project(){
    return (
    <div className="proj">
     <div className="projheader animate__animated animate__zoomIn">
         <p>MY PROJECTS</p>
         <p><i>HAVE A LOOK AT SOME OF MY MAJOR PROJECTS!</i></p>
         <h4><i>Enjoyed and learnt a lot while developing these projects!</i></h4>
     </div>
     <ul class="work-portfolio clearfix animate__animated animate__zoomIn">
        <li>
          <figure class="portfolio-image">
          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
             <div className="front">
             <a href="/streamroom">
            <img src="https://3.bp.blogspot.com/-8lgbcSUy1NQ/W-Vbz00Y_wI/AAAAAAAAAAo/hyRMyr09xa4CZv3gF_YwMB05zeWmmKoLACK4BGAYYCw/s1600/dxfnxfgnjxfggm.gif" alt="STREAMROOM"/>
            <p class="work-para">Online Streaming</p>
            </a>
            </div>
            <div className="back">
              <h3>ONLINE VIDEO/MOVIE STREAMING</h3>
              <i class="fas fa-video fa-4x" style={{color:"white"}}></i>
            </div>
            </div>
            </div>
          </figure>
        </li>
        <li>
          <figure class="portfolio-image">
          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
             <div className="front">
            <a href="/keeper">
            <img src="https://assets.materialup.com/uploads/0f57dffd-6898-4a77-bbf4-897a11e367cc/keep.gif" alt="random" />
            <p class="work-para">Clone of Google Keeper App</p>
            </a>
            </div>
            <div className="back">
              <h3>CLONE OF GOOGLE KEEPER'S APP</h3>
              <i class="fas fa-pager fa-4x" style={{color:"white"}}></i>
            </div>
            </div>
            </div>
          </figure>
        </li>
        <li>
          <figure class="portfolio-image">
          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
             <div className="front">
          <a href="/blog">
          <img src="https://payu.in/blog/wp-content/uploads/2019/01/Blog-Cover.gif" alt="blogapp" />
          <p class="work-para">Blog-App</p>
          </a>
          </div>
          <div className="back">
              <h3>LIVE JOURNAL</h3>
              <i class="fab fa-blogger-b fa-4x" style={{color:"white"}}></i>
            </div>
            </div>
            </div>
          </figure>
        </li>
        <li>
          <figure class="portfolio-image">
          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
             <div className="front">
            <a href="/github">
            <img src="https://rapidapi.com/blog/wp-content/uploads/2017/01/octocat.gif" alt="github" />
            <p class="work-para">Github Browser</p>
            </a>
            </div>
            <div className="back">
              <h3>GITHUB-BROWSER</h3>
              <i class="fab fa-github fa-4x" style={{color:"white"}}></i>
            </div>
            </div>
            </div>
          </figure>
        </li>
        <li>
          <figure class="portfolio-image">
          <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
             <div className="front">
            <a target="_blank" href="https://angry-wright-55ba7d.netlify.app/" rel="noreferrer">
            <img src="https://media.gq.com/photos/61a509cfd6a3669ab55430ae/master/pass/Aesop%20Sale%20Happening.jpg" alt="github" />
            <p class="work-para">Clone of a website</p>
            </a>
            </div>
            <div className="back">
              <h3>CLONE OF A WEBSITE</h3>
              <h4 style={{color:'white'}}>aesop.com</h4>
              <h4 style={{color:'white'}}>Built using ReactJS</h4>
              <i class="fas fa-clone fa-4x" style={{color:"white"}}></i>
            </div>
            </div>
            </div>
          </figure>
        </li>
      </ul>
   </div>
  );
}
export default Project;
