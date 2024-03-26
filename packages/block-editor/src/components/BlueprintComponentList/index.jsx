import { forwardRef } from "react";

import { isObject } from "../../functions";
import { useDebugRenderCount } from "../../hooks";

import BlueprintComponent from "../BlueprintComponent";
import BlueprintHint from "../BlueprintHint";
import BlueprintInsert from "../BlueprintInsert";

import "./style.css";

const BlueprintComponentList = forwardRef(
	(
		{
			isRoot = false,
			allowMultiple = true,
			context = "edit",
			hintText = "",
			ancestry = [],
			components = null,
			indent = 0,
		},
		ref,
	) => {
		let componentList = components || [];

		if (isObject(componentList)) {
			componentList = [componentList];
		} else if (!allowMultiple) {
			componentList = componentList.slice(0, 1);
		}

		if (process.env.NODE_ENV === "development") {
			useDebugRenderCount("BlueprintComponentList");
		}

		return (
			<div ref={ref} className="BlueprintComponentList">
				{componentList.length === 0 && hintText && (
					<BlueprintHint
						text={hintText}
						indent={indent}
						ancestry={[...ancestry, 0]}
						context={context}
					/>
				)}
				{!hintText && (
					<BlueprintInsert
						indent={indent}
						ancestry={[...ancestry, 0]}
						context={context}
					/>
				)}
				{componentList.map(([clientId, children], index) => [
					index > 0 && (
						<BlueprintInsert
							key={`insert-${index}`}
							indent={indent}
							ancestry={[...ancestry, index]}
							context={context}
						/>
					),
					<BlueprintComponent
						key={clientId}
						index={index}
						indent={indent}
						clientId={clientId}
						draggable={!isRoot || allowMultiple}
					>
						{hintText && !children?.length && (
							<BlueprintHint
								text={hintText}
								indent={indent + 1}
								ancestry={[...ancestry, index, 0]}
								context={context}
							/>
						)}
						{(!hintText || children?.length > 0) && (
							<BlueprintComponentList
								allowMultiple={true}
								components={children || []}
								indent={indent + 1}
								ancestry={[...ancestry, index]}
								context={context}
							/>
						)}
					</BlueprintComponent>,
				])}
				{!hintText && componentList?.length > 0 && (
					<BlueprintInsert
						indent={indent}
						ancestry={[...ancestry, componentList.length]}
						context={context}
					/>
				)}
			</div>
		);
	},
);

export default BlueprintComponentList;
