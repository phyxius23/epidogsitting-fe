import { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";
import { PencilSquare, PlusLg, Trash, Trash3 } from "react-bootstrap-icons";
import { removeDogAction, removeImageDogAction } from "../store/dogs/dogsActions";
import ModalUpdateDog from "./modals/ModalUpdateDog";
import ModalAddImage from "./modals/ModalAddImage";
import ModalUpdateImage from "./modals/ModalUpdateImage";

export const CardDog = ({ dog }) => {
	const dispatch = useDispatch();

	// update dog
	const [showUpdateDog, setShowUpdateDog] = useState(false);
	const handleCloseModalUpdateDog = () => setShowUpdateDog(false);
	const handleShowModalUpdateDog = () => setShowUpdateDog(true);

	// remove dog
	const handleRemoveDog = () => {
		dispatch(removeDogAction(dog.id));
	};

	// add image dog
	const [showAddImage, setShowAddImage] = useState(false);
	const handleCloseModalAddImage = () => setShowAddImage(false);
	const handleShowModalAddImage = () => setShowAddImage(true);

	// update image dog
	const [showUpdateImage, setShowUpdateImage] = useState(false);
	const handleCloseModalUpdateImage = () => setShowUpdateImage(false);
	const handleShowModalUpdateImage = () => setShowUpdateImage(true);

	// remove image dog
	const handleRemoveImageDog = () => {
		dispatch(removeImageDogAction(dog));
	};

	return (
		<Card className="shadow-lg h-100">
			{dog.image ? (
				<>
					<div className="position-relative">
						<div className="icon-update-image">
							<div onClick={handleShowModalUpdateImage}>
								<PencilSquare />
							</div>
							<div onClick={handleRemoveImageDog}>
								<Trash />
							</div>
						</div>
						<Card.Img
							variant="top"
							src={dog.image.imageUrl}
						/>
					</div>
					<ModalUpdateImage
						show={showUpdateImage}
						handleCloseModal={handleCloseModalUpdateImage}
						dog={dog}
					/>
				</>
			) : (
				<>
					<div
						className="icon-add-image p-5"
						onClick={handleShowModalAddImage}
					>
						<PlusLg />
						<p className="mb-0">Aggiungi una immagine</p>
					</div>
					<ModalAddImage
						show={showAddImage}
						handleCloseModal={handleCloseModalAddImage}
						dog={dog}
					/>
				</>
			)}
			<Card.Body>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<Card.Title className="mb-0">{dog.name}</Card.Title>
					</ListGroup.Item>
					<ListGroup.Item>{dog.breed}</ListGroup.Item>
					<ListGroup.Item>
						{(dog.age > 1 ? dog.age + " anni, " : dog.age + " anno, ") + dog.weight + " kg."}
					</ListGroup.Item>
				</ListGroup>
			</Card.Body>
			<Card.Footer className="d-flex justify-content-end">
				<div
					className="d-flex align-items-center text-white"
					onClick={handleShowModalUpdateDog}
				>
					<PencilSquare />
					<span>Modifica</span>
				</div>
				<div
					className="d-flex align-items-center text-white"
					onClick={handleRemoveDog}
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
	);
};
