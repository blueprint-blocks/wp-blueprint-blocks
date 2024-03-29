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
	useBlueprint,
	useBlueprintConnections,
	useCenterPoint,
	useDebugRenderCount,
} from "../../hooks";

import DraggableWithinEditor from "../DraggableWithinEditor";

import "./style.css";

const BlueprintConnectionHandleTo = memo(
	({
		clientId = null,
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

		const { getAttribute, getUniqueAttributeName } = useBlockJson();
		const { getComponentAttribute, getComponentType } = useBlueprint();

		const {
			setHandlePosition,
			startDraggingExistingConnection,
			startDraggingNewConnection,
			stopDraggingExistingConnection,
			stopDraggingNewConnection,
		} = useBlueprintConnections();

		const componentType = getComponentType(_clientId);

		const attributeName = getComponentAttribute(_clientId, "attributeName");
		const uniqueAttributeName = getUniqueAttributeName(componentType);

		const attributeExists = !!getAttribute(attributeName);

		const getCurrentPosition = () => {
			if (centerPoint.x === null || centerPoint.y === null) {
				return null;
			}

			if (isDraggingSelf) {
				return {
					x: centerPoint.x + selfDraggingOffset.x,
					y: centerPoint.y + selfDraggingOffset.y,
				};
			} else if (isDragging) {
				return {
					x: centerPoint.x + draggingOffset.x,
					y: centerPoint.y + draggingOffset.y,
				};
			}
			return centerPoint;
		};

		const onDrag = ({ x, y }) => {
			setSelfDraggingOffset({ x, y });

			if (attributeExists === false) {
				startDraggingNewConnection({
					attributeName: attributeName || uniqueAttributeName,
					clientId: _clientId,
					from: {
						x: centerPoint.x + x,
						y: centerPoint.y + y,
					},
					to: centerPoint,
					type: componentType,
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

			if (attributeExists === false) {
				startDraggingNewConnection({
					attributeName: attributeName || uniqueAttributeName,
					clientId: _clientId,
					from: centerPoint,
					to: centerPoint,
					type: componentType,
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

		const onStopDrag = () => {
			setIsDraggingSelf(false);
			setSelfDraggingOffset({ x: 0, y: 0 });

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
				context: "to",
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
			useDebugRenderCount("BlueprintConnectionHandleTo");
		}

		return (
			<div
				ref={ref}
				className="BlueprintConnectionHandleTo"
				onClick={(event) => {
					event.stopPropagation();
				}}
			>
				<DraggableWithinEditor
					additionalContext={{ handleContext: "to" }}
					clientId={clientId}
					context="connectionHandle"
					onDrag={onDrag}
					onStartDrag={onStartDrag}
					onStopDrag={onStopDrag}
					ref={ref}
				>
					<div className="BlueprintConnectionHandleTo is-clone" />
				</DraggableWithinEditor>
			</div>
		);
	},
);

export default BlueprintConnectionHandleTo;
