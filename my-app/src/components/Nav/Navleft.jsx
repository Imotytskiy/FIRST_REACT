import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "./Navleft.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navleft({ onEventKeyChange }) {
  const [activeKey, setActiveKey] = useState("/home");

  const handleNavClick = (eventKey) => {
    setActiveKey(eventKey);
    onEventKeyChange(eventKey);
  };

  return (
    <Nav variant="pills" defaultActiveKey={activeKey} className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="0" onClick={() => handleNavClick("0")}>
        KYIV
      </Nav.Link>
      <Nav.Link eventKey="1" onClick={() => handleNavClick("1")}>
        BERLIN
      </Nav.Link>
      <Nav.Link eventKey="2" onClick={() => handleNavClick("2")}>
        PARIS
      </Nav.Link>
      <Nav.Link eventKey="3" onClick={() => handleNavClick("3")}>
        MADRID
      </Nav.Link>
      <Nav.Link eventKey="4" onClick={() => handleNavClick("4")}>
        ROME
      </Nav.Link>
      <Nav.Link eventKey="5" onClick={() => handleNavClick("5")}>
        WARSAWA
      </Nav.Link>
    </Nav>
  );
}

export default Navleft;
