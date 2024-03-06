import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getDraggingContext,
	resetDraggingContext,
	startDragging,
	stopDragging,
} from "../store/editor";

const useEditorDrag = () => {
	const dispatch = useDispatch();

	const isDragging = useSelector((state) => state.editor.isDragging);

	const draggingContext = useSelector((state) =>
		getDraggingContext(state.editor),
	);

	const _startDragging = (context) => {
		dispatch(startDragging(context));
	};

	const _stopDragging = useCallback(() => {
		// this is done at the end of the render to prevent click events
		setTimeout(() => {
			dispatch(stopDragging());
			// this is done at the end of the next render to allow
			// pickup by insert or hint components
			setTimeout(() => {
				dispatch(resetDraggingContext());
			}, 0);
		}, 0);
	}, []);

	return useMemo(
		() => ({
			context: draggingContext,
			isDragging,
			startDragging: _startDragging,
			stopDragging: _stopDragging,
		}),
		[draggingContext, isDragging],
	);
};

export default useEditorDrag;
