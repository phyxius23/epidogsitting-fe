import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar expand="lg" className="header">
			<Container>
				<Navbar.Brand href="#home" className="fw-bold">
					EpiDogSitting
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="">
						<Nav.Link href="#register-dogsitter">Diventa un sitter</Nav.Link>
						<Nav.Link href="#our-services">I nostri servizi</Nav.Link>
					</Nav>
					<Nav className="ms-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#register-dogowner">Registrati</Nav.Link>
						<Nav.Link href="#login">Accedi</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
