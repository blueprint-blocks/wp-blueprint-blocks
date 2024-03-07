import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import useMouseFocus from "./use-mouse-focus";
import { getDraggingContext } from "../store/editor";

const useEditorDrop = (props = {}, onDrop) => {
	const { context = null, ref = null } = props;
	const hasFocus = useMouseFocus(ref);

	const draggingContext = useSelector((state) =>
		getDraggingContext(state.editor),
	);

	const isDragging = useSelector((state) => state.editor.isDragging);

	const contextArray = useMemo(
		() => (Array.isArray(context) && context) || [context],
		[context],
	);

	const isWatchingContext = useMemo(
		() =>
			context === null || contextArray.includes(draggingContext?.context),
		[contextArray],
	);

	const wasDragging = useMemo(
		() => draggingContext !== null,
		[draggingContext],
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
	}, [hasFocus, isDragging, isWatchingContext, wasDragging]);
};

export default useEditorDrop;
