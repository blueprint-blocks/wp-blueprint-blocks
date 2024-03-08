import clsx from "clsx";
import { useCallback, useMemo, useRef } from "react";
import Draggable from "react-draggable";

import { componentAllowsChildren } from "../../functions";

import {
	useBlueprint,
	useBlueprintConnectionsDrag,
	useDragWithinBounds,
	useDebugRenderCount,
	useEditorDrag,
	useEditorFocus,
	useMouseFocus,
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

	const hasMouseFocus = useMouseFocus(ref);
	const { hasFocus, setFocus, unsetFocus } = useEditorFocus(clientId);
	const { isDragging, startDragging, stopDragging } = useEditorDrag();

	const { getComponentById } = useBlueprint();
	const {
		tagName = null,
		type = "html",
		...component
	} = getComponentById(clientId);

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
			<BlueprintComponentOpeningTag
				clientId={clientId}
				editorRef={editorRef}
			>
				{hasAttributeHandle && (
					<BlueprintConnectionHandle
						attributeName={component?.attributeName}
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
									attributeName={component?.attributeName}
									clientId={clientId}
									context="to"
									draggingOffset={offset}
									editorRef={editorRef}
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
