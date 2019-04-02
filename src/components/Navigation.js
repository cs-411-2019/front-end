import React, { Component } from 'react'
import {
	Collapse,
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink } from 'reactstrap';




class Navigation extends Component {
	constructor(props) {
		super(props);
	
		this.toggle = this.toggle.bind(this);
		this.state = {
		  isOpen: false
		};
	  }
	  toggle() {
		this.setState({
		  isOpen: !this.state.isOpen
		});
	  }
	
	render() {
		return (
		    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Drinking Buddie</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
			  			<NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/beers">Beers</NavLink>
              </NavItem>
							<NavItem>
                <NavLink href="/bars">Bars</NavLink>
              </NavItem>
							<NavItem>
                <NavLink href="/buddies">Buddies</NavLink>
              </NavItem>
							<NavItem>
                <NavLink href="/reviews">Reviews</NavLink>
              </NavItem>
							<NavItem>
                <NavLink href="/logout">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
		)
	}
}



export default Navigation;