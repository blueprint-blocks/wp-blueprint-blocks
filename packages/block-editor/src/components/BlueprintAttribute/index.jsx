import clsx from "clsx";

import { memo, useCallback, useMemo, useRef } from "react";

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

import {
	useBlockJson,
	useBlueprint,
	useBlueprintConnectionsDrag,
	useDebugRenderCount,
	useEditorFocus,
	useOnClickOutside,
	useOnDelete,
} from "../../hooks";

import BlueprintConnectionHandle from "../BlueprintConnectionHandle";
import BlueprintWarning from "../BlueprintWarning";
import EditableString from "../EditableString";

import "./style.css";

const BlueprintAttribute = memo(({ attributeName = null, clientId }) => {
	const ref = useRef(null);

	const { hasFocus, setFocus, unsetFocus } = useEditorFocus(clientId);

	const { editAttribute, getAttribute, removeAttribute, renameAttribute } =
		useBlockJson();

	const {
		getComponentsByAttributeName,
		setComponentAttribute,
		unsetComponentAttribute,
	} = useBlueprint();

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

	const onClick = useCallback(
		(event) => {
			event.stopPropagation();
			setFocus({ clientId, context: "attribute" });
		},
		[clientId],
	);

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

	const { hasFocus: hasDraggingConnectionFocus } =
		useBlueprintConnectionsDrag(ref, {
			attributeName,
			clientId,
			context: "attribute",
		});

	// Remove attribute on delete
	useOnDelete(() => {
		if (hasFocus) {
			const blockComponents = Object.keys(
				getComponentsByAttributeName(attributeName),
			);

			blockComponents.forEach((clientId) => {
				unsetComponentAttribute(clientId, "attributeName");
			});

			removeAttribute(attributeName);
		}
	}, [clientId, hasFocus]);

	// Call hook passing in the ref and a function to call on outside click
	useOnClickOutside(ref, () => {
		unsetFocus();
	});

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintAttribute");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintAttribute", {
				"has-focus": hasFocus || hasDraggingConnectionFocus,
			})}
			onClick={onClick}
		>
			<div class="BlueprintAttribute-focus" />
			<BlueprintConnectionHandle clientId={clientId} context="from" />
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
