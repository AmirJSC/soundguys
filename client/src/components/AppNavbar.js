import { useState, useContext, Fragment } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default function Cart() {

	const { user } = useContext(UserContext);

	return (
		<Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  			<Container>
  			<Navbar.Brand as={Link} to='/'>SoundGuys</Navbar.Brand>
  			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
  			<Navbar.Collapse id="responsive-navbar-nav">
    			<Nav className="me-auto">
      				<Nav.Link as={NavLink} to='/products/category/earphones'>Earphones</Nav.Link>
      				<Nav.Link as={NavLink} to='/products/category/headphones'>Headphones</Nav.Link>
      				<Nav.Link as={NavLink} to='/products/category/speakers'>Speakers</Nav.Link>
    			</Nav>
    			<Nav>
      				{
      					(user.id !== null) 
      					?
      					<Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
      					:
      					<Nav.Link as={Link} to='/login'> Login</Nav.Link>
      				}
      				<Nav.Link as={Link} to='/cart'>
       					<FontAwesomeIcon icon={faShoppingCart} /> Cart
       				</Nav.Link>
    			</Nav>
  			</Navbar.Collapse>
  			</Container>
		</Navbar>
	)
}