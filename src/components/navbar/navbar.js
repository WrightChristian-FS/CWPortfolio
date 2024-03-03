import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./navbar.css";
import logo from '../../asset/logo.png';

const HNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page has been scrolled
      const isScrolled = window.scrollY > 0;

      // Set the state to determine if the logo should be inside the nav
      setScrolled(isScrolled);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        {/* Navbar links on the right */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='bebas-neue-regular font-s'>
          <Nav className={`ml-auto ${scrolled ? 'scrolled' : ''}`}>
            {/* Logo moves from right to left as scrolled */}
            <img
              src={logo}
              alt="Logo"
              height="30"
              className={` align-top logo img-deco ${scrolled ? 'scrolled' : ''}`}
            />
            {/* Navbar links with vertical lines */}
            <Nav.Link href="#home" className='yalee-blue'>RESUME</Nav.Link>
            <div className="vertical-line navar.link yalee-blue" />
            <Nav.Link href="#about" className='yalee-blue'>IT MANGEMENT</Nav.Link>
            <div className="vertical-line" />
            <Nav.Link href="#services "className="yalee-blue">DEVELOPMENT</Nav.Link>
            <div className="vertical-line" />
            <Nav.Link href="#contact" className='yalee-blue'>CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HNavbar;
