import { memo, useState } from "react";
import Draggable from "react-draggable";

import {
	useDebugRenderCount,
	useDragWithinEditor,
	useEditorDrag,
} from "../../hooks";

const DraggableWithinEditor = memo(
	({
		additionalContext = {},
		children,
		clientId = null,
		context = null,
		onDrag,
		onStartDrag,
		onStopDrag,
	}) => {
		const [isDraggingSelf, setIsDraggingSelf] = useState(false);

		const _onDrag = ({ x, y }) => {
			onDrag && onDrag({ x, y });
		};

		const _onStartDrag = () => {
			setIsDraggingSelf(true);
			startDragging({
				clientId,
				context,
				...additionalContext,
			});
			onStartDrag && onStartDrag();
		};

		const _onStopDrag = () => {
			setIsDraggingSelf(false);
			stopDragging();
			onStopDrag && onStopDrag();
		};

		const draggableProps = useDragWithinEditor({
			onDrag: _onDrag,
			onStart: _onStartDrag,
			onStop: _onStopDrag,
		});

		const { isDragging, startDragging, stopDragging } = useEditorDrag();

		if (isDragging && !isDraggingSelf) {
			return;
		}

		if (process.env.NODE_ENV === "development") {
			useDebugRenderCount("DraggableWithinEditor");
		}

		return <Draggable {...draggableProps}>{children}</Draggable>;
	},
);

export default DraggableWithinEditor;
