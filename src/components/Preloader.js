import React, {useState} from 'react';
import '../css/Preloader.css';

const Preloader = () => {
    function handlechange(){
        setFlag(true);
    }
    const [flag,setFlag]=useState(false);
    const ans=flag;
    if(ans===true)
    {
    return (
        <div>
        <div>
           <button onClick={handlechange}>
           <img src="https://gameofcodes.herokuapp.com/annual-report/images/undraw_Astronaut_re_8c33.svg" alt="img" className='fimg'/> 
           </button>
        </div>
        <div className='glow'>
           <p className='glowanim animate__animated animate__zoomIn'>WELCOME TO MY PORTFOLIO WEBSITE!</p>
        </div>
        </div>
    )
    }
    else{
        return(
            <div>
            <div>
           <button onClick={handlechange}>
           <img src="https://gameofcodes.herokuapp.com/annual-report/images/undraw_Astronaut_re_8c33.svg" alt="img" className='fimg'/> 
           </button>
           </div>
            <div className='glow'>
           </div>
           </div>
        );
    }
}
export default Preloader;
