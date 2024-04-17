import clsx from "clsx";
import { memo, useCallback, useMemo } from "react";

import { useBlockJson, useBlueprint } from "../../hooks";
import { validateAttributeName } from "../../store/block-json/validation";

import BlueprintWarning from "../BlueprintWarning";
import EditableString from "../EditableString";

const BlueprintAttributeName = memo(({ clientId, disabled = false }) => {
	const { editAttribute, getAttributeById } = useBlockJson();

	const { getComponentsByAttributeName, setComponentAttribute } =
		useBlueprint();

	const attribute = getAttributeById(clientId) || {};

	const attributeNameValid = useMemo(
		() => validateAttributeName(attribute),
		[attribute],
	);

	const onChange = useCallback(
		(newAttributeName) => {
			const blockComponents = Object.keys(
				getComponentsByAttributeName(attribute?.name),
			);

			blockComponents.forEach((clientId) => {
				setComponentAttribute(
					clientId,
					"attributeName",
					newAttributeName,
				);
			});

			editAttribute(clientId, { name: newAttributeName });
		},
		[attribute?.name, clientId],
	);

	return (
		<div className="BlueprintAttribute-line">
			<span className={clsx({ "is-invalid": !attributeNameValid })}>
				<BlueprintWarning
					data="blockBlueprint.attribute.name"
					className="is-left"
					direction="right"
					visible={!attributeNameValid}
				/>
				<span>{'"'}</span>
				<EditableString
					className="BlueprintAttribute-name"
					disabled={disabled}
					placeholder="attributeName"
					value={attribute?.name}
					onChange={onChange}
				/>
				<span>{'": {'}</span>
			</span>
		</div>
	);
});

export default BlueprintAttributeName;
