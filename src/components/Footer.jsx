import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Github, Linkedin, EnvelopeAtFill, TelephoneFill } from "react-bootstrap-icons";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col className="text-center mb-5">
						<h2 className="title-cursive">I miei contatti</h2>
					</Col>
				</Row>
				<Row xs={1} md={2}>
					<Col>
						{/* CARD GITHUB */}
						<div className="contacts__card mb-4">
							<div className="me-2">
								<Github />
							</div>
							<div>
								<p className="mb-1">GitHub:</p>
								<p className="mb-0">phyxius23</p>
							</div>
						</div>

						{/* CARD LINKEDIN */}
						<div className="contacts__card mb-4">
							<div className="me-2">
								<Linkedin />
							</div>
							<div>
								<p className="mb-1">LinkedIn:</p>
								<p className="mb-0">antonio-trentin-fullstackdeveloper</p>
							</div>
						</div>
					</Col>
					<Col>
						{/* CARD EMAIL */}
						<div className="contacts__card mb-4">
							<div className="me-2">
								<EnvelopeAtFill />
							</div>
							<div>
								<p className="mb-1">Email:</p>
								<p className="mb-0">antonio.trentin@outlook.it</p>
							</div>
						</div>

						{/* CARD PHONE */}
						<div className="contacts__card mb-4">
							<div className="me-2">
								<TelephoneFill />
							</div>
							<div>
								<p className="mb-1">Phone:</p>
								<p className="mb-0">+39 328 0586729</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
