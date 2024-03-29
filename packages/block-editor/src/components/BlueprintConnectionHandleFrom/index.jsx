import {
	memo,
	useContext,
	useLayoutEffect,
	useId,
	useRef,
	useState,
} from "react";

import { BlueprintEditorContext } from "../../contexts";

import {
	useBlockJson,
	useBlueprintConnections,
	useCenterPoint,
	useDebugRenderCount,
} from "../../hooks";

import DraggableWithinEditor from "../DraggableWithinEditor";

import "./style.css";

const BlueprintConnectionHandleFrom = memo(
	({ clientId = null, draggingOffset = { x: 0, y: 0 }, isClone = false }) => {
		const ref = useRef(null);

		const editorContext = useContext(BlueprintEditorContext);

		const _clientId = clientId || useId();
		const centerPoint = useCenterPoint(ref, editorContext?.ref);

		const { getAttributeById } = useBlockJson();

		const {
			setHandlePosition,
			startDraggingNewConnection,
			stopDraggingExistingConnection,
			stopDraggingNewConnection,
		} = useBlueprintConnections();

		const attributeName = (getAttributeById(_clientId) || {})?.name;

		const getCurrentPosition = () => {
			if (centerPoint.x === null || centerPoint.y === null) {
				return null;
			}
			return centerPoint;
		};

		const onDrag = ({ x, y }) => {
			startDraggingNewConnection({
				attributeName,
				clientId: _clientId,
				from: centerPoint,
				to: {
					x: centerPoint.x + x,
					y: centerPoint.y + y,
				},
			});
		};

		const onStartDrag = () => {
			startDraggingNewConnection({
				attributeName,
				clientId: _clientId,
				from: centerPoint,
				to: centerPoint,
			});
		};

		const onStopDrag = () => {
			setTimeout(() => {
				dispatchPosition(centerPoint);
				setTimeout(() => {
					stopDraggingNewConnection();
					stopDraggingExistingConnection();
				}, 0);
			}, 0);
		};

		const dispatchPosition = (position = null) => {
			const currentPosition = position || getCurrentPosition();

			if (currentPosition === null) {
				return;
			}

			setHandlePosition({
				clientId: _clientId,
				context: "from",
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
			}, [centerPoint, clientId, draggingOffset]);
		}

		if (process.env.NODE_ENV === "development") {
			useDebugRenderCount("BlueprintConnectionHandleFrom");
		}

		return (
			<div
				ref={ref}
				className="BlueprintConnectionHandleFrom"
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<DraggableWithinEditor
					additionalContext={{ handleContext: "from" }}
					clientId={clientId}
					context="connectionHandle"
					onDrag={onDrag}
					onStartDrag={onStartDrag}
					onStopDrag={onStopDrag}
					ref={ref}
				>
					<div className="BlueprintConnectionHandleFrom is-clone" />
				</DraggableWithinEditor>
			</div>
		);
	},
);

export default BlueprintConnectionHandleFrom;
