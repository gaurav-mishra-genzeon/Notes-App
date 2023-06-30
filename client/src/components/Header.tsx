import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Header = () => {
  const location = useLocation();
  const history = useNavigate();
  const userlogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  const isDashboardPage = location.pathname === "/dashboard";
  return (
    <>
      <Navbar
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand style={{ color: "white" }}>
            Notes Application
          </Navbar.Brand>
          {/* <Nav className="me-auto">
                        <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
                        <Nav.Link href="#features" style={{color: "white"}}>Features</Nav.Link>
                    </Nav> */}
          {isDashboardPage && (
            <Button onClick={userlogout} >
              Logout
            </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
