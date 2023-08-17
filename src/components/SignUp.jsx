import React from "react";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const SignUp = () => {
	return (
		<main className="signup">
			<div className="hero-section">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col xs={11} sm={9} md={7} lg={6} xl={5}>
							<Form className="p-5 shadow-lg">
								{" "}
								{/** onSubmit={sendRegister} */}
								<h1 className="h3 mb-3 fw-normal text-center">Registrati su EpiDogSitting!</h1>
								<FloatingLabel controlId="name" label="Nome" className="">
									<Form.Control
										required
										type="text"
										placeholder="Inserisci il tuo nome"
										autoFocus
										pattern="(^[A-Za-z]{3,}$)"
										title="Sono permessi un minimo di 3 caratteri"
										// value={register.name}
										// onChange={(e) => setRegister({ ...register, name: e.target.value })}
										className="input-login"
									/>
								</FloatingLabel>
								<FloatingLabel controlId="surname" label="Cognome" className="">
									<Form.Control
										required
										type="text"
										placeholder="Inserisci il tuo cognome"
										pattern="(^[A-Za-z]{1,}$)"
										title="Sono permessi solo caratteri"
										// value={register.surname}
										// onChange={(e) => setRegister({ ...register, surname: e.target.value })}
										className="input-login"
									/>
								</FloatingLabel>
								<FloatingLabel controlId="email" label="Email" className="">
									<Form.Control
										required
										type="email"
										placeholder="Inserisci la tua email"
										pattern="(^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$)"
										title="Il formato email inserito non è valido"
										// value={register.email}
										// onChange={(e) => setRegister({ ...register, email: e.target.value })}
										className="input-login"
									/>
								</FloatingLabel>
								<FloatingLabel controlId="password" label="Password" className="mb-3">
									<Form.Control
										required
										type="password"
										placeholder="Inserisci la tua password"
										pattern="(^[0-9]{4}$)"
										title="La password deve essere composta da 4 caratteri"
										// value={register.password}
										// onChange={(e) => setRegister({ ...register, password: e.target.value })}
										className="input-login"
									/>
								</FloatingLabel>
								<Button type="submit" variant="primary" className="w-100 rounded-pill fw-bold">
									Registrati
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</main>
	);
};

export default SignUp;
