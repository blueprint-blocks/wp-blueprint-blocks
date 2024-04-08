import { forwardRef, memo } from "react";
import { useEditorFocus } from "../../hooks";

import BlueprintContextualAttributeHelp from "../BlueprintContextualAttributeHelp";
import BlueprintContextualComponentHelp from "../BlueprintContextualComponentHelp";

import "./style.css";

const BlueprintSidebarContextPanel = memo(
	forwardRef(({}, ref) => {
		const { currentFocus } = useEditorFocus();
		const { context, ...focus } = currentFocus;

		console.log(context, focus);

		return (
			<div
				ref={ref}
				className="BlueprintSidebarContextPanel"
				onMouseDown={(event) => {
					event.stopPropagation();
				}}
				onTouchStart={(event) => {
					event.stopPropagation();
				}}
			>
				{context === "attribute" && (
					<BlueprintContextualAttributeHelp />
				)}
				{context === "component" && (
					<BlueprintContextualComponentHelp />
				)}
			</div>
		);
	}),
);

export default BlueprintSidebarContextPanel;
