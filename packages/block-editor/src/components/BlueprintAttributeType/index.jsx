import clsx from "clsx";

import { memo, useCallback, useMemo } from "react";

import { attributeTypes } from "../../data";
import { useBlockJson } from "../../hooks";

import BlueprintWarning from "../BlueprintWarning";
import EditableString from "../EditableString";

import "./style.css";

const BlueprintAttributeType = memo(({ clientId }) => {
	const { editAttribute, getAttributeById } = useBlockJson();

	const { name: attributeName, type: attributeType } =
		getAttributeById(clientId);

	const attributeTypeValid = useMemo(
		() => attributeType in attributeTypes,
		[attributeType],
	);

	const onChange = useCallback(
		(newAttributeType) => {
			editAttribute(attributeName, {
				type: newAttributeType,
			});
		},
		[attributeName],
	);

	return (
		<div className="BlueprintAttribute-line indent">
			<span className={clsx({ "is-invalid": !attributeTypeValid })}>
				<BlueprintWarning position="right" />
				<span>{'"'}</span>
				<span className="key">{`type`}</span>
				<span>{`": "`}</span>
				<EditableString
					className="BlueprintAttribute-type"
					placeholder="string"
					value={attributeType}
					onChange={onChange}
				/>
				<span>{'"'}</span>
			</span>
		</div>
	);
});

export default BlueprintAttributeType;
