import clsx from "clsx";
import { useMemo, useRef, useState } from "react";

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

import BlueprintConnectionHandle from "../BlueprintConnectionHandle";
import BlueprintWarning from "../BlueprintWarning";
import EditableString from "../EditableString";

import "./style.css";

function BlueprintAttribute({ attributeName = null, editorRef = null }) {
	const ref = useRef(null);

	const { editAttribute, getAttribute, renameAttribute } = useBlockJson();
	const attribute = getAttribute(attributeName);

	const attributeDefault = useMemo(() => {
		if (isObject(attribute?.default) || isArray(attribute?.default)) {
			return JSON.stringify(attribute.default);
		} else {
			return attribute?.default || null;
		}
	}, [attribute]);

	const attributeType = useMemo(
		() => attribute?.type || "string",
		[attribute],
	);

	const [_attributeType, setAttributeType] = useState(attributeType);

	const allowsNullDefault = useMemo(
		() =>
			(attributeTypes?.[attributeType]?.allowsNull === false && false) ||
			true,
		[attribute],
	);

	const attributeNameValid = useMemo(
		() => attributeName?.length > 0,
		[attributeName],
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
	}, [
		allowsNullDefault,
		attributeDefault,
		attributeType,
		attributeTypeValid,
	]);

	function onChangeAttributeName(newAttributeName) {
		renameAttribute(attributeName, newAttributeName);
	}

	function onChangeAttributeType(newAttributeType) {
		editAttribute(attributeName, {
			type: newAttributeType,
			defaultValue: attributeDefault,
		});
		setAttributeType(newAttributeType);
	}

	function onChangeAttributeDefault(newAttributeDefault) {
		editAttribute(attributeName, {
			type: attributeType,
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
				editorRef={editorRef}
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
						value={_attributeType}
						onChange={onChangeAttributeType}
					/>
					<span>{'"'}</span>
				</span>
			</div>
			<div className="BlueprintAttribute-line indent">
				<span
					className={clsx({ "is-invalid": !attributeDefaultValid })}
				>
					<BlueprintWarning position="right" />
					<span>{'"'}</span>
					<span className="key">{`default`}</span>
					<span>{`": `}</span>
					{((attributeType === "string" &&
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
					{((attributeType === "string" &&
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
}

export default BlueprintAttribute;
