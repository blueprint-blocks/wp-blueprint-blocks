import clsx from "clsx";
import { memo, useCallback, useMemo, useRef, useState } from "react";

import EditableString from "../EditableString";
import InsertButton from "../InsertButton";
import { isObject, isStringifiedObject } from "../../functions";

import "./style.css";

const EditableObject = memo(
	({
		className = "",
		keyPlaceholder = "key",
		keyValueSeperator = ":",
		onChange,
		onFocus,
		onBlur,
		propertySeperator = ",",
		value = {},
		valuePlaceholder = "value",
	}) => {
		const ref = useRef(null);
		const contentRef = useRef(null);
		const [hasFocus, setHasFocus] = useState(false);

		const _value = useMemo(() => {
			if (isObject(value)) {
				return value;
			}

			if (isStringifiedObject(value)) {
				return JSON.parse(value);
			}

			return {};
		}, [value]);

		const onChangePropertyName = useCallback(
			(propertyName, newPropertyName) => {
				const propertyValue = _value?.[propertyName];
				let newValue = { ..._value };
				delete newValue?.[propertyName];
				newValue[newPropertyName] = propertyValue;
				onChange && onChange(newValue);
			},
			[_value],
		);

		const onChangePropertyValue = useCallback(
			(propertyName, newPropertyValue) => {
				let newValue = { ..._value };
				newValue[propertyName] = newPropertyValue;
				onChange && onChange(newValue);
			},
			[_value],
		);

		const onDeleteProperty = useCallback(
			(propertyName) => {
				if (String(_value?.[propertyName]).length > 0) {
					return;
				}
				let newValue = { ..._value };
				delete newValue?.[propertyName];
				onChange && onChange(newValue);
			},
			[_value],
		);

		const onInsert = useCallback(() => {
			let newValue = { ..._value };
			newValue[""] = "";
			onChange && onChange(newValue);
		}, [_value]);

		const _onBlur = () => {
			setHasFocus(false);
			onBlur && onBlur();
		};

		const _onFocus = () => {
			setHasFocus(true);
			onFocus && onFocus();
		};

		return (
			<div
				ref={ref}
				className={clsx("EditableObject", className, {
					"has-focus": hasFocus,
					"has-value": Object.entries(_value).length > 0,
				})}
			>
				<div className="EditableObject-properties">
					{Object.entries(value).map(
						([propertyName, propertyValue], index) => (
							<div className="EditableObject-property">
								<span className="EditableObject-value">
									<EditableString
										placeholder={keyPlaceholder}
										value={String(propertyName)}
										onBlur={_onBlur}
										onChange={(newPropertyName) =>
											onChangePropertyName(
												propertyName,
												newPropertyName,
											)
										}
										onFocus={_onFocus}
										onDelete={() =>
											onDeleteProperty(propertyName)
										}
									/>
								</span>
								<span className="EditableObject-seperator">
									{`${keyValueSeperator} `}
								</span>
								<span className="EditableObject-value">
									<EditableString
										placeholder={valuePlaceholder}
										value={String(propertyValue)}
										onBlur={_onBlur}
										onChange={(newPropertyValue) =>
											onChangePropertyValue(
												propertyName,
												newPropertyValue,
											)
										}
										onFocus={_onFocus}
									/>
								</span>
								{(propertySeperator !== "," ||
									index <
										Object.entries(_value).length - 1) && (
									<span className="EditableObject-seperator">
										{propertySeperator}
									</span>
								)}
							</div>
						),
					)}
					{!_value.hasOwnProperty("") && (
						<InsertButton onClick={onInsert} />
					)}
				</div>
			</div>
		);
	},
);

export default EditableObject;
