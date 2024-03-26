import clsx from "clsx";
import { useRef } from "react";
import { useBlueprintDrag, useDebugRenderCount } from "../../hooks";
import BlueprintDebugRect from "../BlueprintDebugRect";

import "./style.css";

function BlueprintHint({
	text = "",
	indent = 0,
	ancestry = [],
	context = "edit",
}) {
	const ref = useRef(null);

	const { hasFocus } = useBlueprintDrag(ref, {
		ancestry,
		context,
	});

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintInsert");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintHint", {
				"has-focus": isDragging && hasFocus,
			})}
			style={{ "--indent": indent }}
		>
			<div className="BlueprintHint-wrap">
				<div className="BlueprintHint-text">{text}</div>
				<div className="BlueprintHint-insert">
					<div />
				</div>
			</div>

			{process.env.NODE_ENV === "development" && (
				<BlueprintDebugRect debugRef={ref} />
			)}
		</div>
	);
}

export default BlueprintHint;
