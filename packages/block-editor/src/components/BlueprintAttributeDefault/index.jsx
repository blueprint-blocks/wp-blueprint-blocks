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

import { useBlockJson } from "../../hooks";

import BlueprintWarning from "../BlueprintWarning";
import EditableString from "../EditableString";

import "./style.css";

const BlueprintAttributeDefault = memo(({ clientId }) => {
	const { editAttribute, getAttributeById } = useBlockJson();

	const {
		default: attributeDefault,
		name: attributeName,
		type: attributeType,
	} = getAttributeById(clientId);

	const _attributeDefault = useMemo(() => {
		if (isObject(attributeDefault) || isArray(attributeDefault)) {
			return JSON.stringify(attributeDefault);
		}
		return attributeDefault || null;
	}, [attributeDefault]);

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
			!isAttributeArrayValue(_attributeDefault) &&
			!isAttributeNullValue(_attributeDefault)
		) {
			return false;
		} else if (
			attributeType === "object" &&
			!isAttributeObjectValue(_attributeDefault) &&
			!isAttributeNullValue(_attributeDefault)
		) {
			return false;
		} else if (
			attributeTypeValid &&
			!allowsNullDefault &&
			!_attributeDefault?.length
		) {
			return false;
		}

		return true;
	}, [allowsNullDefault, _attributeDefault, attributeTypeValid]);

	function onChange(newAttributeDefault) {
		editAttribute(attributeName, {
			default: newAttributeDefault,
		});
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
				{((attributeType === "string" &&
					!isAttributeNullValue(_attributeDefault)) ||
					isAttributeStringValue(_attributeDefault)) && (
					<span>{`"`}</span>
				)}
				<EditableString
					className="BlueprintAttribute-default"
					placeholder="null"
					value={_attributeDefault}
					onChange={onChange}
				/>
				{((attributeType === "string" &&
					!isAttributeNullValue(_attributeDefault)) ||
					isAttributeStringValue(_attributeDefault)) && (
					<span>{`"`}</span>
				)}
			</span>
		</div>
	);
});

export default BlueprintAttributeDefault;
