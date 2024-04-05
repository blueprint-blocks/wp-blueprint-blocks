import Tooltip from "../Tooltip";

import "./style.css";

function FieldLabel({
	htmlFor,
	label,
	tooltip,
	tooltipDirection = "left",
	tooltipPosition = "above",
}) {
	return (
		<label className="FieldLabel" htmlFor={htmlFor}>
			{label}
			{tooltip && (
				<Tooltip
					data={tooltip}
					direction={tooltipDirection}
					position={tooltipPosition}
					text={tooltip}
				/>
			)}
		</label>
	);
}

export default FieldLabel;
