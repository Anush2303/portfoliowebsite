import React , {useState} from 'react';
import '../css/Keeper.css';
import { Carousel } from 'react-bootstrap';
import keeper1 from '../images/keeper1.jpg';
import keeper2 from '../images/keeper2.jpg';
import keeper3 from '../images/keeper3.jpg';
function Keeper(){
  const [bgColour, setBgColour] = useState("white")
  const [fcolor,setfcolor]=useState("rgb(8, 92, 2)")
  const [hcolor,sethcolor]=useState("rgb(8, 92, 2)")
  const _styles={
      background:`${bgColour}`,
      color:`${fcolor}`
}   
const styles={
     color:`${hcolor}`
}
function handlechange(){
  setBgColour("black")
  setfcolor("yellow")
  sethcolor("white")
}
function change(){
  setBgColour("white")
  setfcolor("rgb(8, 92, 2)")
  sethcolor("rgb(8, 92, 2)")
}
    return (
        <div className="keeper">
          <div className='row'>
           <div className="rowimg" style={{paddingBottom:'7px'}}>
               <p className='titleanimate_ animate__animated animate__zoomIn khead'><i class="page fas fa-pager"></i>Google Keeper App</p>
              <a href="/link"><i class="linkbtn fas fa-code-branch fa-4x"></i></a>
            </div>
            <div class="col-12 col-lg-6 cardbody card animate__animated animate__zoomIn" onMouseEnter={handlechange} onMouseLeave={change} style={_styles}>
              <div class="card-body">
                <h3 class="card-title desc"style={{paddingBottom:'2px'}}>This is a clone of Google Keeper's App built using ReactJS. This app helps to keep a record and maintain personal notes and also delete them when not of use!</h3>
                <div class="card-text">
                <h3 class="" style={styles}>FEATURES</h3>
                <h5>WRITE AND STORE NOTES<i class="fas fa-user-plus icons" style={styles}></i></h5>
                <h5>DELETE SPECIFIC NOTES WHEN NOT OF USE.<i class="far fa-comments icons" style={styles}></i></h5>
                <h3 class="" style={styles}>TECH USED</h3>
                <h5>REACTJS</h5>
                <h3 class="" style={styles}>PROJECT LINK  <a class="btn-outline-light btn-floating" href="https://github.com/Anush2303/BLOG_APP" role="button" style={{borderRadius:'100%'}}><i
                class="fab fa-github fa-2x"></i></a></h3>
            </div>
        </div>
        </div>
        </div>
         <Carousel variant="dark" style={{marginTop:'15px'}}>
            <Carousel.Item>
              <img
              className="d-block w-75"
              src={keeper1}
              alt="First slide"
              />
              </Carousel.Item>
              <Carousel.Item>
                <img
                className="d-block w-75"
                src={keeper2}
                alt="Second slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="d-block w-75"
                src={keeper3}
                alt="Third slide"
                />
               </Carousel.Item>
           </Carousel>
    </div>
  );
}

export default Keeper;