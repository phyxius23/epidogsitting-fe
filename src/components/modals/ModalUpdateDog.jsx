import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateDogAction } from "../../store/dogs/dogsActions";
import { SendFill } from "react-bootstrap-icons";

const ModalUpdateDog = ({ show, handleCloseModal, dogSelected }) => {
	const dispatch = useDispatch();

	const [dog, setDog] = useState({
		name: dogSelected.name,
		age: dogSelected.age,
		breed: dogSelected.breed,
		weight: dogSelected.weight,
		description: "",
		// se la elimino devo eliminarla o renderla opzionale lato backend
	});

	const sendDog = (e) => {
		e.preventDefault();

		handleCloseModal();

		dispatch(updateDogAction(dogSelected.id, dog));

		// setDog({
		// 	name: "",
		// 	age: "",
		// 	breed: "",
		// 	weight: "",
		// 	// description: "",
		// });
	};

	return (
		<Modal
			show={show}
			onHide={handleCloseModal}
		>
			<Modal.Header closeButton>
				<Modal.Title>
					<h3>Dettagli dell'animale domestico</h3>
				</Modal.Title>
			</Modal.Header>
			<Form
				className="rounded form-register"
				onSubmit={sendDog}
			>
				<Modal.Body>
					<Form.Group className="mb-3">
						<Form.Label>Nome</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Inserisci il nome"
							value={dog.name}
							onChange={(e) => setDog({ ...dog, name: e.target.value })}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Età</Form.Label>
						<Form.Control
							required
							type="number"
							className="input-login"
							placeholder="Inserisci l'età"
							value={dog.age}
							onChange={(e) => setDog({ ...dog, age: e.target.value })}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Razza</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Inserisci la razza"
							value={dog.breed}
							onChange={(e) => setDog({ ...dog, breed: e.target.value })}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Peso</Form.Label>
						<Form.Control
							required
							type="number"
							max={120}
							placeholder="Inserisci il peso"
							value={dog.weight}
							onChange={(e) => setDog({ ...dog, weight: e.target.value })}
						/>
					</Form.Group>
					{/* <Form.Group className="mb-3">
							<FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
								<Form.Control required as="textarea" placeholder="Inserisci una descrizione" value={dog.description} onChange={(e) => setDog({ ...dog, description: e.target.value })} />
							</FloatingLabel>
						</Form.Group> */}
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
						<span className="me-1">Invia</span>
						<SendFill />
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};
export default ModalUpdateDog;
