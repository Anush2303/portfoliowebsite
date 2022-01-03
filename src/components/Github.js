import React , {useState}from 'react';
import '../css/Github.css';
import G1 from '../images/g1.jpg'
import G2 from '../images/g2.jpg'
import G3 from '../images/g3.jpg'
import G4 from '../images/g4.jpg'
function Github(){
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
        <div className="github">
        <div className="rowimg" style={{paddingBottom:'7px'}}>
           <p className='titleanimate_ animate__animated animate__zoomIn khead'><i class="page fab fa-github"></i>GitHub-Browser</p>
           <a href="/link"><i class="linkbtn fas fa-code-branch fa-4x"></i></a>
         </div>
        <div className="rowimgb animate__animated animate__zoomIn">
          <div className="columnimgb">
              <img src={G1} alt="img" />
              <img src={G2} alt="img" />
          </div>
          <div className="columnimgb">
              <img src={G3} alt="img" />
              <img src={G4} alt="img"/>
          </div>
         <div className="___column" style={{marginLeft:'15px',marginRight:'10px'}}>
         <div class="card animate__animated animate__zoomIn" onMouseEnter={handlechange} onMouseLeave={change} style={_styles}>
           <div class="card-body">
             <h3 class="card-title desc"style={{paddingBottom:'2px'}}>This project has used Github API. It will show all the repositories of the given Github username and show all the details of a particular repository.</h3>
             <div class="card-text">
             <h3 class="" style={styles}>FEATURES</h3>
             <h5>SHOW REPOSITORIES OF SPECIFIED GITHUB USERNAME <i class="fab fa-github" style={styles}></i></h5>
             <h5>VIEW ALL THE DETAILS OF A PARTICULAR REPOSITORY <i class="fas fa-code-branch" style={styles}></i></h5>
             <ul style={{listStyle:'none'}}>
                 <li>Name of repository</li>
                 <li>Number of fork count</li>
                 <li>Languages used to make project</li>
                 <li>Number of issues</li>
                 <li>Branches of repository</li>
                 <li>Commits made</li>
             </ul>
             <h3 class="" style={styles}>TECH USED</h3>
             <h4>REACTJS</h4>
             <h3 class="" style={styles}>PROJECT LINK  <a class="btn-outline-light btn-floating" href="https://github.com/Anush2303/apigithub" role="button" style={{borderRadius:'100%'}}><i
             class="fab fa-github fa-2x"></i></a></h3>
         </div>
     </div>
 </div>
</div>
</div>
</div>
);
}

export default Github;