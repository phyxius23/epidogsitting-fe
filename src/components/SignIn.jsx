import React from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const SignIn = () => {
	return (
		<main className="signin">
			<div className="hero-section">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col xs={11} sm={9} md={6} lg={5} xl={4}>
							<Form className="p-5 shadow-lg">
								{" "}
								{/** onSubmit={sendLogin} */}
								<h1 className="h3 mb-3 fw-normal">Accedi a EpiDogSitting!</h1>
								<FloatingLabel controlId="email" label="Email" className="">
									<Form.Control
										required
										type="email"
										placeholder="name@example.com"
										autoFocus
										// value={login.email}
										// onChange={(e) => setLogin({ ...login, email: e.target.value })}
										className="input-login"
									/>
								</FloatingLabel>
								<FloatingLabel controlId="password" label="Password" className="mb-3">
									<Form.Control
										required
										type="password"
										placeholder="Password"
										pattern="(^[0-9]{4}$)"
										title="La password deve essere composta da 4 caratteri"
										// value={login.password}
										// onChange={(e) => setLogin({ ...login, password: e.target.value })}
										className="input-login"
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

export default SignIn;
