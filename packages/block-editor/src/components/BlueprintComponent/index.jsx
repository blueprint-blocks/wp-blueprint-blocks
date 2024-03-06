import clsx from "clsx";
import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import Draggable from "react-draggable";

import { componentAllowsChildren, pascalize } from "../../functions";

import {
	useBlockClassName,
	useDragWithinBounds,
	useDebugRenderCount,
	useEditorDrag,
	useEditorFocus,
	useOnClickOutside,
} from "../../hooks";

import { getBlockComponent } from "../../store/block-blueprint";

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
	const blockClassName = useBlockClassName();

	let {
		type = "html",
		tagName = "div",
		attributeName = "",
		className = [],
		style = {},
		...component
	} = useSelector((state) =>
		getBlockComponent(state.blockBlueprint, clientId),
	);

	const { isDragging, startDragging, stopDragging } = useEditorDrag();
	const { hasFocus, setFocus, unsetFocus } = useEditorFocus(clientId);

	const allowsChildren = componentAllowsChildren(type, tagName);

	const ref = useRef(null);
	const openRef = useRef(null);
	const closeRef = useRef(null);

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

	const hasAttributeHandle = type !== "html";

	if (type !== "html") {
		tagName = pascalize(type);
	}

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
				ref={openRef}
				editorRef={editorRef}
			>
				{hasAttributeHandle && (
					<BlueprintConnectionHandle
						editorRef={editorRef}
						componentId={`${clientId}`}
						clientId={`${clientId}-1`}
						attributeName={attributeName}
						isDragging={isDraggingSelf}
						context="to"
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
					ref={closeRef}
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
									clientId={`${clientId}-2`}
									attributeName={attributeName}
									draggingOffset={offset}
									isClone={true}
									isDragging={isDraggingSelf}
									context="to"
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
