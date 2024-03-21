import clsx from "clsx";
import { memo, useCallback, useMemo, useRef } from "react";
import Draggable from "react-draggable";

import { componentAllowsChildren } from "../../functions";

import {
	useBlueprint,
	useBlueprintConnectionsDrag,
	useDragWithinEditor,
	useDebugRenderCount,
	useEditorDrag,
	useEditorFocus,
	useOnClickOutside,
} from "../../hooks";

import BlueprintConnectionHandle from "../BlueprintConnectionHandle";
import BlueprintComponentClosingTag from "../BlueprintComponentClosingTag";
import BlueprintComponentOpeningTag from "../BlueprintComponentOpeningTag";

import "./style.css";

const BlueprintComponent = memo(
	({ clientId, children = [], indent = 0, draggable = true }) => {
		const ref = useRef(null);

		const { hasFocus, setFocus, unsetFocus } = useEditorFocus(clientId);
		const { isDragging, startDragging, stopDragging } = useEditorDrag();

		const { getComponentAttribute, getComponentTagName, getComponentType } =
			useBlueprint();

		const attributeName = getComponentAttribute(clientId, "attributeName");
		const tagName = getComponentTagName(clientId);
		const type = getComponentType(clientId);

		const allowsChildren = useMemo(
			() => componentAllowsChildren(type, tagName),
			[tagName, type],
		);

		const hasAttributeHandle = useMemo(() => type !== "html", [type]);

		const onClick = useCallback(
			(event) => {
				if (!isDragging) {
					event.stopPropagation();
					setFocus({ clientId, context: "component" });
				}
			},
			[clientId, isDragging],
		);

		const onStartDrag = useCallback(() => {
			startDragging({
				context: "existingComponent",
				clientId,
			});
		}, [clientId]);

		const onStopDrag = useCallback(() => {
			stopDragging();
		}, []);

		const {
			isDragging: isDraggingSelf,
			offset,
			...draggableProps
		} = useDragWithinEditor({
			ref,
			onStart: onStartDrag,
			onStop: onStopDrag,
		});

		const { hasFocus: hasDraggingConnectionFocus } =
			useBlueprintConnectionsDrag(ref, clientId);

		// Call hook passing in the ref and a function to call on outside click
		useOnClickOutside(ref, () => {
			unsetFocus();
		});

		if (process.env.NODE_ENV === "development") {
			useDebugRenderCount("BlueprintComponent");
		}

		return (
			<div
				ref={ref}
				className={clsx("BlueprintComponent", {
					"is-draggable": draggable,
					"is-dragging": isDraggingSelf,
					"has-focus": hasFocus || hasDraggingConnectionFocus,
				})}
				onClick={onClick}
				style={{ "--indent": indent }}
			>
				<BlueprintComponentOpeningTag clientId={clientId}>
					{hasAttributeHandle && (
						<BlueprintConnectionHandle
							clientId={clientId}
							context="to"
							isClone={true}
						/>
					)}
				</BlueprintComponentOpeningTag>

				{allowsChildren && !!children && (
					<div className="BlueprintComponent-body">{children}</div>
				)}

				{allowsChildren && (
					<BlueprintComponentClosingTag clientId={clientId} />
				)}

				{draggable && (
					<Draggable {...draggableProps}>
						<div className="BlueprintComponent is-clone">
							<BlueprintComponentOpeningTag
								clientId={clientId}
								disabled={true}
							>
								{hasAttributeHandle && (
									<BlueprintConnectionHandle
										clientId={clientId}
										context="to"
										draggingOffset={offset}
										isDragging={isDraggingSelf}
									/>
								)}
							</BlueprintComponentOpeningTag>

							{allowsChildren && !!children && (
								<div className="BlueprintComponent-body">
									{children}
								</div>
							)}

							{allowsChildren && (
								<BlueprintComponentClosingTag
									clientId={clientId}
								/>
							)}
						</div>
					</Draggable>
				)}
			</div>
		);
	},
);

export default BlueprintComponent;
