import { Card, Image } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import dogFavorite from "../assets/icons/dog-favorite.png";
import imgProfileCard from "../assets/images/img-profile-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addFavoritesAction, removeFavoritesAction } from "../store/favorites/favoritesActions";
import { useNavigate } from "react-router-dom";
import { setSelectedDogsitterAction } from "../store/dogsitters/dogsittersActions";

export const CardDogsitter = ({ dogsitter, index }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// get lowest price from dogsitter services
	const prices = dogsitter.offerings.map((item) => item.price);
	const minPrice = Math.min(...prices);

	// add/remove favorite
	const favorites = useSelector((state) => state.favorites.list);

	const handleAddFavorites = () => {
		dispatch(addFavoritesAction(dogsitter.id));
	};

	const handleRemoveFavorites = () => {
		dispatch(removeFavoritesAction(dogsitter.id));
	};

	// selectedDogsitter & navigate dogsitter page
	const handlePageDogsitter = () => {
		dispatch(setSelectedDogsitterAction(dogsitter));
		navigate(`/dogsitter/${dogsitter.id}`);
	};

	return (
		<Card
			className="shadow"
			onClick={handlePageDogsitter}
		>
			<Card.Header>
				<Card.Img
					src={imgProfileCard}
					className="img-fluid"
				/>
			</Card.Header>
			<Card.Body>
				<Card.Title>
					{index + 1}. {dogsitter.name} {dogsitter.surname.charAt(0)}.
				</Card.Title>
				<Card.Text>Amore, benessere e divertimento</Card.Text>
				<Card.Text>{`${dogsitter.address.city}, ${dogsitter.address.postalCode}`}</Card.Text>
				<Card.Text className="d-flex align-items-center">
					<StarFill />
					<span className="ms-1">5.0 - 5 Recensioni</span>
				</Card.Text>
			</Card.Body>
			<Card.Footer className="text-end">
				<div>
					<Card.Text>da</Card.Text>
					<Card.Title>{minPrice} €</Card.Title>
					<Card.Text>a passeggiata</Card.Text>
				</div>
				{favorites.includes(dogsitter.id) ? (
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
			</Card.Footer>
		</Card>
	);
};
