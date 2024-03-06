import clsx from "clsx";
import { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { useEditorDrag } from "../../hooks";

import BlueprintSidebarComponentsPanel from "../BlueprintSidebarComponentsPanel";
import BlueprintSidebarContextPanel from "../BlueprintSidebarContextPanel";

import "./style.css";

function BlueprintSidebar({ editorRef = null }) {
	const ref = useRef(null);
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
			<BlueprintSidebarContextPanel
				ref={contextPanelRef}
				editorRef={editorRef}
			/>

			<BlueprintSidebarComponentsPanel
				ref={componentsPanelRef}
				editorRef={editorRef}
			/>
		</div>
	);
}

export default BlueprintSidebar;
