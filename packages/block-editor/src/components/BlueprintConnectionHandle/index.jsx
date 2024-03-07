import clsx from "clsx";
import { useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";

import {
	useCenterPoint,
	useDragWithinBounds,
	useEditorDrop,
} from "../../hooks";

import {
	setPosition as setConnectionHandlePosition,
	removePosition as removeConnectionHandlePosition,
} from "../../store/connection-handles";

import {
	getDraggingContext,
	resetDraggingContext,
	startDragging,
	stopDragging,
} from "../../store/editor";

import "./style.css";

function BlueprintConnectionHandle({
	attributeName,
	clientId = null,
	componentId = null,
	context = "to",
	draggingOffset = { x: 0, y: 0 },
	editorRef = null,
	isClone = false,
	isDragging = false,
	...props
}) {
	const dispatch = useDispatch();

	const id = useId();
	const ref = useRef(null);
	const centerPoint = useCenterPoint(ref, editorRef);

	const [name, setName] = useState(attributeName);

	const editorDraggingContext = useSelector((state) =>
		getDraggingContext(state.editor),
	);

	const onStartDrag = () => {
		dispatch(
			startDragging({
				attributeName,
				clientId,
				componentId,
				context: "connectionHandle",
				handleContext: context,
			}),
		);
	};

	const onStopDrag = () => {
		dispatch(
			setConnectionHandlePosition({
				name,
				id: clientId || id,
				componentId,
				context: (context === "from" && "from") || "to",
				x: centerPoint.x,
				y: centerPoint.y,
			}),
		);

		// this is done at the end of the render to prevent click events
		setTimeout(() => {
			dispatch(stopDragging());
			// this is done at the end of the next render to allow
			// pickup by other components
			setTimeout(() => {
				resetDraggingContext();
			}, 0);
		}, 0);
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

	const currentPosition = useMemo(() => {
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
	}, [
		centerPoint,
		draggingOffset,
		isDragging,
		isDraggingSelf,
		selfDraggingOffset,
	]);

	useEditorDrop({ ref, context: ["connectionHandle"] }, () => {
		console.log("on drop:", editorDraggingContext);
	});

	useLayoutEffect(() => {
		if ((isClone && !isDragging) || (!isClone && isDragging)) {
			dispatch(
				removeConnectionHandlePosition({
					name,
					id: clientId || id,
				}),
			);
		} else {
			dispatch(
				setConnectionHandlePosition({
					name,
					id: clientId || id,
					componentId,
					context: (context === "from" && "from") || "to",
					x: currentPosition.x,
					y: currentPosition.y,
				}),
			);
		}
	}, [currentPosition, isDragging, isDraggingSelf]);

	useLayoutEffect(() => {
		if (attributeName !== name) {
			dispatch(
				removeConnectionHandlePosition({
					name,
					id: clientId || id,
				}),
			);
		}

		setName(attributeName);
	}, [attributeName]);

	return (
		<div
			ref={ref}
			className={clsx(
				"BlueprintConnectionHandle",
				`is-${(props?.position === "right" && "right") || "left"}`,
				{
					hide: (isClone && !isDragging) || (!isClone && isDragging),
				},
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
