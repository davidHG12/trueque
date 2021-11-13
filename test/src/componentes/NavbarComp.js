import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { FaRegHandshake } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">   
                <Container fluid>
                <Navbar.Brand href="#">
                <IconContext.Provider value={{ size:"2em" }}>
                    <FaRegHandshake/>
                </IconContext.Provider>
                    Trueque
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to={"/Inicio"}>Inicio</Nav.Link>
                    <Nav.Link href="#action2">Emprendimientos</Nav.Link>
                    <NavDropdown title="Utilidades" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Noticias</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Bolsa de valores</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Contactenos
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-light">Buscar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
        )
    }
}

