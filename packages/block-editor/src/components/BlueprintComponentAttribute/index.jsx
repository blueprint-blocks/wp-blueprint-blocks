import clsx from "clsx";
import { useCallback, useMemo, useState, useRef } from "react";

import { getComponentAttributeType } from "../../functions";
import { useBlockJson, useBlueprint, useEditorFocus } from "../../hooks";

import EditableString from "../EditableString";

import "./style.css";

function BlueprintComponentAttribute({
	attributeName = "",
	attributeValue = "",
	clientId,
	componentClientId,
	children = {},
	disabled = false,
	...props
}) {
	const { editAttribute } = useBlockJson();

	const {
		getAttributeByComponentClientId,
		getComponentType,
		renameComponentAttribute,
		setComponentAttribute,
		unsetComponentAttribute,
	} = useBlueprint();

	const componentAttributeClientId =
		getAttributeByComponentClientId(componentClientId);

	const componentType = getComponentType(componentClientId);

	const ref = useRef(null);
	const attributeNameRef = useRef(null);

	const _attributeName = useMemo(() => attributeName || "", [attributeName]);

	const _attributeValue = useMemo(
		() => attributeValue || "",
		[attributeValue],
	);

	const [attributeValueValid, setAttributeValueValid] = useState(true);

	const attributeNameValid = useMemo(() => {
		if (!_attributeName?.length) {
			return false;
		}
		return true;
	}, [_attributeName]);

	const attributeType = useMemo(
		() => getComponentAttributeType(componentType, attributeName),
		[attributeName, componentType],
	);

	const { currentFocus, setFocus } = useEditorFocus();

	const onChangeAttributeName = useCallback(
		(newAttributeName) => {
			renameComponentAttribute(
				componentClientId,
				_attributeName,
				newAttributeName,
			);

			setFocus({
				clientId: componentClientId,
				context: "component",
				property: "attributeName",
				attributeName: newAttributeName,
				attributeValue: _attributeValue,
			});
		},
		[_attributeName, _attributeValue],
	);

	const onChangeAttributeValue = useCallback(
		(newAttributeValue) => {
			setComponentAttribute(
				componentClientId,
				_attributeName,
				newAttributeValue,
			);

			if (_attributeName === "attributeName") {
				editAttribute(componentAttributeClientId, {
					name: newAttributeValue,
				});
			}

			setFocus({
				clientId: componentClientId,
				context: "component",
				property: "attributeValue",
				attributeName: _attributeName,
				attributeValue: newAttributeValue,
			});
		},
		[_attributeName],
	);

	const onDeleteAttributeName = useCallback(() => {
		if (String(_attributeValue).length > 0) {
			return;
		}

		unsetComponentAttribute(componentClientId, _attributeName);
	}, [_attributeName, _attributeValue]);

	const onFocusAttributeName = useCallback(() => {
		setFocus({
			clientId: componentClientId,
			context: "component",
			property: "attributeName",
			attributeName: _attributeName,
			attributeValue: _attributeValue,
		});
	}, [_attributeName, _attributeValue]);

	const onFocusAttributeValue = useCallback(() => {
		setFocus({
			clientId: componentClientId,
			context: "component",
			property: "attributeValue",
			attributeName: _attributeName,
			attributeValue: _attributeValue,
		});
	}, [_attributeName, _attributeValue]);

	return (
		<div
			ref={ref}
			className={clsx(
				"BlueprintComponentAttribute",
				`is-${attributeType}`,
				{
					"is-invalid": !attributeNameValid,
				},
			)}
			onClick={(event) => {
				event.stopPropagation();
			}}
			onMouseDown={(event) => {
				event.stopPropagation();
			}}
			onTouchStart={(event) => {
				event.stopPropagation();
			}}
		>
			<span
				ref={attributeNameRef}
				className="BlueprintComponentAttribute-name"
			>
				<EditableString
					disabled={disabled}
					onChange={onChangeAttributeName}
					onDelete={onDeleteAttributeName}
					onFocus={onFocusAttributeName}
					placeholder="attribute"
					value={_attributeName}
				/>
			</span>

			<span className="BlueprintComponentAttribute-seperator">{"="}</span>

			<span className="BlueprintComponentAttribute-quote">{'"'}</span>
			<span className="BlueprintComponentAttribute-value">
				<EditableString
					disabled={disabled}
					onChange={onChangeAttributeValue}
					onFocus={onFocusAttributeValue}
					value={String(attributeValue)}
				/>
			</span>
			<span className="BlueprintComponentAttribute-quote">{'"'}</span>

			{children}
		</div>
	);
}

export default BlueprintComponentAttribute;
