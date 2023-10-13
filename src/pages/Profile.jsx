import { useState } from "react";
import { useSelector } from "react-redux";
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import { CardDog } from "../components/CardDog";
import { Myprofile } from "../components/MyProfile";
import { MyWallet } from "../components/MyWallet";
import ModalAddDog from "../components/modals/ModalAddDog";

const Profile = () => {
	const isLoading = useSelector((state) => state.global.isLoading);
	const isError = useSelector((state) => state.global.isError);
	const errorMessage = useSelector((state) => state.global.errorMessage);
	const myProfile = useSelector((state) => state.profile.me);
	const dogs = useSelector((state) => state.dogs.list);

	const [show, setShow] = useState(false);
	const handleCloseModal = () => setShow(false);
	const handleShowModal = () => setShow(true);

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
										<Myprofile myProfile={myProfile} />

										{/* CODICE STATICO */}
										<MyWallet />
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
													<CardDog
														key={dog.id}
														dog={dog}
													/>
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
