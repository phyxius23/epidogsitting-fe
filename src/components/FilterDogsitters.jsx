import { useState } from "react";
import { Form } from "react-bootstrap";
import Select, { components } from "react-select";
import { useDispatch } from "react-redux";
import { getSearchAction } from "../store/dogsitters/dogsittersActions";

// IMMAGINI STATICHE
import dogHouse from "../assets/icons/dog-house.png";
import dogTraining from "../assets/icons/dog-training.png";
import dogWalking from "../assets/icons/dog-walking.png";

export const FilterDogsitters = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState(null);

	const options = [
		{ value: "PASSEGGIATA", label: "Passeggiata", icon: dogWalking },
		{ value: "ASILO_DIURNO", label: "Asilo diurno", icon: dogTraining },
		{ value: "SOGGIORNO", label: "Soggiorno", icon: dogHouse },
	];

	const [query, setQuery] = useState({
		page: "",
		size: "",
		sortBy: "",
		postalCode: "",
		name: "",
		offeringType: "",
	});

	const { Option } = components;
	const IconOption = (props) => (
		<Option
			{...props}
			className="option"
		>
			<img
				src={props.data.icon}
				alt={props.data.label}
			/>
			<span>{props.data.label}</span>
		</Option>
	);

	// validazione del CAP
	const isValidCap = (cap) => {
		const capRegex = /^$|^[0-9]{5}$/;
		return capRegex.test(cap);
	};

	// get dogsitters
	const sendQuery = (e) => {
		e.preventDefault();

		if (!isValidCap(query.postalCode)) {
			// return toast.warning("Inserisci un CAP valido");
			return console.log("cap non valido");
		}

		dispatch(getSearchAction(query));

		setQuery({
			page: "",
			size: "",
			sortBy: "",
			postalCode: "",
			name: "",
			offeringType: "",
		});
	};

	return (
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
			<Form onSubmit={sendQuery}>
				<Form.Control
					type="text"
					placeholder="CAP"
					value={query.postalCode}
					onChange={(e) => setQuery({ ...query, postalCode: e.target.value })}
					className="me-2 mb-2"
				/>
			</Form>
		</div>
	);
};
