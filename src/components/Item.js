import React from "react";
import '../css/Item.css';
import 'animate.css';

function Item(props){
    return(
        <div className="title titleanimate animate__animated animate__zoomIn">
        <a className="" href={props.link}>{props.title}</a>
        </div>
    )
}
export default Item;