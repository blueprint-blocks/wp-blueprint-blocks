import clsx from "clsx";
import {
	useCallback,
	useEffect,
	useId,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import { useDispatch } from "react-redux";
import Draggable from "react-draggable";

import {
	useBlueprintConnections,
	useCenterPoint,
	useDragWithinBounds,
	useEditorDrag,
	useEditorDrop,
	useMouseUp,
} from "../../hooks";

import { removePosition as removeConnectionHandlePosition } from "../../store/connection-handles";

import "./style.css";

function BlueprintConnectionHandle({
	attributeName,
	clientId = null,
	context = "to",
	draggingOffset = { x: 0, y: 0 },
	editorRef = null,
	isClone = false,
	isDragging = false,
	...props
}) {
	const dispatch = useDispatch();

	const id = clientId || useId();
	const ref = useRef(null);
	const centerPoint = useCenterPoint(ref, editorRef);

	const [name, setName] = useState(attributeName);
	const [currentPosition, setCurrentPosition] = useState(centerPoint);

	const { setHandlePosition } = useBlueprintConnections();

	const getCurrentPosition = () => {
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

	const onStartDrag = () => {
		startDragging({
			attributeName,
			clientId,
			componentId,
			context: "connectionHandle",
			handleContext: context,
		});
	};

	const onStopDrag = () => {
		dispatchPosition(centerPoint);
		stopDragging();
	};

	const dispatchPosition = (position = null) => {
		const { x = 0, y = 0 } = position || getCurrentPosition();

		if (x !== currentPosition.x || y !== currentPosition.y) {
			setCurrentPosition({ x, y });
			setHandlePosition({ context, attributeName, clientId, x, y });
		}
	};

	const {
		isDragging: isDraggingSelf,
		offset: selfDraggingOffset,
		...draggableProps
	} = useDragWithinBounds({
		boundsRef: editorRef,
		ref,
		onStart: onStartDrag,
		onStop: onStopDrag,
	});

	const {
		isDragging: isEditorDragging,
		context: draggingContext,
		startDragging,
		stopDragging,
	} = useEditorDrag();

	useEditorDrop({ ref, context: ["connectionHandle"] }, () => {
		dispatchPosition();
	});

	/**
	 * This is the primary mechanism by which locations of the
	 * handles are reported back to the store for drawing
	 * the connections between handles.
	 */
	if (!isClone) {
		useLayoutEffect(() => {
			dispatchPosition();
		}, [centerPoint, draggingOffset, selfDraggingOffset]);
		useMouseUp(() => {
			setTimeout(() => {
				dispatchPosition();
			}, 0);
		});
	}

	useLayoutEffect(() => {
		if (attributeName !== name) {
			dispatch(removeConnectionHandlePosition({ name, id }));
			setName(attributeName);
			dispatchPosition();
		}
	}, [attributeName]);

	return (
		<div
			ref={ref}
			className={clsx(
				"BlueprintConnectionHandle",
				`is-${(props?.position === "right" && "right") || "left"}`,
			)}
			onClick={(event) => {
				event.stopPropagation();
			}}
		>
			<Draggable {...draggableProps}>
				<div className="BlueprintConnectionHandle is-clone" />
			</Draggable>
		</div>
	);
}

export default BlueprintConnectionHandle;
