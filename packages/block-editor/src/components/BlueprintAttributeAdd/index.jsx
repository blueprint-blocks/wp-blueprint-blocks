import clsx from "clsx";
import { memo, useCallback, useRef } from "react";

import {
	useBlockJson,
	useBlueprintConnectionsDrag,
	useDebugRenderCount,
} from "../../hooks";

import "./style.css";

const BlueprintAttributeAdd = memo(() => {
	const ref = useRef(null);

	const { addEmptyAttribute } = useBlockJson();

	const { hasFocus: hasDraggingConnectionFocus } =
		useBlueprintConnectionsDrag(ref, {
			context: "newAttribute",
		});

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintAttributeAdd");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintAttributeAdd", {
				"has-focus": hasDraggingConnectionFocus,
			})}
			onClick={addEmptyAttribute}
		>
			{"Add attribute"}
		</div>
	);
});

export default BlueprintAttributeAdd;
