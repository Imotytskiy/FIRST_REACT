import Nav from "react-bootstrap/Nav";
import "./Navleft.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navleft() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="0">KYIV</Nav.Link>
      <Nav.Link eventKey="1">BERLIN</Nav.Link>
      <Nav.Link eventKey="2">PARIS</Nav.Link>
      <Nav.Link eventKey="3">MADRID</Nav.Link>
      <Nav.Link eventKey="4">ROME</Nav.Link>
      <Nav.Link eventKey="5">WARSAWA</Nav.Link>
    </Nav>
  );
}

export default Navleft;
