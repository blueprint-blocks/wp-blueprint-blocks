import { forwardRef, memo } from "react";

import { blockComponents } from "../../data";

import BlueprintSidebarItem from "../BlueprintSidebarItem";

import "./style.css";

const BlueprintSidebarComponentsPanel = memo(
	forwardRef(({}, ref) => {
		return (
			<div ref={ref} className="BlueprintSidebarComponentsPanel">
				<div className="BlueprintSidebar-heading">{"Components"}</div>

				<div
					className="BlueprintSidebar-grid"
					style={{ "--columns": 2 }}
				>
					{blockComponents.fields.map((props, index) => (
						<BlueprintSidebarItem {...props} key={index} />
					))}
				</div>

				<div className="BlueprintSidebar-heading">{"HTML"}</div>

				<div
					className="BlueprintSidebar-grid"
					style={{ "--columns": 2 }}
				>
					{blockComponents.html.map((props, index) => (
						<BlueprintSidebarItem {...props} key={index} />
					))}
				</div>
			</div>
		);
	}),
);

export default BlueprintSidebarComponentsPanel;
