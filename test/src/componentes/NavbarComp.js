import React, {useState} from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Alert} from 'react-bootstrap'
import { FaRegHandshake } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom"
import {useAuth} from '../contexto/AuthContext'


export default function NavbarComp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()

    async function handlelogout(){
        setError("")

        try{
            await logout()
            navigate("/login")

        } catch {
            setError("Fallo en el cierre de sesión")
        }
    }
    
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
                    <Nav.Link as={Link} to={"/Universidades"}>Universidades</Nav.Link>
                    <NavDropdown title="Utilidades" id="navbarScrollingDropdown">
                    <NavDropdown.Item onClick={() =>navigate("/paginaNoticias")}>Noticias</NavDropdown.Item>
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
                    {currentUser ? <Nav>
                    <NavDropdown id="navbarScrollingDropdown">
                    {error && <Alert variant="danger">{error}</Alert>}
                    <NavDropdown.Item onClick={() =>navigate("/dashboard")}>{currentUser.email}</NavDropdown.Item>
                    <NavDropdown.Item onClick={handlelogout}>Cerrar sesión</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>:<Button variant="outline-light" onClick={() =>navigate("/login")}>Iniciar sesión</Button>}
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
    )
}



