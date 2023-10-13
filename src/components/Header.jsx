import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutProfileAction } from "../store/profile/profileActions";
// import { logoutAction } from "../redux/actions";

const Header = () => {
	const myProfile = useSelector((state) => state.profile.me);
	const dispatch = useDispatch();

	const [expanded, setExpanded] = useState(false);

	const logout = (e) => {
		dispatch(logoutProfileAction());
		setExpanded(false);
	};

	return (
		<Navbar
			expand="lg"
			className="header"
			expanded={expanded}
		>
			<Container>
				<Link
					to={`/`}
					className={`fw-bold`}
					onClick={() => setExpanded(false)}
				>
					EpiDogSitting
				</Link>

				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="border-0"
					onClick={() => setExpanded(!expanded)}
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="">
						<Link
							to={`/`}
							onClick={() => setExpanded(false)}
						>
							Diventa un sitter
						</Link>
						<Link
							to={`/our-services`}
							onClick={() => setExpanded(false)}
						>
							I nostri servizi
						</Link>
						{myProfile.name && (
							<Link
								to={`/search-dogsitters`}
								onClick={() => setExpanded(false)}
							>
								Cerca un sitter
							</Link>
						)}
					</Nav>
					<Nav className="ms-auto">
						<Link to={`/`}>Home</Link>
						{!myProfile && (
							<Link
								to={`/sign-up-dogowner`}
								onClick={() => setExpanded(false)}
							>
								Registrati
							</Link>
						)}
						{myProfile ? (
							<>
								<Link
									to={`/my-profile`}
									onClick={() => setExpanded(false)}
								>
									Benvenut&#601;, {myProfile.name}
								</Link>
								<Link
									to={`/`}
									onClick={logout}
								>
									Logout
								</Link>
							</>
						) : (
							<Link
								to={`/sign-in`}
								onClick={() => setExpanded(false)}
							>
								Accedi
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
