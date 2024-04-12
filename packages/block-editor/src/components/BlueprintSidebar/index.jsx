import clsx from "clsx";
import { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { useEditorDrag, useTutorial } from "../../hooks";

import BlueprintSidebarComponentsPanel from "../BlueprintSidebarComponentsPanel";
import BlueprintSidebarContextPanel from "../BlueprintSidebarContextPanel";

import "./style.css";

function BlueprintSidebar({}) {
	const tutorial = useTutorial();

	const ref = (tutorial.isActive && tutorial.focusRefs[7]) || useRef(null);

	const contextPanelRef = useRef(null);
	const componentsPanelRef = useRef(null);

	const currentFocus = useSelector((state) => state.editor.currentFocus);

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

	return (
		<div
			ref={ref}
			className={clsx("BlueprintSidebar", { "is-dragging": isDragging })}
		>
			<BlueprintSidebarContextPanel ref={contextPanelRef} />
			<BlueprintSidebarComponentsPanel ref={componentsPanelRef} />
		</div>
	);
}

export default BlueprintSidebar;
