import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LogoLinkedin, LogoGithub, Call, AtSharp } from "react-ionicons";

const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col className="text-center">
						<h3>I miei contatti</h3>
					</Col>
				</Row>
				<Row xs md={2}>
					<Col>
						{/* CARD GITHUB */}
						<div className="contacts__card mb-4">
							<div className="me-2">
								<LogoGithub />
							</div>
							<div>
								<h4 className="mb-1">GitHub:</h4>
								<p className="h4 mb-0">phyxius23</p>
							</div>
						</div>

						{/* CARD LINKEDIN */}
						<div className="contacts__card">
							<div className="me-2">
								<LogoLinkedin />
							</div>
							<div>
								<h4 className="mb-1">LinkedIn:</h4>
								<p className="h4 mb-0">antonio-trentin-fullstackdeveloper</p>
							</div>
						</div>
					</Col>
					<Col>
						{/* CARD EMAIL */}
						<div className="contacts__card mb-4">
							<div className="me-2">
								<AtSharp />
							</div>
							<div>
								<h4 className="mb-1">Email:</h4>
								<p className="h4 mb-0">antonio.trentin@outlook.it</p>
							</div>
						</div>

						{/* CARD PHONE */}
						<div className="contacts__card">
							<div className="me-2">
								<Call />
							</div>
							<div>
								<h4 className="mb-1">Phone:</h4>
								<p className="h4 mb-0">+39 328 0586729</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
