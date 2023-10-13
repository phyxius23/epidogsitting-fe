import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import imgProfileCard from "../assets/images/img-profile-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { PlusLg } from "react-bootstrap-icons";
import Calendar from "react-calendar";
import ModalContactForm from "../components/modals/ModalContactForm";

// IMMAGINI STATICHE
import dogHouse from "../assets/icons/dog-house.png";
import dogTraining from "../assets/icons/dog-training.png";
import dogWalking from "../assets/icons/dog-walking.png";
import dogFavorite from "../assets/icons/dog-favorite.png";
import { addFavoritesAction, removeFavoritesAction } from "../store/favorites/favoritesActions";
// import { formatDate } from "react-calendar/dist/cjs/shared/dateFormatter";

export const Dogsitter = () => {
	const selectedDogsitter = useSelector((state) => state.dogsitters.selectedDogsitter);
	const dispatch = useDispatch();

	// open/close modal form to contact dogsitter
	const [show, setShow] = useState(false);

	const handleCloseModal = () => setShow(false);

	const handleShowModal = () => {
		if (serviceSelected) {
			setShow(true);
		} else {
			// if (!date) {
			// 	console.log("Seleziona una data");
			// 	// toast.warn("Seleziona una data", { autoClose: 1500 });
			// }
			if (!serviceSelected) {
				console.log("Seleziona una servizio");

				// toast.warn("Seleziona un servizio", { autoClose: 1500 });
			}
		}
	};

	// add service
	const [serviceSelected, setServiceSelected] = useState("");

	// icon service
	const iconServiceFn = (service) => {
		switch (service) {
			case "PASSEGGIATA":
				return dogWalking;
			case "ASILO_DIURNO":
				return dogTraining;
			case "PERNOTTAMENTO":
				return dogHouse;
			default:
				break;
		}
	};

	// transform string service
	const textServiceFn = (service) => {
		switch (service) {
			case "PASSEGGIATA":
				return "Passeggiata";
			case "ASILO_DIURNO":
				return "Asilo diurno";
			case "PERNOTTAMENTO":
				return "Pernottamento";
			default:
				break;
		}
	};

	// calendar
	const [date, setDate] = useState(new Date());

	const onChange = (date) => {
		setDate(date);
	};

	// add/remove favorite
	const favorites = useSelector((state) => state.favorites.list);

	const handleAddFavorites = () => {
		dispatch(addFavoritesAction(selectedDogsitter.id));
	};

	const handleRemoveFavorites = () => {
		dispatch(removeFavoritesAction(selectedDogsitter.id));
	};

	return (
		<main className="dogsitter">
			<div className="hero-section">
				<Container>
					<Row>
						<Col
							xs={12}
							md={4}
							lg={4}
						>
							<div className="image-dogsitter text-center">
								<Image
									src={imgProfileCard}
									className="shadow-lg"
									fluid
									roundedCircle
								/>
							</div>
						</Col>
						<Col
							xs={12}
							md={8}
							lg={8}
							className="d-flex flex-column justify-content-center"
						>
							<div className="position-relative">
								<h1>{selectedDogsitter.name}</h1>
								<p>
									{selectedDogsitter.address.city}, {selectedDogsitter.address.postalCode}
								</p>
								{favorites.includes(selectedDogsitter.id) ? (
									<div className="img-wrapper img-wrapper__favorite">
										<Image
											src={dogFavorite}
											fluid
											onClick={handleRemoveFavorites}
										/>
									</div>
								) : (
									<div className="img-wrapper">
										<Image
											src={dogFavorite}
											fluid
											onClick={handleAddFavorites}
										/>
									</div>
								)}
							</div>
						</Col>
					</Row>
					<Row className="mt-4 description">
						{/* SERVIZI */}
						<Col
							xs={12}
							md={4}
							lg={4}
						>
							<Card className="border-0 shadow">
								<Card.Body>
									<Card.Title>
										<h4 className="font-weight-bold">SERVIZI:</h4>
									</Card.Title>
									{selectedDogsitter.offerings.map((service) => (
										<div
											className={`d-flex justify-content-between align-items-center mb-2 service-row  ${
												service.type === serviceSelected ? "selected" : ""
											}`}
											key={service.id}
										>
											<div className="d-flex align-items-center">
												<Image
													src={iconServiceFn(service.type)}
													className="serviceIcon"
												/>
												<Card.Text>{textServiceFn(service.type)}</Card.Text>
											</div>

											<div className="d-flex align-items-center">
												<p className="m-0 me-2">€ {service.price}</p>
												<PlusLg
													className="cursor-pointer"
													onClick={
														service.type === serviceSelected
															? () => setServiceSelected("")
															: () => setServiceSelected(service.type)
													}
												/>
											</div>
										</div>
									))}
								</Card.Body>
							</Card>
						</Col>
						{/* DESCRIZIONE */}
						<Col
							xs={12}
							md={8}
							lg={8}
						>
							<Card className="lead shadow border-0">
								<Card.Body>
									<Card.Title className="px-3">
										<h4>Descrizione:</h4>
									</Card.Title>
									<Card.Text className="px-3">{selectedDogsitter.description}</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row className="justify-content-end mt-4">
						<Col
							xs={12}
							md={8}
							lg={8}
						>
							<Calendar
								onChange={onChange}
								// value={date}
								minDate={date}
								// formatDay={(date) =>
								// 	new Intl.DateTimeFormat(locale, {
								// 		year: "numeric",
								// 		month: "2-digit",
								// 		day: "2-digit",
								// 	}).format(date)
								// }
								// formatLongDate={(locale, date) => formatDate(date, "dd MMM YYYY")}
								// activeStartDate={today}
								className="shadow"
							/>
						</Col>
					</Row>
					{/* CONTACT FORM */}
					<Row>
						<Col className="d-flex justify-content-end">
							<Button
								onClick={handleShowModal}
								variant="primary"
								className="button-send px-4 text-uppercase rounded-pill mt-3"
							>
								<span>Contatta il dogsitter</span>
							</Button>
							<ModalContactForm
								show={show}
								handleCloseModal={handleCloseModal}
								service={serviceSelected}
								date={date.toLocaleDateString()}
								textServiceFn={textServiceFn}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		</main>
	);
};
