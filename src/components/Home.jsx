import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import soggiorno from "../assets/icons/dog-house.png";
import passeggiata from "../assets/icons/dog-walking.png";
import asilo from "../assets/icons/dog-training.png";
import cardMolly from "../assets/images/bg-card-1.jpg";
import cardDanielle from "../assets/images/bg-card-2.jpg";

const Home = () => {
	return (
		<main className="home">
			<div className="hero-section">
				<Container>
					<Row className="justify-content-center align-items-center">
						<Col xs lg={7} className="hero-section__text">
							<h1>Amorevole pet sitting nel tuo quartiere</h1>
							<h2>Prenota sitter e dog walker di fiducia.</h2>
						</Col>
					</Row>
				</Container>
			</div>

			<section className="services">
				<Container className="space-2">
					<Row>
						<Col className="text-center">
							<h3>Servizi per ogni cane</h3>
						</Col>
					</Row>

					<Row xs={1} md={2} className="mt-4">
						<Col>
							{/* CARD PASSEGGIATA CANI */}
							<div className="services__card-sx mb-5">
								<div className="me-3">
									<Image src={soggiorno} fluid />
								</div>
								<div>
									<h4>Pet Sitting Soggiorno</h4>
									<p className="mb-0">I tuoi animali domestici rimangono a casa del sitter anche di notte. Saranno come in famiglia, in una ambiente gradevole.</p>
								</div>
							</div>

							{/* CARD PET SITTING DIURNO */}
							<div className="services__card-sx mb-5">
								<div className="me-3">
									<Image src={passeggiata} fluid />
								</div>
								<div>
									<h4>Passeggiata cani</h4>
									<p className="mb-0">Il tuo cane fa la passeggiata nel tuo quartiere. Perfetto per giornate impegnative e per cani con tanta energia.</p>
								</div>
							</div>

							{/* CARD PET SITTING SOGGIORNO */}
							<div className="services__card-sx">
								<div className="me-3">
									<Image src={asilo} fluid />
								</div>
								<div>
									<h4>Pet Sitting Diurno</h4>
									<p className="mb-0">Il cane passa la giornata a casa del sitter. Portalo di mattina e vai a riprenderlo felice la sera.</p>
								</div>
							</div>
						</Col>
						<Col>
							<Card className="service__card-dx">
								<Card.Header>
									Prenota con pet sitter di <span className="fw-bold">fiducia</span>
								</Card.Header>
								<Card.Body>
									<p>✔️ Tutti i sitter passano una verifica dell’identità</p>
									<p>✔️ Tutti i sitter forniscono un profilo dettagliato e informazioni personali</p>
									<p>✔️ Tutti i sitter vengono approvati dal nostro team qualità</p>
									<div className="p-3">
										<Button variant="primary" size="lg" className="w-100 rounded-pill fw-bold">
											Prenota un sitter locale
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>

			<section className="reviews">
				<Container className="pb-80">
					<Row xs={1} lg={2}>
						<Col>
							{/* CARD REVIEW MOLLY */}
							<div className="reviews__card">
								<Image src={cardMolly} fluid />
								<div className="reviews__text">
									<p className="h5">
										Il pensiero di lasciare Sam a degli sconosciuti mi metteva in agitazione, ma le mie preoccupazioni si sono subito dissipate. D’ora in avanti sceglierò sempre Rover per
										servizi di pet sitting. <span>– Molly S.</span>
									</p>
								</div>
							</div>
						</Col>
						<Col>
							{/* CARD REVIEW DANIELLE */}
							<div className="reviews__card">
								<Image src={cardDanielle} fluid />
								<div className="reviews__text">
									<p className="h5">
										Il sitter si è preso cura del mio cane superando le mie aspettative. Senza alcun dubbio prenoterei di nuovo con Rover! <span>– Danielle H.</span>
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</main>
	);
};
export default Home;
