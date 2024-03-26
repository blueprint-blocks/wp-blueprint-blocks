import { useContext, useEffect, useMemo } from "react";
import useMouseFocus from "./use-mouse-focus";
import { BlueprintEditorContext } from "../contexts";

const useEditorDrop = (props = {}, onDrop = null) => {
	const { context = null, ref = null } = props;
	const hasFocus = useMouseFocus(ref);

	const { currentDraggingContext, isDragging } = useContext(
		BlueprintEditorContext,
	);

	const contextArray = useMemo(
		() => (Array.isArray(context) && context) || [context],
		[context],
	);

	const isWatchingContext = useMemo(
		() =>
			context === null ||
			contextArray.includes(currentDraggingContext?.context),
		[contextArray],
	);

	const wasDragging = useMemo(
		() => currentDraggingContext?.context !== null,
		[currentDraggingContext],
	);

	useEffect(() => {
		if (
			hasFocus === true &&
			isDragging === false &&
			isWatchingContext === true &&
			wasDragging === true
		) {
			onDrop && onDrop();
		}
	}, [hasFocus, isDragging, isWatchingContext, wasDragging, ref]);
};

export default useEditorDrop;
