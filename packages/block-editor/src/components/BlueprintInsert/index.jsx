import clsx from "clsx";
import { memo, useRef } from "react";
import { useDebugRenderCount, useEditorDrag, useMouseFocus } from "../../hooks";
import BlueprintDebugRect from "../BlueprintDebugRect";

import "./style.css";

const BlueprintInsert = ({ indent = 0, onDrop }) => {
	const ref = useRef(null);
	const focusRef = useRef(null);
	const hasFocus = useMouseFocus(focusRef);

	const { isDragging } = useEditorDrag(
		{ context: ["existingComponent", "newComponent"], ref: focusRef },
		onDrop,
	);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintInsert");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintInsert", {
				"has-focus": hasFocus && isDragging,
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
