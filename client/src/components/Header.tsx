import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{color: "white"}}>Notes Application</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{color: "white"}}>Features</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
