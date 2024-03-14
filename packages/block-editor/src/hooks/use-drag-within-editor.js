import { useContext } from "react";
import { BlueprintEditorContext } from "../contexts";
import useDragWithinBounds from "./use-drag-within-bounds";

const useDragWithinEditor = ({ ref = null, onDrag, onStart, onStop }) => {
	const editorContext = useContext(BlueprintEditorContext);

	return useDragWithinBounds({
		boundsRef: editorContext?.ref,
		ref,
		onDrag,
		onStart,
		onStop,
	});
};

export default useDragWithinEditor;
