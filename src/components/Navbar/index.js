import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { Image } from 'react-bootstrap';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              <Image
                style={{
                  width: "200%"
                }}
                src="favicon.png" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavDropdown title="Events" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to='/virtual'>Virtual Events</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  <Link to='/hybrid'>Hybrid Events</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action5">
                  <Link to='/inperson'>In-person Events</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Product" id="navbarScrollingDropdown">
                <NavDropdown.Item to="#action3">
                  <Link to='/matchmaking'>Matchmaking & Networking</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  <Link to='/sponsors'>Sponsors & Partners</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action5">
                  <Link to='/analytics'>Data Analytics</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action5">
                  <Link to='/customersuccess'>Customer Success</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action3">
                  <Link to='/allFeatures'>All Features</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to='/resources'>Resource Center</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action5">
                  <Link to='/blog'>Blog</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action5">
                  <Link to='/successstories'>Success Stories</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  <Link to='/'>Product News</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action5">
                  <Link to='/releases'>Releases</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Company" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to='/about'>About Us</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action4">
                  <Link to='/careers'>Careers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item to="#action5">
                  <Link to='/mediaAndpress'>Media and Press</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
