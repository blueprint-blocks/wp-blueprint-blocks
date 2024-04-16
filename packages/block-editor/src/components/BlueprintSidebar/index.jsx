import clsx from "clsx";
import { useLayoutEffect, useRef } from "react";

import { useEditorDrag, useEditorFocus, useTutorial } from "../../hooks";

import BlueprintSidebarComponentsPanel from "../BlueprintSidebarComponentsPanel";
import BlueprintSidebarContextPanel from "../BlueprintSidebarContextPanel";

import "./style.css";

const BlueprintSidebar = () => {
	const ref = useRef(null);

	const tutorial = useTutorial({ step: 8 });

	const contextPanelRef = useRef(null);
	const componentsPanelRef = useRef(null);

	const { currentFocus } = useEditorFocus();
	const { isDragging } = useEditorDrag();

	useLayoutEffect(() => {
		contextPanelRef.current.classList.toggle(
			"is-active",
			!!currentFocus?.context,
		);
		componentsPanelRef.current.classList.toggle(
			"is-active",
			!currentFocus?.context,
		);
	}, [currentFocus]);

	// Forward the ref to the tutorial context
	useLayoutEffect(() => {
		tutorial.forwardRef(ref);
	}, [ref]);

	return (
		<div
			ref={ref}
			className={clsx("BlueprintSidebar", { "is-dragging": isDragging })}
		>
			<BlueprintSidebarContextPanel ref={contextPanelRef} />
			<BlueprintSidebarComponentsPanel ref={componentsPanelRef} />
		</div>
	);
};

export default BlueprintSidebar;
