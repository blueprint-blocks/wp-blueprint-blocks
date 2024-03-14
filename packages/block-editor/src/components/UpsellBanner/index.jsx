import { useDispatch } from "react-redux";

import Button from "../Button";

import { showUpsellDialog } from "../../store/upsell-dialog";

import "./style.css";

function UpsellBanner() {
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(showUpsellDialog());
	};

	return (
		<div className="UpsellBanner" onClick={onClick}>
			<p>Ready to level up with advanced features?</p>
			<Button
				label={"Learn More"}
				style={["large", "primary", "rounded"]}
			/>
		</div>
	);
}

export default UpsellBanner;
