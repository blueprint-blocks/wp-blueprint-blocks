import { useCallback } from "react";

import useBlueprintInsert from "./use-blueprint-insert";
import useEditorDrag from "./use-editor-drag";
import useMouseFocus from "./use-mouse-focus";

const useBlueprintDrag = (ref, { ancestry = [], context = "edit" }) => {
	const blueprintInsert = useBlueprintInsert();
	const hasMouseFocus = useMouseFocus(ref);

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
