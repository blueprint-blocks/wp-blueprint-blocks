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
			hintText = "",
			ancestry = [],
			components = null,
			indent = 0,
			editorRef = null,
			onDrop,
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
						editorRef={editorRef}
						onDrop={() =>
							onDrop({
								ancestry: [...ancestry, 0],
							})
						}
					/>
				)}
				{!hintText && (
					<BlueprintInsert
						indent={indent}
						editorRef={editorRef}
						onDrop={() =>
							onDrop({
								ancestry: [...ancestry, 0],
							})
						}
					/>
				)}
				{componentList.map(([clientId, children], index) => [
					index > 0 && (
						<BlueprintInsert
							key={`insert-${index}`}
							indent={indent}
							editorRef={editorRef}
							onDrop={() =>
								onDrop({
									ancestry: [...ancestry, index],
								})
							}
						/>
					),
					<BlueprintComponent
						key={clientId}
						index={index}
						indent={indent}
						clientId={clientId}
						editorRef={editorRef}
						draggable={!isRoot || allowMultiple}
					>
						{hintText && !children?.length && (
							<BlueprintHint
								text={hintText}
								indent={indent + 1}
								editorRef={editorRef}
								onDrop={() =>
									onDrop({
										ancestry: [...ancestry, index, 0],
									})
								}
							/>
						)}
						{(!hintText || children?.length > 0) && (
							<BlueprintComponentList
								allowMultiple={true}
								components={children || []}
								indent={indent + 1}
								ancestry={[...ancestry, index]}
								editorRef={editorRef}
								onDrop={onDrop}
							/>
						)}
					</BlueprintComponent>,
				])}
				{!hintText && componentList?.length > 0 && (
					<BlueprintInsert
						indent={indent}
						editorRef={editorRef}
						onDrop={() =>
							onDrop({
								ancestry: [...ancestry, componentList.length],
							})
						}
					/>
				)}
			</div>
		);
	},
);

export default BlueprintComponentList;
