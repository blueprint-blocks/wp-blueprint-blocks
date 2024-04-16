import clsx from "clsx";

import { memo, useCallback, useMemo } from "react";

import { attributeTypes } from "../../data";

import {
	isArray,
	isAttributeArrayValue,
	isAttributeNullValue,
	isAttributeNumberValue,
	isAttributeObjectValue,
	isAttributeStringValue,
	isObject,
} from "../../functions";

import { useBlockJson, useDebugRenderCount, useTutorial } from "../../hooks";

import BlueprintWarning from "../BlueprintWarning";
import EditableObject from "../EditableObject";

import "./style.css";

const BlueprintAttributeDefault = memo(({ clientId, disabled = false }) => {
	const { editAttribute, getAttributeById } = useBlockJson();

	const attribute = getAttributeById(clientId);

	const {
		default: attributeDefault,
		name: attributeName,
		type: attributeType,
	} = attribute;

	const allowsNullDefault = useMemo(
		() =>
			(attributeTypes?.[attributeType]?.allowsNull === false && false) ||
			true,
		[attributeType],
	);

	const attributeTypeValid = useMemo(
		() => attributeType in attributeTypes,
		[attributeType],
	);

	const attributeDefaultValid = useMemo(() => {
		if (
			attributeType === "array" &&
			!isAttributeArrayValue(attributeDefault) &&
			!isAttributeNullValue(attributeDefault)
		) {
			return false;
		} else if (
			attributeType === "object" &&
			!isAttributeObjectValue(attributeDefault) &&
			!isAttributeNullValue(attributeDefault)
		) {
			return false;
		} else if (
			attributeTypeValid &&
			!allowsNullDefault &&
			!attributeDefault?.length
		) {
			return false;
		}

		return true;
	}, [allowsNullDefault, attributeDefault, attributeTypeValid]);

	function onChange(newAttributeDefault) {
		if (newAttributeDefault !== attributeDefault) {
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
					value={attributeDefault}
				/>
			</span>
		</div>
	);
});

export default BlueprintAttributeDefault;
