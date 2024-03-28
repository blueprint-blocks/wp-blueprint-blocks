import clsx from "clsx";
import { memo, useCallback, useMemo, useRef, useState } from "react";

import { componentAllowsChildren } from "../../functions";

import {
	useBlueprint,
	useBlueprintConnectionsDrag,
	useDebugRenderCount,
	useEditorFocus,
	useOnClickOutside,
	useOnDelete,
} from "../../hooks";

import BlueprintConnectionHandle from "../BlueprintConnectionHandle";
import BlueprintComponentClosingTag from "../BlueprintComponentClosingTag";
import BlueprintComponentOpeningTag from "../BlueprintComponentOpeningTag";
import DraggableWithinEditor from "../DraggableWithinEditor";

import "./style.css";

const BlueprintComponent = memo(
	({ clientId, children = [], indent = 0, draggable = true }) => {
		const ref = useRef(null);

		const [offset, setOffset] = useState({ x: 0, y: 0 });
		const [isDraggingSelf, setIsDraggingSelf] = useState(false);

		const { hasFocus, setFocus, unsetFocus } = useEditorFocus(clientId);

		const { getComponentTagName, getComponentType, removeComponent } =
			useBlueprint();

		const tagName = getComponentTagName(clientId);
		const type = getComponentType(clientId);

		const allowsChildren = useMemo(
			() => componentAllowsChildren(type, tagName),
			[tagName, type],
		);

		const hasAttributeHandle = useMemo(() => type !== "html", [type]);

		const onClick = useCallback(
			(event) => {
				if (isDraggingSelf === false) {
					event.stopPropagation();
					setFocus({ clientId, context: "component" });
				}
			},
			[clientId, isDraggingSelf],
		);

		const onStartDrag = useCallback(() => {
			setIsDraggingSelf(true);
			setOffset({ x: 0, y: 0 });
		}, [clientId]);

		const onStopDrag = useCallback(() => {
			setIsDraggingSelf(false);
			setOffset({ x: 0, y: 0 });
		}, []);

		const onDrag = useCallback(({ x, y }) => {
			setOffset({ x, y });
		}, []);

		const { hasFocus: hasDraggingConnectionFocus } =
			useBlueprintConnectionsDrag(ref, {
				clientId,
				context: "component",
			});

		// Remove component on delete
		useOnDelete(() => {
			if (hasFocus === true) {
				removeComponent(clientId);
			}
		}, [clientId, hasFocus]);

		// Call hook passing in the ref and a function to call on outside click
		useOnClickOutside(ref, () => {
			if (hasFocus === true) {
				unsetFocus();
			}
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
					<DraggableWithinEditor
						clientId={clientId}
						context="existingComponent"
						onDrag={onDrag}
						onStartDrag={onStartDrag}
						onStopDrag={onStopDrag}
						ref={ref}
					>
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
					</DraggableWithinEditor>
				)}
			</div>
		);
	},
);

export default BlueprintComponent;
