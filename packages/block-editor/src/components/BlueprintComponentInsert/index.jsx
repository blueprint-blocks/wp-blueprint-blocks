import clsx from "clsx";
import { memo } from "react";

import { useBlueprint } from "../../hooks";

import InsertButton from "../InsertButton";

import "./style.css";

const BlueprintComponentInsert = memo(({ clientId, disabled = false }) => {
	const { setComponentAttribute } = useBlueprint();

	const onClick = () => {
		if (!disabled) {
			setComponentAttribute(clientId, "", null);
		}
	};

	return (
		<InsertButton
			className={clsx("BlueprintComponentInsert", {
				"is-disabled": disabled,
			})}
			onClick={onClick}
		/>
	);
});

export default BlueprintComponentInsert;
