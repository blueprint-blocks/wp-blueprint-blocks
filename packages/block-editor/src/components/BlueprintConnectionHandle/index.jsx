import clsx from "clsx";

import {
	memo,
	useCallback,
	useContext,
	useLayoutEffect,
	useId,
	useRef,
	useState,
} from "react";

import { BlueprintEditorContext } from "../../contexts";

import {
	useBlockJson,
	useBlueprint,
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

		const editorContext = useContext(BlueprintEditorContext);

		const _clientId = clientId || useId();
		const centerPoint = useCenterPoint(ref, editorContext?.ref);

		const [isDraggingSelf, setIsDraggingSelf] = useState(false);

		const [selfDraggingOffset, setSelfDraggingOffset] = useState({
			x: 0,
			y: 0,
		});

		const { getAttributeById } = useBlockJson();
		const { getComponentAttribute } = useBlueprint();

		let attributeName;

		if (context === "from") {
			attributeName = (getAttributeById(_clientId) || {})?.name;
		} else {
			attributeName = getComponentAttribute(_clientId, "attributeName");
		}

		const {
			setHandlePosition,
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
					attributeName,
					clientId: _clientId,
					from: centerPoint,
					to: {
						x: centerPoint.x + x,
						y: centerPoint.y + y,
					},
				});
			} else if (attributeName === null) {
				startDraggingNewConnection({
					attributeName,
					clientId: _clientId,
					from: {
						x: centerPoint.x + x,
						y: centerPoint.y + y,
					},
					to: centerPoint,
				});
			} else {
				dispatchPosition();
				startDraggingExistingConnection({
					attributeName,
					clientId: _clientId,
					from: {
						x: centerPoint.x + x,
						y: centerPoint.y + y,
					},
					to: centerPoint,
				});
			}
		};

		const onStartDrag = () => {
			setIsDraggingSelf(true);

			if (context === "from") {
				startDraggingNewConnection({
					attributeName,
					clientId: _clientId,
					from: centerPoint,
					to: centerPoint,
				});
			} else if (attributeName === null) {
				startDraggingNewConnection({
					attributeName,
					clientId: _clientId,
					from: centerPoint,
					to: centerPoint,
				});
			} else {
				dispatchPosition();
				startDraggingExistingConnection({
					attributeName,
					clientId: _clientId,
					from: centerPoint,
					to: centerPoint,
				});
			}
		};

		const onStopDrag = useCallback(() => {
			setIsDraggingSelf(false);
			setSelfDraggingOffset({ x: 0, y: 0 });

			setTimeout(() => {
				dispatchPosition(centerPoint);
				stopDraggingNewConnection();
				stopDraggingExistingConnection();
			}, 0);
		}, [centerPoint]);

		const dispatchPosition = (position = null) => {
			const currentPosition = position || getCurrentPosition();

			if (currentPosition === null) {
				return;
			}

			setHandlePosition({
				clientId: _clientId,
				context,
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
			useLayoutEffect(() => {
				dispatchPosition();
			}, [centerPoint, clientId, context]);
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
