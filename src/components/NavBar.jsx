import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    console.log("NavBar Constructor: IN THE RENDER METHOD");
  }
  render() {
    

    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>{this.props.title} - Strive For Food</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            {this.props.location.pathname === "/details/2" && (
                <Link className="nav-link active" to="/details/2">
                  My favorite!
                </Link>
              )} 
              
              <Link to="/menu">
                <div
                  className={
                    this.props.location.pathname === "/menu"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Menu
                </div>
              </Link>
              <Link to="/reservation">
                <div
                  className={
                    this.props.location.pathname === "/reservation"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Reservation
                </div>
              </Link>
              <Nav.Link>Our Location</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
