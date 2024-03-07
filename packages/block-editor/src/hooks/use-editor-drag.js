import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useEditorDrop from "./use-editor-drop";

import {
	getDraggingContext,
	resetDraggingContext,
	startDragging,
	stopDragging,
} from "../store/editor";

const useEditorDrag = (props = {}, onDrop = null) => {
	const { context = null, ref = null } = props;

	const dispatch = useDispatch();

	const contextArray = useMemo(
		() => (Array.isArray(context) && context) || [context],
		[context],
	);

	const draggingContext = useSelector((state) =>
		getDraggingContext(state.editor),
	);

	const isWatchingContext = useMemo(
		() =>
			context === null || contextArray.includes(draggingContext?.context),
		[contextArray, draggingContext],
	);

	const isDragging = useSelector((state) => state.editor.isDragging);

	const _isDragging = useMemo(
		() => isDragging && isWatchingContext,
		[isDragging, isWatchingContext],
	);

	const _startDragging = useCallback((context) => {
		dispatch(startDragging(context));
	}, []);

	const _stopDragging = useCallback(() => {
		// this is done at the end of the render to prevent click events
		setTimeout(() => {
			dispatch(stopDragging());
			// this is done at the end of the next render to allow
			// pickup by insert or hint components
			setTimeout(() => {
				//dispatch(resetDraggingContext());
			}, 1000);
		}, 0);
	}, []);

	useEditorDrop({ context, ref }, onDrop);

	return useMemo(
		() => ({
			context: draggingContext,
			isDragging: _isDragging,
			startDragging: _startDragging,
			stopDragging: _stopDragging,
		}),
		[draggingContext, isDragging],
	);
};

export default useEditorDrag;
