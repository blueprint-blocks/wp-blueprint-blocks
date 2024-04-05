import clsx from "clsx";
import FieldLabel from "../FieldLabel";

import "./style.css";

function CheckboxField({
	children,
	label,
	size = "",
	tooltip,
	value = false,
	setValue,
}) {
	const onChange = (event) => {
		setValue(event.target?.checked || false);
	};

	return (
		<div
			className={clsx("CheckboxField", {
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
