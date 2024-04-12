import { forwardRef, memo, useCallback, useContext, useRef } from "react";

import { TutorialContext } from "../../contexts";
import { blockComponents } from "../../data";

import BlueprintSidebarItem from "../BlueprintSidebarItem";

import "./style.css";

const BlueprintSidebarComponentsPanel = memo(
	forwardRef(({}, ref) => {
		const tutorialContext = useContext(TutorialContext);

		const fieldItemRefs = blockComponents.fields.map((_, index) => {
			if (index === 0) {
				return tutorialContext?.focusRefs?.[5] || useRef(null);
			}
			return useRef(null);
		});

		const isDisabled = useCallback(
			(index) =>
				tutorialContext.isActive &&
				(tutorialContext.currentStep !== 6 || index !== 0),
			[tutorialContext],
		);

		return (
			<div ref={ref} className="BlueprintSidebarComponentsPanel">
				<div className="BlueprintSidebar-heading">{"Components"}</div>

				<div
					className="BlueprintSidebar-grid"
					style={{ "--columns": 2 }}
				>
					{blockComponents.fields.map((props, index) => (
						<BlueprintSidebarItem
							{...props}
							ref={fieldItemRefs[index]}
							key={index}
							disabled={isDisabled(index)}
						/>
					))}
				</div>

				<div className="BlueprintSidebar-heading">{"HTML"}</div>

				<div
					className="BlueprintSidebar-grid"
					style={{ "--columns": 2 }}
				>
					{blockComponents.html.map((props, index) => (
						<BlueprintSidebarItem
							{...props}
							key={index}
							disabled={tutorialContext.isActive}
						/>
					))}
				</div>
			</div>
		);
	}),
);

export default BlueprintSidebarComponentsPanel;
