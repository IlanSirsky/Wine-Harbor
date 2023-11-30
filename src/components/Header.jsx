import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={'lg'} className="bg-custom mb-0 custom-navbar">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-center align-items-center flex-grow-1 pe-3">
                  <Nav.Link href="/" className="nav-link spaced-link" aria-current="page">Home</Nav.Link>
                  <Nav.Link href="/wines" className="nav-link spaced-link">Wines</Nav.Link>
                  <Navbar.Brand href="/" className="spaced-brand">Wine Harbor</Navbar.Brand>
                  <NavDropdown title="About" id="about-dropdown">
                    <NavDropdown.Item href="/about/winery">Winery</NavDropdown.Item>
                    <NavDropdown.Item href="/about/barrels">Barrels</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact" className="nav-link spaced-link">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
