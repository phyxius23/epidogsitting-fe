import { Button } from "react-bootstrap";

export const MyWallet = () => {
	return (
		<div className="my-wallet">
			<h4>Portafoglio</h4>
			<Button
				variant="outline-primary"
				size="lg"
				className="w-100 rounded-pill"
			>
				Aggiungi o modifica un metodo di pagamento
			</Button>
		</div>
	);
};
