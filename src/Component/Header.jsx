import React, { useState } from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinkClass = ({ isActive }) =>
    [
      'border',
      'text-center',
      'px-2',
      'py-1',
      'fw-bold',
      'text-white',
      'navbar_menu',
      'text-decoration-none',
      isActive ? 'active' : '',
    ].join(' ');

  return (
    <div>
      <Navbar expand="lg" className="bg-white px-3 px-lg-4">
        <Navbar.Brand as={Link} to="/" onClick={handleClose}>
          <div style={{ width: '170px', height: 'auto' }}>
            <img
              src={require('../assets/images/Media (2).jpeg')}
              className="img-fluid w-100 h-100 object-fit-cover"
              alt="Logo"
            />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0 fw-bold shadow-none"
          onClick={handleShow}
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="px-2">
              <Link to="/" onClick={handleClose}>
                <div style={{ width: '170px', height: 'auto' }}>
                  <img
                    src={require('../assets/images/Media (2).jpeg')}
                    className="img-fluid w-100 h-100 object-fit-cover"
                    alt="Logo"
                  />
                </div>
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="px-3">
            <Nav className="justify-content-end flex-grow-1 pe-3 gap-2">
              <NavLink to="/" end className={navLinkClass} onClick={handleClose}>
                Home
              </NavLink>

              <NavLink to="/about" className={navLinkClass} onClick={handleClose}>
                About Us
              </NavLink>

              <NavLink to="/blog" className={navLinkClass} onClick={handleClose}>
                Blog
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}

export default Header;
