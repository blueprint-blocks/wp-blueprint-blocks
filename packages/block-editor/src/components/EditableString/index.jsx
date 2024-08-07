import clsx from "clsx";
import {
	forwardRef,
	memo,
	useCallback,
	useMemo,
	useRef,
	useState,
} from "react";
import ContentEditable from "react-contenteditable";
import { useDebugRenderCount } from "../../hooks";

import "./style.css";

const EditableString = memo(
	forwardRef(
		(
			{
				allowEnter = false,
				className = "",
				disabled = false,
				invalid = false,
				multiLine = false,
				onChange,
				onDelete,
				onFocus,
				onBlur,
				placeholder = "",
				rows = 1,
				value = "",
			},
			contentRef,
		) => {
			const ref = useRef(null);
			const _contentRef = contentRef || useRef(null);
			const [hasFocus, setHasFocus] = useState(false);

			const html = useMemo(() => String(value || ""), [value]);

			const _onBlur = () => {
				setHasFocus(false);
				onBlur && onBlur();
			};

			const _onChange = ({ target }) => {
				let newValue = String(target?.value || "");
				newValue = newValue.replaceAll(/\n/g, " ");
				newValue = newValue.replaceAll("&nbsp;", " ");
				onChange && onChange(newValue);
			};

			const _onFocus = () => {
				setHasFocus(true);
				onFocus && onFocus();
			};

			const onKeyDown = (event) => {
				if (event.key === "Backspace") {
					event.stopPropagation();
				}

				if (event.key === "Backspace" && html.length === 0) {
					onDelete && onDelete();
				}
			};

			if (process.env.NODE_ENV === "development") {
				useDebugRenderCount("EditableString");
			}

			return (
				<div
					ref={ref}
					data-testid="editable-string"
					className={clsx("EditableString", className, {
						"has-focus": hasFocus,
						"has-value": html.length > 0,
						"is-disabled": disabled,
						"is-invalid": invalid,
						"is-multiline": multiLine,
					})}
					onKeyDown={onKeyDown}
					style={{
						"--rows": (multiLine && rows) || 1,
					}}
				>
					{html.length === 0 && (
						<div
							className="placeholder"
							data-testid="editable-string/placeholder"
						>
							{placeholder}
						</div>
					)}
					<ContentEditable
						data-testid="editable-string/content-editable"
						disabled={disabled}
						innerRef={_contentRef}
						html={html}
						onChange={_onChange}
						onBlur={_onBlur}
						onFocus={_onFocus}
						onKeyDown={(event) => {
							if (event.key === "Enter" && allowEnter === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}}
					/>
				</div>
			);
		},
	),
);

export default EditableString;
