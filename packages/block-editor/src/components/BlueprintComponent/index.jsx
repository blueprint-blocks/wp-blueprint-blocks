import clsx from "clsx";
import { useCallback, useMemo, useRef } from "react";
import Draggable from "react-draggable";

import { componentAllowsChildren } from "../../functions";
import { useBlueprint } from "../../hooks";

import {
	useDragWithinBounds,
	useDebugRenderCount,
	useEditorDrag,
	useEditorFocus,
	useOnClickOutside,
} from "../../hooks";

import BlueprintConnectionHandle from "../BlueprintConnectionHandle";
import BlueprintComponentClosingTag from "../BlueprintComponentClosingTag";
import BlueprintComponentOpeningTag from "../BlueprintComponentOpeningTag";

import "./style.css";

function BlueprintComponent({
	clientId,
	editorRef = null,
	children = [],
	indent = 0,
	draggable = true,
}) {
	const ref = useRef(null);

	const { isDragging, startDragging, stopDragging } = useEditorDrag();
	const { hasFocus, setFocus, unsetFocus } = useEditorFocus(clientId);

	const { getComponentById } = useBlueprint();
	const { tagName = null, type = "html" } = getComponentById(clientId);

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
	} = useDragWithinBounds({
		boundsRef: editorRef,
		ref,
		onStart: onStartDrag,
		onStop: onStopDrag,
	});

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
				"has-focus": hasFocus,
			})}
			onClick={onClick}
			style={{ "--indent": indent }}
		>
			<BlueprintComponentOpeningTag
				clientId={clientId}
				editorRef={editorRef}
			>
				{hasAttributeHandle && (
					<BlueprintConnectionHandle
						clientId={clientId}
						context="to"
						editorRef={editorRef}
						isClone={true}
						position="left"
					/>
				)}
			</BlueprintComponentOpeningTag>

			{allowsChildren && !!children && (
				<div className="BlueprintComponent-body">{children}</div>
			)}

			{allowsChildren && (
				<BlueprintComponentClosingTag
					clientId={clientId}
					editorRef={editorRef}
				/>
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
									editorRef={editorRef}
									clientId={clientId}
									context="to"
									draggingOffset={offset}
									isClone={false}
									isDragging={isDraggingSelf}
									position="left"
								/>
							)}
						</BlueprintComponentOpeningTag>

						{allowsChildren && !!children && (
							<div className="BlueprintComponent-body">
								{children}
							</div>
						)}

						{allowsChildren && (
							<BlueprintComponentClosingTag clientId={clientId} />
						)}
					</div>
				</Draggable>
			)}
		</div>
	);
}

export default BlueprintComponent;
