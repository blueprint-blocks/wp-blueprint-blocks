import {
	forwardRef,
	memo,
	useCallback,
	useLayoutEffect,
	useMemo,
	useRef,
} from "react";

import { blockComponents } from "../../data";
import { useTutorial } from "../../hooks";

import BlueprintSidebarItem from "../BlueprintSidebarItem";

import "./style.css";

const BlueprintSidebarComponentsPanel = memo(
	forwardRef(({}, ref) => {
		const tutorial = useTutorial({ step: 6 });

		const fieldItemRefs = blockComponents.fields.map((_, index) =>
			useRef(null),
		);

		const isSidebarDisabled = useMemo(
			() => tutorial.isActive && tutorial.currentStep !== 6,
			[tutorial.currentStep, tutorial.isActive],
		);

		const isDisabled = useCallback(
			(index) => isSidebarDisabled || (tutorial.isActive && index !== 1),
			[isSidebarDisabled, tutorial.isActive],
		);

		// Forward the ref to the tutorial context
		useLayoutEffect(() => {
			tutorial.forwardRef(fieldItemRefs[0]);
		}, [fieldItemRefs[0]]);

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
							disabled={tutorial.isActive}
						/>
					))}
				</div>
			</div>
		);
	}),
);

export default BlueprintSidebarComponentsPanel;
