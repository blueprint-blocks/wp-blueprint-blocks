import clsx from "clsx";
import { memo, useMemo, useRef } from "react";

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

import { useBlockJson, useBlueprint, useDebugRenderCount } from "../../hooks";

import BlueprintConnectionHandle from "../BlueprintConnectionHandle";
import BlueprintWarning from "../BlueprintWarning";
import EditableString from "../EditableString";

import "./style.css";

const BlueprintAttribute = memo(({ attributeName = null }) => {
	const ref = useRef(null);

	const { editAttribute, getAttribute, renameAttribute } = useBlockJson();

	const { getComponentsByAttributeName, setComponentAttribute } =
		useBlueprint();

	const attribute = getAttribute(attributeName);

	const attributeDefault = useMemo(() => {
		if (isObject(attribute?.default) || isArray(attribute?.default)) {
			return JSON.stringify(attribute.default);
		}
		return attribute?.default || null;
	}, [attribute]);

	const allowsNullDefault = useMemo(
		() =>
			(attributeTypes?.[attribute.type]?.allowsNull === false && false) ||
			true,
		[attribute],
	);

	const attributeNameValid = useMemo(
		() => attributeName?.length > 0,
		[attributeName],
	);

	const attributeTypeValid = useMemo(
		() => attribute.type in attributeTypes,
		[attribute.type],
	);

	const attributeDefaultValid = useMemo(() => {
		if (
			attribute.type === "array" &&
			!isAttributeArrayValue(attributeDefault) &&
			!isAttributeNullValue(attributeDefault)
		) {
			return false;
		} else if (
			attribute.type === "object" &&
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
	}, [allowsNullDefault, attributeDefault, attribute, attributeTypeValid]);

	function onChangeAttributeName(newAttributeName) {
		const blockComponents = Object.keys(
			getComponentsByAttributeName(attributeName),
		);

		blockComponents.forEach((clientId) => {
			setComponentAttribute(clientId, "attributeName", newAttributeName);
		});

		renameAttribute(attributeName, newAttributeName);
	}

	function onChangeAttributeType(newAttributeType) {
		editAttribute(attributeName, {
			type: newAttributeType,
			defaultValue: attributeDefault,
		});
	}

	function onChangeAttributeDefault(newAttributeDefault) {
		editAttribute(attributeName, {
			type: attribute.type,
			defaultValue: newAttributeDefault,
		});
	}

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintAttribute");
	}

	return (
		<div ref={ref} className="BlueprintAttribute">
			<BlueprintConnectionHandle
				attributeName={attributeName}
				context="from"
				position="right"
			/>
			<div className="BlueprintAttribute-line">
				<span className={clsx({ "is-invalid": !attributeNameValid })}>
					<BlueprintWarning position="left" />
					<span>{'"'}</span>
					<EditableString
						className="BlueprintAttribute-name"
						placeholder="attributeName"
						value={attributeName}
						onChange={onChangeAttributeName}
					/>
					<span>{'": {'}</span>
				</span>
			</div>
			<div className="BlueprintAttribute-line indent">
				<span className={clsx({ "is-invalid": !attributeTypeValid })}>
					<BlueprintWarning position="right" />
					<span>{'"'}</span>
					<span className="key">{`type`}</span>
					<span>{`": "`}</span>
					<EditableString
						className="BlueprintAttribute-type"
						placeholder="string"
						value={attribute.type}
						onChange={onChangeAttributeType}
					/>
					<span>{'"'}</span>
				</span>
			</div>
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
					{((attribute.type === "string" &&
						!isAttributeNullValue(attributeDefault)) ||
						isAttributeStringValue(attributeDefault)) && (
						<span>{`"`}</span>
					)}
					<EditableString
						className="BlueprintAttribute-default"
						placeholder="null"
						value={attributeDefault}
						onChange={onChangeAttributeDefault}
					/>
					{((attribute.type === "string" &&
						!isAttributeNullValue(attributeDefault)) ||
						isAttributeStringValue(attributeDefault)) && (
						<span>{`"`}</span>
					)}
				</span>
			</div>
			<div>
				<span>{"}"}</span>
			</div>
		</div>
	);
});

export default BlueprintAttribute;
