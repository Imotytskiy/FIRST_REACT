import Nav from "react-bootstrap/Nav";
import "./Navleft.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navleft() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">KYIV</Nav.Link>
      <Nav.Link eventKey="link-2">BERLIN</Nav.Link>
      <Nav.Link eventKey="link-3">PARIS</Nav.Link>
      <Nav.Link eventKey="link-4">MADRID</Nav.Link>
      <Nav.Link eventKey="link-5">ROME</Nav.Link>
      <Nav.Link eventKey="link-6">WARSAWA</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default Navleft;
