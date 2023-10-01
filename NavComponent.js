import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';




const NavComponent = () => {
    return (
        <Router>
        <div>
            <Navbar bg="danger" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" style = {{color : 'white', fontsize : '90px'}}><h1>🅒🅡🅤🅓</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"style = {{color : 'white'}} />
                    <Navbar.Offcanvas 
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end" 
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                           
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="">Home</Nav.Link>
                               
                                
                               
                            </Nav>
                           
                          
                           
                        </Offcanvas.Body>
                        
                    </Navbar.Offcanvas>
                    
                            
                </Container>
               
            </Navbar>
           

           
        </div>
        </Router>
    )
}

export default NavComponent;