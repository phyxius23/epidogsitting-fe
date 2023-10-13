import { useState } from "react";
import { Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import Select, { components } from "react-select";

import { StarFill } from "react-bootstrap-icons";

// IMMAGINI STATICHE
import dogHouse from "../assets/icons/dog-house.png";
import dogTraining from "../assets/icons/dog-training.png";
import dogWalking from "../assets/icons/dog-walking.png";
import dogFavorite from "../assets/icons/dog-favorite.png";
import imgProfileCard from "../assets/images/img-profile-1.jpg";

const Search = () => {
	const [value, setValue] = useState(null);

	const options = [
		{ value: "PASSEGGIATA", label: "Passeggiata", icon: dogWalking },
		{ value: "ASILO_DIURNO", label: "Asilo diurno", icon: dogTraining },
		{ value: "SOGGIORNO", label: "Soggiorno", icon: dogHouse },
	];

	const { Option } = components;
	const IconOption = (props) => (
		<Option {...props} className="option">
			<img src={props.data.icon} alt={props.data.label} />
			<span>{props.data.label}</span>
		</Option>
	);

	return (
		<main className="search">
			<div className="hero-section">
				<Container>
					<Row className="justify-content-center">
						<Col xs={12} md={4} lg={4}>
							{/*
							 * ***** *****
							 * LEFT COLUMN
							 * ***** *****
							 */}
							<div className="filters shadow">
								<h5 className="h4">Tipo Servizio</h5>
								<Select
									options={options}
									defaultValue={value}
									placeholder="Seleziona il servizio"
									onChange={setValue}
									components={{ Option: IconOption }}
									styles={{
										control: (baseStyles, state) => ({
											...baseStyles,
											borderColor: state.isFocused ? "grey" : "black",
										}),
									}}
								/>

								<h5 className="h4 mt-4">CAP</h5>
								<Form.Control
									type="text"
									placeholder="CAP"
									// value={query.postalCode}
									// onChange={(e) => setQuery({ ...query, postalCode: e.target.value })}
									className="me-2 mb-2"
								/>
							</div>
						</Col>

						{/*
						 * ***** *****
						 * RIGHT COLUMN
						 * ***** *****
						 */}
						<Col xs={12} md={8} lg={8} className="dogsitters">
							{/* <div className="dogsitters"> */}
							<Card className="shadow mb-4">
								<Card.Header>
									<Card.Img src={imgProfileCard} className="img-fluid" />
								</Card.Header>
								<Card.Body>
									<Card.Title>1. Giusi T.</Card.Title>
									<Card.Text>Amore, benessere e divertimento</Card.Text>
									<Card.Text>Roma, 00135</Card.Text>
									<Card.Text className="d-flex align-items-center">
										{/* ICONA CARICATA CORRETTAMENTE DA BOOTSTRAP ICONS */}
										<StarFill />
										<span className="ms-1">5.0 - 5 Recensioni</span>
									</Card.Text>
								</Card.Body>
								<Card.Footer className="text-end">
									<div>
										<Card.Text>da</Card.Text>
										<Card.Title>12 €</Card.Title>
										<Card.Text>a passeggiata</Card.Text>
									</div>
									<div className="img-wrapper">
										<Image src={dogFavorite} fluid />
										{/* <HeartOutline height="16px" width="16px" /> */}
									</div>
								</Card.Footer>
							</Card>

							<Card className="shadow mb-4">
								<Card.Header>
									<Card.Img src={imgProfileCard} className="img-fluid" />
								</Card.Header>
								<Card.Body>
									<Card.Title>1. Giusi T.</Card.Title>
									<Card.Text>Amore, benessere e divertimento</Card.Text>
									<Card.Text>Roma, 00135</Card.Text>
									<Card.Text className="d-flex align-items-center">
										<StarFill />
										<span className="ms-1">5.0 - 5 Recensioni</span>
									</Card.Text>
								</Card.Body>
								<Card.Footer className="text-end">
									<div>
										<Card.Text>da</Card.Text>
										<Card.Title>12 €</Card.Title>
										<Card.Text>a passeggiata</Card.Text>
									</div>
									<div className="img-wrapper">
										<Image src={dogFavorite} fluid />
										{/* <HeartOutline height="16px" width="16px" /> */}
									</div>
								</Card.Footer>
							</Card>

							<Card className="shadow mb-4">
								<Card.Header>
									<Card.Img src={imgProfileCard} className="img-fluid" />
								</Card.Header>
								<Card.Body>
									<Card.Title>1. Giusi T.</Card.Title>
									<Card.Text>Amore, benessere e divertimento</Card.Text>
									<Card.Text>Roma, 00135</Card.Text>
									<Card.Text className="d-flex align-items-center">
										<StarFill />
										<span className="ms-1">5.0 - 5 Recensioni</span>
									</Card.Text>
								</Card.Body>
								<Card.Footer className="text-end">
									<div>
										<Card.Text>da</Card.Text>
										<Card.Title>12 €</Card.Title>
										<Card.Text>a passeggiata</Card.Text>
									</div>
									<div className="img-wrapper">
										<Image src={dogFavorite} fluid />
										{/* <HeartOutline height="16px" width="16px" /> */}
									</div>
								</Card.Footer>
							</Card>

							<Card className="shadow mb-4">
								<Card.Header>
									<Card.Img src={imgProfileCard} className="img-fluid" />
								</Card.Header>
								<Card.Body>
									<Card.Title>1. Giusi T.</Card.Title>
									<Card.Text>Amore, benessere e divertimento</Card.Text>
									<Card.Text>Roma, 00135</Card.Text>
									<Card.Text className="d-flex align-items-center">
										<StarFill />
										<span className="ms-1">5.0 - 5 Recensioni</span>
									</Card.Text>
								</Card.Body>
								<Card.Footer className="text-end">
									<div>
										<Card.Text>da</Card.Text>
										<Card.Title>12 €</Card.Title>
										<Card.Text>a passeggiata</Card.Text>
									</div>
									<div className="img-wrapper">
										<Image src={dogFavorite} fluid />
										{/* <HeartOutline height="16px" width="16px" /> */}
									</div>
								</Card.Footer>
							</Card>

							<Card className="shadow mb-4">
								<Card.Header>
									<Card.Img src={imgProfileCard} className="img-fluid" />
								</Card.Header>
								<Card.Body>
									<Card.Title>1. Giusi T.</Card.Title>
									<Card.Text>Amore, benessere e divertimento</Card.Text>
									<Card.Text>Roma, 00135</Card.Text>
									<Card.Text className="d-flex align-items-center">
										<StarFill />
										<span className="ms-1">5.0 - 5 Recensioni</span>
									</Card.Text>
								</Card.Body>
								<Card.Footer className="text-end">
									<div>
										<Card.Text>da</Card.Text>
										<Card.Title>12 €</Card.Title>
										<Card.Text>a passeggiata</Card.Text>
									</div>
									<div className="img-wrapper">
										<Image src={dogFavorite} fluid />
										{/* <HeartOutline height="16px" width="16px" /> */}
									</div>
								</Card.Footer>
							</Card>

							<Card className="shadow">
								<Card.Header>
									<Card.Img src={imgProfileCard} className="img-fluid" />
								</Card.Header>
								<Card.Body>
									<Card.Title>1. Giusi T.</Card.Title>
									<Card.Text>Amore, benessere e divertimento</Card.Text>
									<Card.Text>Roma, 00135</Card.Text>
									<Card.Text className="d-flex align-items-center">
										<StarFill />
										<span className="ms-1">5.0 - 5 Recensioni</span>
									</Card.Text>
								</Card.Body>
								<Card.Footer className="text-end">
									<div>
										<Card.Text>da</Card.Text>
										<Card.Title>12 €</Card.Title>
										<Card.Text>a passeggiata</Card.Text>
									</div>
									<div className="img-wrapper">
										<Image src={dogFavorite} fluid />
										{/* <HeartOutline height="16px" width="16px" /> */}
									</div>
								</Card.Footer>
							</Card>

							{/* <Card className="shadow mb-4">
								<Card.Img src={imgProfileCard} className="img-fluid" />
								<Card.Body>
									<Card.Title>1. Giusi T.</Card.Title>
									<Card.Text>Amore, benessere e divertimento</Card.Text>
									<Card.Text>Roma, 00135</Card.Text>
									<Card.Text className="d-flex align-items-center">
										<StarFill />
										<span className="ms-1">5.0 - 5 Recensioni</span>
									</Card.Text>
								</Card.Body>
								<Card.Footer className="text-end">
									<div>
										<Card.Text>da</Card.Text>
										<Card.Title>12 €</Card.Title>
										<Card.Text>a passeggiata</Card.Text>
									</div>
									<div>
										<HeartOutline height="16px" width="16px" />
									</div>
								</Card.Footer>
							</Card> */}
							{/* </div> */}
						</Col>
					</Row>
				</Container>
			</div>
		</main>
	);
};

export default Search;
