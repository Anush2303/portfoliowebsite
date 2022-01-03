import React,{useState} from 'react';
import '../css/Streamroom.css'
import Stream from '../images/stream.png'
import S1 from '../images/p3.jpg'
import S2 from '../images/S2.jpg'
import S3 from '../images/S3.jpg'
import S4 from '../images/S4.jpg'
import S5 from '../images/S5.jpg'
import S6 from '../images/S6.jpg'
function Streamroom(){
    const [bgColour, setBgColour] = useState("white")
    const [fcolor,setfcolor]=useState("rgb(8, 92, 2)")
    const [hcolor,sethcolor]=useState("rgb(8, 92, 2)")
    const _styles={
        background:`${bgColour}`,
        color:`${fcolor}`
    }
    const style_={
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
  <div className="stream">
     <div className="rowimg" style={{paddingBottom:'7px'}}>
        <img src={Stream} alt="img" className="streamlogo"/>
      <a href="/link"><i class="linkbtn fas fa-code-branch fa-4x"></i></a>
  </div>
  <div class="rowimg animate__animated animate__zoomIn" style={{paddingTop:'20px'}}>
   <div className="columnimg">
    <img src={S1} alt="img" />
    <img src={S2} alt="img" />
    <img src={S5} alt="img" />
  </div>
  <div className="columnimg">
    <img src={S3} alt="img" />
    <img src={S4} alt="img" />
    <img src={S6} alt="img" />
  </div>
  <div className="_column" style={{marginLeft:'15px',marginRight:'5px'}}>
  <div class="card animate__animated animate__zoomIn" onMouseEnter={handlechange} onMouseLeave={change} style={_styles}>
              <div class="card-body">
                <h3 class="card-title desc"style={{paddingBottom:'2px'}}>It is an online movie/video streaming platform where you can watch movies/videos
                 with your family and friends at your own pace and comfort !</h3>
                <div class="card-text">
                <h3 class="feathead" style={style_}> FEATURES</h3>
                <h5>LOGIN SIGNUP AUTHENTICATION <i class="feathead fas fa-user-plus icons" style={style_}></i></h5>
                <h5>GO CHAT <i class="feathead far fa-comments icons" style={style_}></i></h5>
                <h5>PERSONAL CONTROLS <i class="feathead fas fa-play-circle icons" style={style_}></i></h5>
                <h5>REMOTE ACCESS <i class="feathead fas fa-video icons" style={style_}></i></h5>
                <h3 class="feathead" style={style_}>TECH USED</h3>
                <h5>HTML | CSS | JAVASCRIPT | NODE | MONGODB | BOOTSTRAP</h5>
                <h3 class="projectitle feathead" style={style_}>PROJECT LINK  <a class="btn btn-outline-light btn-floating " href="https://github.com/Anush2303/WebD_Streamroom" role="button" style={{borderRadius:'100%'}}><i
                class="fab fa-github fa-3x"></i></a></h3>
                <a href="https://stream-room.herokuapp.com/" class="">HEAD OVER TO</a>
            </div>
        </div>
    </div>
  </div>
</div>
</div>
);
}
export default Streamroom;