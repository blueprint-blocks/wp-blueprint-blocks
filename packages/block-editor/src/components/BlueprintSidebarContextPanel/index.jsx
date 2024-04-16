import { forwardRef, memo } from "react";
import { useEditorFocus } from "../../hooks";

import BlueprintContextualAttributeHelp from "../BlueprintContextualAttributeHelp";
import BlueprintContextualComponentHelp from "../BlueprintContextualComponentHelp";

import "./style.css";

const BlueprintSidebarContextPanel = memo(
	forwardRef(({}, ref) => {
		const { currentFocus } = useEditorFocus();
		const { context } = currentFocus;

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
				<BlueprintContextualComponentHelp />
			</div>
		);
	}),
);

export default BlueprintSidebarContextPanel;
