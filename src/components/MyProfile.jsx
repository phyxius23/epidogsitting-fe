import imgProfileCard from "../assets/images/img-profile-1.jpg";
import { Col, Container, Image, Row } from "react-bootstrap";

export const Myprofile = ({ myProfile }) => {
	return (
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
	);
};
