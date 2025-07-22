import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'

function Header() {
    return (
        <>
            <div className='container'>
                <Navbar expand="lg" className="border border-dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <div style={{ width: '120px', height: 'auto' }} className='border'>
                                <img
                                    src={require("../assets/images/Media (2).jpeg")}
                                    className="img-fluid w-100 h-100 object-fit-cover"
                                    alt="Logo"
                                />
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">
                                    <div style={{ width: '100px', height: 'auto' }}>
                                        <img
                                            src={require("../assets/images/Media (2).jpeg")}
                                            className="img-fluid w-100 h-100 object-fit-cover"
                                            alt="Logo"
                                        />
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 gap-2">
                                    <Nav.Link href="#home" className="border px-3 py-2 fw-bold text-dark">Home</Nav.Link>
                                    <Nav.Link href="#about" className="border px-3 py-2 fw-bold text-dark">About Us</Nav.Link>
                                    <Nav.Link href="#blog" className="border px-3 py-2 fw-bold text-dark">Blog</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Header