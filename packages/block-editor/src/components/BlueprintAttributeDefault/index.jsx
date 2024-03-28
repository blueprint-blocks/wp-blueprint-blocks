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

import { useBlockJson, useDebugRenderCount } from "../../hooks";

import BlueprintWarning from "../BlueprintWarning";
import EditableObject from "../EditableObject";

import "./style.css";

const BlueprintAttributeDefault = memo(({ clientId }) => {
	const { editAttribute, getAttributeById } = useBlockJson();

	const attribute = getAttributeById(clientId);

	const {
		default: attributeDefault,
		name: attributeName,
		type: attributeType,
	} = attribute;

	if (attributeName === "link") {
		console.log(attribute);
	}

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
		console.log(
			newAttributeDefault,
			attributeDefault,
			newAttributeDefault !== attributeDefault,
		);
		debugger;
		if (newAttributeDefault !== attributeDefault) {
			editAttribute(attributeName, {
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
				<BlueprintWarning position="right" />
				<span>{'"'}</span>
				<span className="key">{`default`}</span>
				<span>{`": `}</span>
				<EditableObject
					className="BlueprintAttribute-default"
					onChange={onChange}
					placeholder="null"
					value={attributeDefault}
				/>
			</span>
		</div>
	);
});

export default BlueprintAttributeDefault;
