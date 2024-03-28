import clsx from "clsx";

import {
	forwardRef,
	memo,
	useCallback,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import ContentEditable from "react-contenteditable";
import { prettyPrintJson } from "pretty-print-json";

import {
	isAttributeArrayValue,
	isAttributeNullValue,
	isAttributeNumberValue,
	isAttributeObjectValue,
	isAttributeStringValue,
	isObject,
	isStringified,
	isStringifiedObject,
} from "../../functions";

import { useDebugRenderCount } from "../../hooks";

import "./style.css";

const EditableObject = memo(
	forwardRef(
		(
			{
				className = "",
				disabled = false,
				invalid = false,
				keyPlaceholder = "key",
				keyValueSeperator = ":",
				onChange,
				onFocus,
				onBlur,
				placeholder = "null",
				propertySeperator = ",",
				value = {},
				valuePlaceholder = "value",
			},
			contentRef,
		) => {
			const ref = useRef(null);
			const _contentRef = contentRef || useRef(null);
			const [hasFocus, setHasFocus] = useState(false);

			const objectType = useMemo(() => {
				if (isAttributeNullValue(value)) {
					return "null";
				} else if (isAttributeNumberValue(value)) {
					return "number";
				} else if (isAttributeArrayValue(value)) {
					return "array";
				} else if (isAttributeObjectValue(value)) {
					return "object";
				}

				return "string";
			}, [value]);

			const html = useMemo(() => {
				let _value = value;

				if (isStringified(_value)) {
					_value = JSON.parse(_value);
				}

				return prettyPrintJson.toHtml(_value, {
					indent: 2,
					quoteKeys: true,
					trailingCommas: false,
				});
			}, [objectType, value]);

			/*useLayoutEffect(() => {
				console.log(value, html);
			}, [html, value]);*/

			const _onChange = (event) => {
				let newValue = _contentRef?.current?.textContent;
				newValue = newValue.replaceAll(/\n/g, " ");
				newValue = newValue.replaceAll("&nbsp;", " ");

				// Clear out value when null string is backspaced
				if (value === null && newValue === "nul") {
					newValue = "";
				}

				// Unescape string value
				if (isAttributeStringValue(newValue)) {
					newValue = newValue.replaceAll(/\\\\/g, "\\");
					newValue = newValue.replaceAll(/\\\"/g, '"');
				}

				// Add back trailing quote when deleted from a string
				if (
					isAttributeStringValue(value) &&
					value === newValue.slice(1)
				) {
					newValue = `${newValue}"`;
				}

				// Add back preceding quote when deleted from a string
				if (
					isAttributeStringValue(value) &&
					value === newValue.slice(0, -1)
				) {
					newValue = `"${newValue}`;
				}

				// Remove quotes from stringified string
				if (
					newValue.slice(0, 1) === '"' &&
					newValue.slice(-1) === '"'
				) {
					newValue = newValue.slice(1, -1);
				}

				// Autocomplete curly brackets
				if (newValue === "{") {
					newValue = "{}";
				}

				// Autocomplete brackets
				if (newValue === "[") {
					newValue = "[]";
				}

				if (isAttributeNullValue(newValue)) {
					newValue = null;
				} else if (isAttributeArrayValue(newValue)) {
					newValue = JSON.parse(newValue);
				} else if (isAttributeObjectValue(newValue)) {
					newValue = JSON.parse(newValue);
				}

				if (JSON.stringify(newValue) !== JSON.stringify(value)) {
					console.log(
						value,
						newValue,
						JSON.stringify(value),
						JSON.stringify(newValue),
						JSON.stringify(newValue) !== JSON.stringify(value),
						isAttributeStringValue(newValue),
					);
					debugger;
					onChange && onChange(newValue);
				}
			};

			const _onBlur = () => {
				setHasFocus(false);
				onBlur && onBlur();
			};

			const _onFocus = () => {
				setHasFocus(true);
				onFocus && onFocus();
			};

			const onKeyDown = useCallback((event) => {
				if (event.key === "Backspace") {
					event.stopPropagation();
				}
			}, []);

			console.log("rerender editableobject");

			if (process.env.NODE_ENV === "development") {
				useDebugRenderCount("EditableObject");
			}

			return (
				<div
					ref={ref}
					data-testid="editable-object"
					className={clsx("EditableObject", className, {
						"has-focus": hasFocus,
						"has-value": html.length > 0,
						"is-invalid": invalid,
					})}
					onKeyDown={onKeyDown}
				>
					{html.length === 0 && (
						<div
							className="placeholder"
							data-testid="editable-object/placeholder"
						>
							{placeholder}
						</div>
					)}
					<ContentEditable
						data-testid="editable-object/content-editable"
						disabled={disabled}
						innerRef={_contentRef}
						html={html}
						onChange={_onChange}
						onBlur={_onBlur}
						onFocus={_onFocus}
					/>
				</div>
			);
		},
	),
);

export default EditableObject;
