import React from "react";
import '../css/Navbar.css';
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return(
        <Nav fill className="justify-content-center navbar" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/" className="mob nav-links button2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            ANUSH GUPTA{<i class="fas fa-code"></i>}
          </Nav.Link>
        </Nav.Item>         
        <Nav.Item>
          <Nav.Link href="/" className="hid nav-links button2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            HOME
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="hid nav-links button2" href="/about">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            KNOWME
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hid nav-links button2" href="/comp">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            COMPETITIVE STATS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hid nav-links button2" href="/proj">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            PROJECTS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="hid hid_ nav-links button2" href="/cont">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            GET IN TOUCH
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
}
export default Navbar;
