import { useDispatch, useSelector } from "react-redux";
import {
	Alert,
	Button,
	Card,
	Col,
	Container,
	Image,
	ListGroup,
	Row,
	Spinner,
} from "react-bootstrap";
import { Pencil, PlusLg, Trash3 } from "react-bootstrap-icons"; //=> import icons

// import static image
import imgProfileCard from "../assets/images/img-profile-1.jpg";
import imgDogCard from "../assets/images/bg-card-dog-1.jpg";
import { useState } from "react";
import ModalAddDog from "./modals/ModalAddDog";
import ModalUpdateDog from "./modals/ModalUpdateDog";
import { removeDogAction } from "../store/dogs/dogsActions";

const Profile = () => {
	const isLoading = useSelector((state) => state.global.isLoading);
	const isError = useSelector((state) => state.global.isError);
	const errorMessage = useSelector((state) => state.global.errorMessage);
	const myProfile = useSelector((state) => state.profile.me);
	const dogs = useSelector((state) => state.dogs.list);

	const dispatch = useDispatch();

	const [show, setShow] = useState(false);
	const handleCloseModal = () => setShow(false);
	const handleShowModal = () => setShow(true);

	// update dog
	const [showUpdateDog, setShowUpdateDog] = useState(false);
	const handleCloseModalUpdateDog = () => setShowUpdateDog(false);
	const handleShowModalUpdateDog = () => setShowUpdateDog(true);

	// delete dog
	const handleRemoveDog = (dogID) => {
		dispatch(removeDogAction(dogID));
	};

	return (
		<main className="profile">
			<div className="hero-section">
				<Container>
					<Row className="justify-content-center">
						{isLoading && (
							<>
								<Spinner
									animation="border"
									role="status"
									variant="light"
								/>
								<p className="text-light text-center mt-2">Loading...</p>
							</>
						)}

						{isError && errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

						{myProfile && (
							<>
								<Col
									xs={12}
									md={5}
									lg={4}
								>
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
														<Image
															src={imgProfileCard}
															fluid
														/>
													</Col>
													<Col xs={7}>
														<p>{myProfile.name}</p>
														<p>Modifica profilo</p>
													</Col>
												</Row>
											</Container>
										</div>

										{/* CODICE STATICO */}
										<div className="my-wallet">
											<h4>Portafoglio</h4>
											<Button
												variant="outline-primary"
												size="lg"
												className="w-100 rounded-pill"
											>
												Aggiungi o modifica un metodo di pagamento
											</Button>
										</div>
									</div>
								</Col>
								<Col
									xs={12}
									md={7}
									lg={8}
									className="my-dogs"
								>
									{/*
									 * ***** *****
									 * RIGHT COLUMN
									 * ***** *****
									 */}
									<Row xs={1}>
										<Col>
											<h4>I tuoi animali domestici</h4>
											<p className="mb-4">
												Aggiungi i tuoi animali domestici o modifica le loro
												informazioni
											</p>
										</Col>
										<ModalAddDog
											show={show}
											handleCloseModal={handleCloseModal}
										/>
									</Row>
									<Row
										xs={1}
										md={1}
										lg={2}
									>
										{dogs &&
											dogs.map((dog) => (
												<Col
													className="mb-4"
													key={dog.id}
												>
													<Card className="shadow-lg">
														<Card.Img
															variant="top"
															src={imgDogCard}
														/>{" "}
														{/** IMAGE STATICA */}
														{/* <Card.Img variant="top" src={dog.image} /> */}
														<Card.Body>
															<ListGroup variant="flush">
																<ListGroup.Item>
																	<Card.Title className="mb-0">
																		{dog.name}
																	</Card.Title>
																</ListGroup.Item>
																<ListGroup.Item>{dog.breed}</ListGroup.Item>
																<ListGroup.Item>
																	{(dog.age > 1
																		? dog.age + " anni, "
																		: dog.age + " anno, ") +
																		dog.weight +
																		" kg."}
																</ListGroup.Item>
															</ListGroup>
														</Card.Body>
														<Card.Footer className="d-flex justify-content-end">
															<div
																className="d-flex align-items-center text-white"
																// onClick={handleShowModalUpdateDog}
																onClick={() => handleShowModalUpdateDog(dog.id)}
															>
																<Pencil />
																<span>Modifica</span>
															</div>
															<div
																className="d-flex align-items-center text-white"
																onClick={() => handleRemoveDog(dog.id)}
															>
																<Trash3 />
																<span>Elimina</span>
															</div>
														</Card.Footer>
														<ModalUpdateDog
															show={showUpdateDog}
															handleCloseModal={handleCloseModalUpdateDog}
															dogSelected={dog}
														/>
													</Card>
												</Col>
											))}

										<Col className="mb-4">
											<Card className="shadow-lg card-add">
												<div
													className="icon-wrapper p-5"
													onClick={handleShowModal}
												>
													<PlusLg />
													<p className="mb-0">Aggiungi un animale domestico</p>
												</div>
											</Card>
										</Col>
									</Row>
								</Col>
							</>
						)}
					</Row>
				</Container>
			</div>
		</main>
	);
};

export default Profile;
