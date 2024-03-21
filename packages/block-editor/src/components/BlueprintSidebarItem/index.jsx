import clsx from "clsx";
import { useContext, useRef } from "react";
import Draggable from "react-draggable";

import { AppContext } from "../../contexts";
import { useDragWithinBounds, useEditorDrag } from "../../hooks";

import "./style.css";

const { pluginMetadata = {} } = blueprintBlocksEditorSettings;

function BlueprintSidebarItem({
	icon,
	label,
	type = "html",
	defaultAttributes = {},
}) {
	const ref = useRef(null);

	const { editorWrapperRef } = useContext(AppContext);
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
		bounds: editorWrapperRef,
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
