import clsx from "clsx";

import { memo, useMemo } from "react";

import { useBlockJson, useDebugRenderCount } from "../../hooks";
import { validateAttributeDefault } from "../../store/block-json/validation";

import BlueprintWarning from "../BlueprintWarning";
import EditableObject from "../EditableObject";

import "./style.css";

const BlueprintAttributeDefault = memo(({ clientId, disabled = false }) => {
	const { editAttribute, getAttributeById } = useBlockJson();

	const attribute = getAttributeById(clientId);

	const attributeDefaultValid = useMemo(
		() => validateAttributeDefault(attribute),
		[attribute],
	);

	function onChange(newAttributeDefault) {
		if (newAttributeDefault !== attribute?.default) {
			editAttribute(clientId, {
				default: newAttributeDefault,
			});
		}
	}

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintAttributeDefault");
	}

	return (
		<div className="BlueprintAttribute-line indent">
			<span
				className={clsx({
					"is-invalid": !attributeDefaultValid,
				})}
			>
				<BlueprintWarning
					data="blockBlueprint.attribute.default"
					className="is-right"
					direction="right"
					visible={!attributeDefaultValid}
				/>
				<span>{'"'}</span>
				<span className="key">{`default`}</span>
				<span>{`": `}</span>
				<EditableObject
					className="BlueprintAttribute-default"
					disabled={disabled}
					onChange={onChange}
					placeholder="null"
					value={attribute?.default}
				/>
			</span>
		</div>
	);
});

export default BlueprintAttributeDefault;
