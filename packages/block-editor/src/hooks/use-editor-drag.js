import { useContext, useMemo } from "react";
import useEditorDrop from "./use-editor-drop";
import { BlueprintEditorContext } from "../contexts";

const useEditorDrag = (props = {}, onDrop = null) => {
	const { context = null, ref = null } = props;

	const {
		currentDraggingContext,
		isDragging,
		resetDraggingContext,
		startDragging,
		stopDragging,
	} = useContext(BlueprintEditorContext);

	const contextArray = useMemo(
		() => (Array.isArray(context) && context) || [context],
		[context],
	);

	const isWatchingContext = useMemo(
		() =>
			context === null ||
			contextArray.includes(currentDraggingContext?.context),
		[contextArray, currentDraggingContext],
	);

	const _isDragging = useMemo(
		() => isDragging && isWatchingContext,
		[isDragging, isWatchingContext],
	);

	if (onDrop !== null) {
		useEditorDrop({ context, ref }, onDrop);
	}

	return useMemo(
		() => ({
			context: currentDraggingContext,
			isDragging: _isDragging,
			resetDraggingContext,
			startDragging,
			stopDragging,
		}),
		[currentDraggingContext, isDragging],
	);
};

export default useEditorDrag;
