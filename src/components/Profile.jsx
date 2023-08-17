import React from "react";
import { Button, Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";

import { AddOutline, CreateOutline, TrashOutline } from "react-ionicons";

import imgProfileCard from "../assets/images/img-profile-1.jpg";
import imgDogCard from "../assets/images/bg-card-dog-1.jpg";

const Profile = () => {
	return (
		<main className="profile">
			<div className="hero-section">
				<Container>
					<Row className="justify-content-center">
						<Col xs={12} md={4} lg={4}>
							{/*
							 * ***** *****
							 * LEFT COLUMN
							 * ***** *****
							 */}
							<div className="column-left-profile">
								<div className="my-profile">
									<Container>
										<Row className="align-items-center">
											<Col xs={5}>
												<Image src={imgProfileCard} fluid />
											</Col>
											<Col xs={7}>
												<p>Antonio T.</p>
												<p>Modifica profilo</p>
											</Col>
										</Row>
									</Container>
								</div>
								<div className="my-wallet">
									<h4>Portafoglio</h4>
									<Button variant="outline-primary" size="lg" className="w-100 rounded-pill fw-bold">
										Aggiungi o modifica un metodo di pagamento
									</Button>
								</div>
							</div>
						</Col>
						<Col xs={12} md={8} lg={8} className="my-dogs">
							{/*
							 * ***** *****
							 * RIGHT COLUMN
							 * ***** *****
							 */}
							<Row xs={1}>
								<Col>
									<h4>I tuoi animali domestici</h4>
									<p className="mb-4">Aggiungi i tuoi animali domestici o modifica le loro informazioni</p>
								</Col>
							</Row>
							<Row xs={1} md={2}>
								<Col className="mb-4">
									<Card className="shadow-lg">
										<Card.Img variant="top" src={imgDogCard} />
										<Card.Body>
											<ListGroup variant="flush">
												<ListGroup.Item>
													<Card.Title className="mb-0">Schia</Card.Title>
												</ListGroup.Item>
												<ListGroup.Item>Labrador</ListGroup.Item>
												<ListGroup.Item>5 anni, 32 kg.</ListGroup.Item>
											</ListGroup>
										</Card.Body>
										<Card.Footer className="d-flex justify-content-end">
											<div className="d-flex align-items-center text-white" /*onClick={handleShowModalUpdateDog}*/>
												<CreateOutline />
												<span>Modifica</span>
											</div>
											<div className="d-flex align-items-center text-white" /*onClick={handleShowModalUpdateDog}*/>
												<TrashOutline />
												<span>Elimina</span>
											</div>
										</Card.Footer>
									</Card>
								</Col>

								{/* <Col className="mb-4">
									<Card className="shadow-lg">
										<Card.Img variant="top" src={imgDogCard} />
										<Card.Body>
											<ListGroup variant="flush">
												<ListGroup.Item>
													<Card.Title className="mb-0">Schia</Card.Title>
												</ListGroup.Item>
												<ListGroup.Item>Labrador</ListGroup.Item>
												<ListGroup.Item>5 anni, 32 kg.</ListGroup.Item>
											</ListGroup>
										</Card.Body>
										<Card.Footer className="d-flex justify-content-end">
											<div className="d-flex align-items-center text-white">
												<CreateOutline />
												<span>Modifica</span>
											</div>
											<div className="d-flex align-items-center text-white">
												<TrashOutline />
												<span>Elimina</span>
											</div>
										</Card.Footer>
									</Card>
								</Col> */}

								<Col className="mb-4">
									<Card className="shadow-lg card-add">
										<div className="icon-wrapper p-5">
											<AddOutline />
											<p className="mb-0">Aggiungi un animale domestico</p>
										</div>
									</Card>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</main>
	);
};

export default Profile;
