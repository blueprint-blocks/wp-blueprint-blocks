import clsx from "clsx";
import { useRef } from "react";
import { useBlueprintDrag, useDebugRenderCount } from "../../hooks";
import BlueprintDebugRect from "../BlueprintDebugRect";

import "./style.css";

const BlueprintInsert = ({ indent = 0, ancestry = [], context = "edit" }) => {
	const ref = useRef(null);
	const focusRef = useRef(null);

	const { hasFocus } = useBlueprintDrag(focusRef, {
		ancestry,
		context,
	});

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintInsert");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintInsert", {
				"has-focus": hasFocus,
			})}
			style={{ "--indent": indent }}
		>
			<div ref={focusRef} className="BlueprintInsert-line">
				<div />
			</div>

			{process.env.NODE_ENV === "development" && (
				<BlueprintDebugRect debugRef={focusRef} />
			)}
		</div>
	);
};

export default BlueprintInsert;
