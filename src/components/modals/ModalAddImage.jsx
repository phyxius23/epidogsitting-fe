import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveImageDogAction } from "../../store/dogs/dogsActions";

const ModalAddImage = ({ show, handleCloseModal, dog }) => {
	const dispatch = useDispatch();
	const [image, setImage] = useState("");

	const sendImage = (e) => {
		e.preventDefault();

		handleCloseModal();

		const formData = new FormData();
		formData.append("multipartFile", image);

		dispatch(saveImageDogAction(dog.id, formData));
	};

	return (
		<>
			{/* FORM ADD IMAGE */}
			<Modal
				show={show}
				onHide={handleCloseModal}
			>
				<Modal.Header closeButton>
					<Modal.Title>
						<h3>Aggiungi una foto di {dog.name}</h3>
					</Modal.Title>
				</Modal.Header>
				<Form
					className="rounded form-register"
					onSubmit={sendImage}
				>
					<Modal.Body>
						<Form.Group className="my-3">
							<Form.Control
								type="file"
								onChange={(e) => setImage(e.target.files[0])}
								multiple
							/>
						</Form.Group>
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant="secondary"
							className="px-4 text-uppercase rounded-pill"
							onClick={handleCloseModal}
						>
							Chiudi
						</Button>
						<Button
							type="submit"
							variant="primary"
							className="button-send px-4 text-uppercase rounded-pill"
						>
							Salva immagine
						</Button>
					</Modal.Footer>
				</Form>
			</Modal>
		</>
	);
};
export default ModalAddImage;
