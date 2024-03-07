import { useDispatch } from "react-redux";

import useEditorDrag from "./use-editor-drag";

import {
	insertNewComponentAtPosition,
	moveComponentToPosition,
} from "../store/block-blueprint";

import { resetDraggingContext } from "../store/editor";

const useBlueprintInsert = () => {
	const dispatch = useDispatch();
	const { context: draggingContext } = useEditorDrag();

	return ({ context = "edit", position = [] }) => {
		if (draggingContext?.context === "existingComponent") {
			dispatch(
				moveComponentToPosition({
					clientId: draggingContext?.clientId,
					context,
					position,
				}),
			);
			dispatch(resetDraggingContext());
		} else if (draggingContext?.context === "newComponent") {
			dispatch(
				insertNewComponentAtPosition({
					component: draggingContext?.component,
					context,
					position,
				}),
			);
			dispatch(resetDraggingContext());
		}
	};
};

export default useBlueprintInsert;