import { useCallback } from "react";

import useBlueprintInsert from "./use-blueprint-insert";
import useEditorDrag from "./use-editor-drag";
import useMouseFocus from "./use-mouse-focus";

const useBlueprintDrag = (ref, { ancestry = [], context = "edit", id }) => {
	const blueprintInsert = useBlueprintInsert();
	const hasMouseFocus = useMouseFocus(ref);

	if (ancestry.toString() === "0,3,1,0") {
		console.log("useBlueprintDrag debug", ref?.current, id);
	}

	const onDrop = useCallback(() => {
		blueprintInsert({ ancestry, context });
	}, [ancestry, context, ref]);

	const { isDragging } = useEditorDrag(
		{ context: ["existingComponent", "newComponent"], ref },
		onDrop,
	);

	return {
		hasFocus: hasMouseFocus && isDragging,
	};
};

export default useBlueprintDrag;
