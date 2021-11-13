import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import { FaRegHandshake } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom"


export default function NavbarComp() {
    const navigate = useNavigate()
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
                </Form>
                <Button variant="outline-light" onClick={() =>navigate("/login")}>Iniciar sesión</Button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
    )
}


