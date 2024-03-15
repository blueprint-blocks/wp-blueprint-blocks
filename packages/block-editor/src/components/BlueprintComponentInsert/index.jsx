import { memo } from "react";

import { useBlueprint } from "../../hooks";

import InsertButton from "../InsertButton";

import "./style.css";

const BlueprintComponentInsert = memo(({ clientId }) => {
	const { setComponentAttribute } = useBlueprint();

	const onClick = () => {
		setComponentAttribute(clientId, "", null);
	};

	return (
		<InsertButton className="BlueprintComponentInsert" onClick={onClick} />
	);
});

export default BlueprintComponentInsert;
