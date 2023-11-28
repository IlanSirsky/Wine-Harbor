import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={'lg'} className="bg-body-tertiary mb-3 custom-navbar">
          <Container fluid>
            <Navbar.Brand href="/">Wine Harbor</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className="nav-link" aria-current="page">Home</Nav.Link>
                  <Nav.Link href="/wines" className="nav-link">Wines</Nav.Link>
                  <Nav.Link href="/about" className="nav-link">About</Nav.Link>
                  <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
