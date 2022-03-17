import React,{useState} from 'react';
import '../css/Blog.css'
import B1 from '../images/B1.jpg'
import B2 from '../images/B2.jpg'
import B3 from '../images/B3.jpg'
import B4 from '../images/B4.jpg'
function Blog(){
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
  return(
        <div className="blog">
           <div className="rowimg" style={{paddingBottom:'7px'}}>
              <p className='titleanimate_ animate__animated animate__zoomIn khead'><i class="page fab fa-blogger-b"></i>Live Journal</p>
              <a href="/link"><i class="linkbtn fas fa-code-branch fa-4x"></i></a>
            </div>
           <div className="rowimgb animate__animated animate__zoomIn">
             <div className="columnimgb">
                 <img src={B1} alt="img" />
                 <img src={B2} alt="img" />
             </div>
             <div className="columnimgb">
                 <img src={B3} alt="img" />
                 <img src={B4} alt="img"/>
             </div>
            <div className="__column" style={{marginLeft:'15px',marginRight:'10px'}}>
            <div class="card animate__animated animate__zoomIn" onMouseEnter={handlechange} onMouseLeave={change} style={_styles}>
              <div class="card-body">
                <h3 class="card-title desc"style={{paddingBottom:'2px'}}>This is a platform where you can read latest news that is catching attention around the globe.Also you can post your views and blogs so that it basically forms a community where people can come, read the latest news and express their views on that subject or any other personal blogs!</h3>
                <div class="card-text">
                <h3 class="" style={styles}>FEATURES</h3>
                <h5>READ LATEST NEWS AROUND THE GLOBE<i class="fa-solid fa-globe" style={styles}></i></h5>
                <h5>COMMENT AND POST ON THE NEWS<i class="far fa-comments icons" style={styles}></i></h5>
                <h5>COMPOSE AND POST PERSONAL BLOGS<i class="fas fa-user-plus icons" style={styles}></i></h5>
                <h5>VIEW OTHER INTERESTING BLOGS <i class="far fa-comments icons" style={styles}></i></h5>
                <h3 class="" style={styles}>TECH USED</h3>
                <h5>HTML | CSS | NODE | MONGODB | BOOTSTRAP</h5>
                <h3 class="" style={styles}>PROJECT LINK  <a class="btn-outline-light btn-floating" href="https://github.com/Anush2303/live_journal" role="button" style={{borderRadius:'100%'}}><i
                class="fab fa-github fa-2x"></i></a></h3>
            </div>
        </div>
    </div>
  </div>
 </div>
 </div>
);
}
export default Blog;
