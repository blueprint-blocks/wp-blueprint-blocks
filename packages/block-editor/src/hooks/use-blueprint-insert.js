import { useDispatch } from "react-redux";
import useEditorDrag from "./use-editor-drag";

import {
	insertNewComponentAtPosition,
	moveComponentToPosition,
} from "../store/block-blueprint";

const useBlueprintInsert = () => {
	const dispatch = useDispatch();
	const { context: draggingContext, resetDraggingContext } = useEditorDrag();

	return ({ context = "edit", ancestry = [] }) => {
		if (draggingContext?.context === "existingComponent") {
			dispatch(
				moveComponentToPosition({
					clientId: draggingContext?.clientId,
					context,
					position: ancestry,
				}),
			);
			resetDraggingContext();
		} else if (draggingContext?.context === "newComponent") {
			dispatch(
				insertNewComponentAtPosition({
					component: draggingContext?.component,
					context,
					position: ancestry,
				}),
			);
			resetDraggingContext();
		}
	};
};

export default useBlueprintInsert;
