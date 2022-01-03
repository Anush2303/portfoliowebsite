import React from "react";
import '../css/Competitive.css'
import C1 from '../images/C1.jpg'
import C2 from '../images/C2.jpg'
import C3 from '../images/C3.jpg'
import H1 from '../images/H1.jpg'
import H2 from '../images/H2.jpeg'
import H3 from '../images/H3.jpg'
import { Carousel } from 'react-bootstrap';

function Competitive(){
    return(
       <div className="comp">
         <div className="rowimg" style={{paddingBottom:'7px'}}>
           <p className='titleanimate_ animate__animated animate__zoomIn khead_'><i class="page fas fa-stopwatch"></i>COMPETITIVE STATISTICS</p>
           <a href="/link"><i class="linkbtn_ linkbtn fas fa-code-branch fa-4x"></i></a>
         </div>
         <div className="row1 animate__animated animate__zoomIn">
           <img src="https://cdn.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png" alt="img" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Codeforces_logo.svg/2560px-Codeforces_logo.svg.png" alt="img" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="img" />
          </div>
         <div className="_row1 animate__animated animate__zoomIn">
             <img id="cc" src={C1} alt="img"/>
             <img id="cf" src={C2} alt="img"/>
             <img id="leet" src={C3} alt="img"/>
         </div>
         <div className="projheader animate__animated animate__zoomIn" style={{marginTop:'20px',fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
         <p>SOME COMPETITIVE ACHIEVEMNTS!</p>
     </div>
     <Carousel variant="dark" style={{marginTop:'15px'}}>
            <Carousel.Item>
              <img
              className="d-block w-75"
              src={H1}
              alt="First slide"
              />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-75"
                src={H2}
                alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-75"
                src={H3}
                alt="Third slide"
                />
                </Carousel.Item>
           </Carousel>
  </div>
 )
}
export default Competitive;