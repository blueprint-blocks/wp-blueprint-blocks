import { useLayoutEffect, useRef } from "react";

import "./style.css";

function BlueprintWarning({ position = "left", text = null }) {
	const ref = useRef(null);

	return (
		<div
			ref={ref}
			className={`BlueprintWarning is-${(position === "right" && "right") || "left"}`}
		>
			<div className="BlueprintWarning-icon">{"!"}</div>
		</div>
	);
}

export default BlueprintWarning;
