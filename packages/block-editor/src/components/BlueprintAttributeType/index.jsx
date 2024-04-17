import clsx from "clsx";

import { memo, useCallback, useMemo } from "react";

import { useBlockJson } from "../../hooks";
import { validateAttributeType } from "../../store/block-json/validation";

import BlueprintWarning from "../BlueprintWarning";
import EditableString from "../EditableString";

import "./style.css";

const BlueprintAttributeType = memo(({ clientId, disabled = false }) => {
	const { editAttribute, getAttributeById } = useBlockJson();

	const attribute = getAttributeById(clientId);

	const attributeTypeValid = useMemo(
		() => validateAttributeType(attribute),
		[attribute],
	);

	const onChange = useCallback((newAttributeType) => {
		editAttribute(clientId, {
			type: newAttributeType,
		});
	}, []);

	return (
		<div className="BlueprintAttribute-line indent">
			<span className={clsx({ "is-invalid": !attributeTypeValid })}>
				<BlueprintWarning
					data="blockBlueprint.attribute.type"
					className="is-right"
					direction="right"
					visible={!attributeTypeValid}
				/>
				<span>{'"'}</span>
				<span className="key">{`type`}</span>
				<span>{`": "`}</span>
				<EditableString
					className="BlueprintAttribute-type"
					disabled={disabled}
					placeholder="string"
					value={attribute?.type}
					onChange={onChange}
				/>
				<span>{'"'}</span>
			</span>
		</div>
	);
});

export default BlueprintAttributeType;
