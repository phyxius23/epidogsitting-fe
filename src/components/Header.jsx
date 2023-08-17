import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Navbar expand="lg" className="header">
			<Container>
				<Link to={`/`} className={`nav-link fw-bold`}>
					EpiDogSitting
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="">
						<Link to={`/`}>Diventa un sitter</Link>
						<Link to={`/search-dogsitters`}>I nostri servizi</Link>
					</Nav>
					<Nav className="ms-auto">
						<Link to={`/`}>Home</Link>
						<Link to={`/sign-up-dogowner`}>Registrati</Link>
						<Link to={`/sign-in`}>Accedi</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
