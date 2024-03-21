import clsx from "clsx";
import { memo, useContext, useId, useRef, useState } from "react";

import {
	BlueprintConnectionsContext,
	BlueprintEditorContext,
} from "../../contexts";

import {
	useBlueprintConnections,
	useCenterPoint,
	useDebugRenderCount,
} from "../../hooks";

import DraggableWithinEditor from "../DraggableWithinEditor";

import "./style.css";

const BlueprintConnectionHandle = memo(
	({
		clientId = null,
		context = "to",
		draggingOffset = { x: 0, y: 0 },
		isClone = false,
		isDragging = false,
	}) => {
		const ref = useRef(null);

		const { setHandlePosition } = useContext(BlueprintConnectionsContext);
		const editorContext = useContext(BlueprintEditorContext);

		const _clientId = clientId || useId();
		const centerPoint = useCenterPoint(ref, editorContext?.ref);

		const [isDraggingSelf, setIsDraggingSelf] = useState(false);

		const [selfDraggingOffset, setSelfDraggingOffset] = useState({
			x: 0,
			y: 0,
		});

		const {
			startDraggingExistingConnection,
			startDraggingNewConnection,
			stopDraggingExistingConnection,
			stopDraggingNewConnection,
		} = useBlueprintConnections();

		const getCurrentPosition = () => {
			if (centerPoint.x === null || centerPoint.y === null) {
				return null;
			}

			if (isDraggingSelf && context === "to") {
				return {
					x: centerPoint.x + selfDraggingOffset.x,
					y: centerPoint.y + selfDraggingOffset.y,
				};
			} else if (isDragging && context === "to") {
				return {
					x: centerPoint.x + draggingOffset.x,
					y: centerPoint.y + draggingOffset.y,
				};
			}
			return centerPoint;
		};

		const onDrag = ({ x, y }) => {
			setSelfDraggingOffset({ x, y });

			if (context === "from") {
				startDraggingNewConnection({
					from: centerPoint,
					to: {
						x: centerPoint.x + x,
						y: centerPoint.y + y,
					},
				});
			} else {
				dispatchPosition();
				/*startDraggingNewConnection({
				from: {
					x: centerPoint.x + x,
					y: centerPoint.y + y,
				},
				to: centerPoint,
			});*/
			}
		};

		const onStartDrag = () => {
			setIsDraggingSelf(true);

			if (context === "from") {
				startDraggingNewConnection({
					clientId: _clientId,
					from: centerPoint,
					to: centerPoint,
				});
			} else {
				startDraggingExistingConnection({
					clientId: _clientId,
				});
				/*startDraggingNewConnection({
				clientId: _clientId,
				from: centerPoint,
				to: centerPoint,
			});*/
			}
		};

		const onStopDrag = () => {
			setIsDraggingSelf(false);
			setSelfDraggingOffset({ x: 0, y: 0 });

			dispatchPosition(centerPoint);

			setTimeout(() => {
				if (context === "from") {
					stopDraggingNewConnection();
				} else {
					stopDraggingExistingConnection();
					//stopDraggingNewConnection();
				}
			}, 0);
		};

		const dispatchPosition = (position = null) => {
			const currentPosition = position || getCurrentPosition();

			if (currentPosition === null) {
				return;
			}

			setHandlePosition({
				context,
				clientId: _clientId,
				x: currentPosition.x,
				y: currentPosition.y,
			});
		};

		/**
		 * This is the primary mechanism by which locations of the
		 * handles are reported back to the store for drawing
		 * the connections between handles.
		 */
		if (!isClone) {
			dispatchPosition();
		}

		if (process.env.NODE_ENV === "development") {
			useDebugRenderCount("BlueprintConnectionHandle");
		}

		return (
			<div
				ref={ref}
				className={clsx(
					"BlueprintConnectionHandle",
					`is-${(context === "from" && "from") || "to"}`,
				)}
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<DraggableWithinEditor
					additionalContext={{ handleContext: context }}
					clientId={clientId}
					context="connectionHandle"
					onDrag={onDrag}
					onStartDrag={onStartDrag}
					onStopDrag={onStopDrag}
					ref={ref}
				>
					<div className="BlueprintConnectionHandle is-clone" />
				</DraggableWithinEditor>
			</div>
		);
	},
);

export default BlueprintConnectionHandle;
