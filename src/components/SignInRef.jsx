import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { getUserLoggedAction } from "../redux/actions";
import Spinner from "react-bootstrap/Spinner";

const SignInRef = () => {
	// const [login, setLogin] = useState({
	// 	email: "",
	// 	password: "",
	// });

	// const userRef = useRef();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	// const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const sendLogin = async (e) => {
		e.preventDefault();

		// if (!isValidEmail(login.email)) {
		// 	return toast.warning("Formato email errato");
		// }

		const loginData = { email, password };

		try {
			const response = await fetch(`http://localhost:5001/auth/login`, {
				method: "POST",
				body: JSON.stringify(loginData),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const data = await response.json();

				localStorage.setItem("token", data.accessToken);

				setEmail("");
				setPassword("");

				dispatch(getUserLoggedAction());

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

	const handleEmailInput = (e) => setEmail(e.target.value);
	const handlePasswordInput = (e) => setPassword(e.target.value);

	return (
		<main className="signin">
			<div className="hero-section">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col xs={11} sm={9} md={6} lg={5} xl={4}>
							<Form className="p-5 shadow-lg" onSubmit={sendLogin}>
								<h1 className="h3 mb-3 fw-normal">Accedi a EpiDogSittingRef!</h1>
								<FloatingLabel controlId="email" label="Email" className="">
									<Form.Control required type="email" placeholder="name@example.com" autoFocus value={email} onChange={handleEmailInput} className="input-login" />
								</FloatingLabel>
								<FloatingLabel controlId="password" label="Password" className="mb-3">
									<Form.Control
										type="password"
										placeholder="Password"
										// pattern="(^[0-9]{4}$)"
										title="La password deve essere composta da 4 caratteri"
										value={password}
										onChange={handlePasswordInput}
										className="input-login"
										required
									/>
								</FloatingLabel>
								<Button type="submit" variant="primary" className="w-100 rounded-pill fw-bold">
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

export default SignInRef;
