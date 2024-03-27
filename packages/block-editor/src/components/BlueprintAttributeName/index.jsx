import clsx from "clsx";
import { memo, useCallback, useMemo } from "react";

import { useBlockJson, useBlueprint } from "../../hooks";

import BlueprintWarning from "../BlueprintWarning";
import EditableString from "../EditableString";

const BlueprintAttributeName = memo(({ clientId }) => {
	const { getAttributeById, renameAttribute } = useBlockJson();

	const { getComponentsByAttributeName, setComponentAttribute } =
		useBlueprint();

	const { name: attributeName } = getAttributeById(clientId) || {};

	const attributeNameValid = useMemo(
		() => attributeName?.length > 0,
		[attributeName],
	);

	const onChange = useCallback(
		(newAttributeName) => {
			const blockComponents = Object.keys(
				getComponentsByAttributeName(attributeName),
			);

			blockComponents.forEach((clientId) => {
				setComponentAttribute(
					clientId,
					"attributeName",
					newAttributeName,
				);
			});

			renameAttribute(attributeName, newAttributeName);
		},
		[attributeName, clientId],
	);

	return (
		<div className="BlueprintAttribute-line">
			<span className={clsx({ "is-invalid": !attributeNameValid })}>
				<BlueprintWarning position="left" />
				<span>{'"'}</span>
				<EditableString
					className="BlueprintAttribute-name"
					placeholder="attributeName"
					value={attributeName}
					onChange={onChange}
				/>
				<span>{'": {'}</span>
			</span>
		</div>
	);
});

export default BlueprintAttributeName;
