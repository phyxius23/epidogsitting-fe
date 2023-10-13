import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { getUserLoggedAction } from "../redux/actions";
import { getProfileAction } from "../store/profile/profileActions";

const SignIn = () => {
	const [login, setLogin] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const sendLogin = async (e) => {
		e.preventDefault();

		// if (!isValidEmail(login.email)) {
		// 	return toast.warning("Formato email errato");
		// }

		try {
			const response = await fetch(`http://localhost:5001/auth/login`, {
				method: "POST",
				body: JSON.stringify(login),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const data = await response.json();

				localStorage.setItem("token", data.accessToken);

				setLogin({
					email: "",
					password: "",
				});
				dispatch(getProfileAction());

				navigate("/my-profile"); //=> devo spostarlo all'interno di getUserLoggedAction()???
			} else {
				console.log("Credenziali errate");
				// toast.error("Credenziali errate");
			}
		} catch (error) {
			setError(error);
			setErrorMessage(error.message);
			console.log(error.message);
		}
	};

	return (
		<main className="signin">
			<div className="hero-section">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col
							xs={11}
							sm={9}
							md={6}
							lg={5}
							xl={4}
						>
							<Form
								className="p-5 shadow-lg"
								onSubmit={sendLogin}
							>
								<h1 className="h3 mb-3 fw-normal">Accedi a EpiDogSitting!</h1>
								<FloatingLabel
									controlId="email"
									label="Email"
									className=""
								>
									<Form.Control
										required
										type="email"
										placeholder="name@example.com"
										autoFocus
										value={login.email}
										onChange={(e) => setLogin({ ...login, email: e.target.value })}
										className="input-login"
									/>
								</FloatingLabel>
								<FloatingLabel
									controlId="password"
									label="Password"
									className="mb-3"
								>
									<Form.Control
										required
										type="password"
										placeholder="Password"
										pattern="(^[0-9]{4}$)"
										title="La password deve essere composta da 4 caratteri"
										value={login.password}
										onChange={(e) => setLogin({ ...login, password: e.target.value })}
										className="input-login"
									/>
								</FloatingLabel>
								<Button
									type="submit"
									variant="primary"
									className="w-100 rounded-pill fw-bold"
								>
									Accedi
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</main>
	);
};

export default SignIn;
