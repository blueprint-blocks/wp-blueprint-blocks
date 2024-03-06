import clsx from "clsx";
import { useRef } from "react";
import Draggable from "react-draggable";

import { useDragWithinBounds, useEditorDrag } from "../../hooks";

import "./style.css";

const { pluginMetadata = {} } = blueprintBlocksEditorSettings;

function BlueprintSidebarItem({
	icon,
	label,
	editorRef = null,
	type = "html",
	defaultAttributes = {},
	pro = false,
}) {
	const ref = useRef(null);

	const { startDragging, stopDragging } = useEditorDrag();

	const onStartDrag = () => {
		startDragging({
			context: "newComponent",
			component: {
				...defaultAttributes,
				type,
			},
		});
	};

	const onStopDrag = () => {
		stopDragging();
	};

	const { offset, ...draggableProps } = useDragWithinBounds({
		boundsRef: editorRef,
		ref,
		onStart: onStartDrag,
		onStop: onStopDrag,
	});

	return (
		<div
			ref={ref}
			className={clsx("BlueprintSidebarItem", {
				"is-html": type === "html",
			})}
		>
			{icon && (
				<div className="BlueprintSidebarItem-icon">
					<img
						src={`${pluginMetadata?.url}/assets/images/font-awesome/${icon}.svg`}
					/>
				</div>
			)}
			<div className="BlueprintSidebarItem-label">{label}</div>
			<Draggable {...draggableProps}>
				<div
					className={clsx("BlueprintSidebarItem", "is-clone", {
						"is-html": type === "html",
					})}
				>
					{icon && (
						<div className="BlueprintSidebarItem-icon">
							<img
								src={`${pluginMetadata?.url}/assets/images/font-awesome/${icon}.svg`}
							/>
						</div>
					)}
					<div className="BlueprintSidebarItem-label">{label}</div>
				</div>
			</Draggable>
		</div>
	);
}

export default BlueprintSidebarItem;
