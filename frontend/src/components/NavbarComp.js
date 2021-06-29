import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComp = (props) => {

    return (
        <div>
        <Navbar bg="dark" variant="dark" expand='lg'>
            <Navbar.Brand href="#home">Spotify +</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
        </Navbar>
        </div>
    )
}
export default NavbarComp
