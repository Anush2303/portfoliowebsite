import React from "react";
import Item from './Item';
import '../css/Links.css';

function Links(){
    return(
        <div className="linkhead">
        <div className="spotlight"></div>
         <div className="content">
          <Item title="HOME" link="/"/>
          <Item title="KNOW ME" link="about"/>
          <Item title="COMPETITIVE STATS" link="comp"/>
          <Item title="PROJECTS" link="proj"/>
          <Item title="GET IN TOUCH!" link="cont"/>
          </div>
          </div>
    );
}

export default Links;