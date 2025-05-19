import React from "react";
import { 
  Navbar,
  Nav,
  Container,
 } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container fluid className="px-0">
        <NavLink to="/">
        <Navbar.Brand className="ps-3"> <img src={logo} alt="logo" height="35" /> </Navbar.Brand> </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact
              activeClassName={styles.Active}
              to="/">
                <i class="bi bi-house"></i>{' '}
                Home
                </NavLink>
            <NavLink activeClassName={styles.Active}
              to="/signin">
                <i class="bi bi-box-arrow-in-right"></i>{' '}
                Sign in
                </NavLink>
            <NavLink activeClassName={styles.Active}
              to="/signup">
                <i class="bi bi-door-open"></i>{' '}
                Sign up
                </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
