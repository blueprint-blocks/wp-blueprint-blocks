import { forwardRef, memo } from "react";
import Draggable from "react-draggable";

import {
	useDebugRenderCount,
	useDragWithinEditor,
	useEditorDrag,
} from "../../hooks";

const DraggableWithinEditor = memo(
	forwardRef(
		(
			{
				additionalContext = {},
				children,
				clientId = null,
				context = null,
				onDrag,
				onStartDrag,
				onStopDrag,
			},
			ref,
		) => {
			const _onDrag = ({ x, y }) => {
				onDrag && onDrag({ x, y });
			};

			const _onStartDrag = () => {
				startDragging({
					clientId,
					context,
					...additionalContext,
				});
				onStartDrag && onStartDrag();
			};

			const _onStopDrag = () => {
				stopDragging();
				onStopDrag && onStopDrag();
			};

			const draggableProps = useDragWithinEditor({
				onDrag: _onDrag,
				onStart: _onStartDrag,
				onStop: _onStopDrag,
			});

			const { startDragging, stopDragging } = useEditorDrag();

			if (process.env.NODE_ENV === "development") {
				useDebugRenderCount("DraggableWithinEditor");
			}

			return <Draggable {...draggableProps}>{children}</Draggable>;
		},
	),
);

export default DraggableWithinEditor;
