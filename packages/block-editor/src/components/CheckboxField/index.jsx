import clsx from "clsx";
import FieldLabel from "../FieldLabel";

import "./style.css";

function CheckboxField({
	children,
	disabled,
	label,
	size = "",
	tooltip,
	value = false,
	setValue,
}) {
	const onChange = (event) => {
		if (disabled) {
			return;
		}
		setValue(event.target?.checked || false);
	};

	return (
		<div
			className={clsx("CheckboxField", {
				"is-disabled": disabled,
				"is-checked": value === true,
				"is-small": size === "small",
			})}
		>
			<div className={clsx("CheckboxField-checkbox")}>
				<input
					type="checkbox"
					value="1"
					checked={value}
					onChange={onChange}
				/>
			</div>
			<div className={clsx("CheckboxField-content")}>
				{label && (
					<FieldLabel
						label={label}
						tooltip={tooltip}
						tooltipDirection="right"
						tooltipPosition="above"
					/>
				)}
				{children}
			</div>
		</div>
	);
}

export default CheckboxField;
