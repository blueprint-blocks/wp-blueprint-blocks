import clsx from "clsx";
import { memo, useCallback, useRef } from "react";

import {
	useBlockJson,
	useBlueprintConnectionsDrag,
	useDebugRenderCount,
	useTutorial,
} from "../../hooks";

import "./style.css";

const BlueprintAttributeAdd = memo(() => {
	const ref = useRef(null);

	const tutorial = useTutorial();
	const { addEmptyAttribute } = useBlockJson();

	const { hasFocus: hasDraggingConnectionFocus } =
		useBlueprintConnectionsDrag(ref, {
			context: "newAttribute",
		});

	const onClick = useCallback(() => {
		if (!tutorial.isActive) {
			addEmptyAttribute();
		}
	}, [tutorial.isActive]);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintAttributeAdd");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintAttributeAdd", {
				"has-focus": hasDraggingConnectionFocus,
				"is-disabled": tutorial.isActive,
			})}
			onClick={onClick}
		>
			{"Add attribute"}
		</div>
	);
});

export default BlueprintAttributeAdd;
