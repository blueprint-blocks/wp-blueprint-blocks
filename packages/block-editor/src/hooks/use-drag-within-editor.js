import { useContext, useMemo } from "react";
import { BlueprintEditorContext } from "../contexts";
import useDragWithinBounds from "./use-drag-within-bounds";

const useDragWithinEditor = ({ onDrag, onStart, onStop }) => {
	const editorContext = useContext(BlueprintEditorContext);

	return useDragWithinBounds({
		bounds: editorContext?.ref,
		onDrag,
		onStart,
		onStop,
	});
};

export default useDragWithinEditor;
