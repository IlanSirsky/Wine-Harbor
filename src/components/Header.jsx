import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Navbar.Brand href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <span className="fs-4">Wine Harbor</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav nav-pills">
            <Nav.Item>
              <Nav.Link href="/" className="nav-link" aria-current="page">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/shop" className="nav-link">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/details" className="nav-link">Details</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about" className="nav-link">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}

export default Header;
