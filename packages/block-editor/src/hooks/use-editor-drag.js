import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getDraggingContext } from "../store/editor";

const useEditorDrag = () => {
	const isDragging = useSelector((state) => state.editor.isDragging);

	const draggingContext = useSelector((state) =>
		getDraggingContext(state.editor),
	);

	return useMemo(
		() => ({
			isDragging,
			context: draggingContext,
		}),
		[draggingContext, isDragging],
	);
};

export default useEditorDrag;
