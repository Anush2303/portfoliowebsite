import React, {useState} from 'react';
import '../css/Preloader.css';
import self from '../images/self.jpeg';

const Preloader = () => {
    function handlechange(){
        setFlag(true);
    }
    const [flag,setFlag]=useState(true);
    const ans=flag;
    if(ans===true)
    {
    return (
        <div>
        <div>
           <button onClick={handlechange}>
           <img src={self} alt="img" className='fimg'/> 
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
           <img src="https://vani.nic.in/meghBot/images/vani-gif.gif" alt="img" className='fimg'/> 
           </button>
           </div>
            <div className='glow'>
           </div>
           </div>
        );
    }
}
export default Preloader;
