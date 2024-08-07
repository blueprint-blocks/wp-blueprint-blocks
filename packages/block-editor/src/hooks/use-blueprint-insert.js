import { useDispatch } from "react-redux";

import useBlockJson from "./use-block-json";
import useEditorDrag from "./use-editor-drag";
import useTutorial from "./use-tutorial";

import { camelize, getComponentProperties } from "../functions";

import {
	insertNewComponentAtPosition,
	moveComponentToPosition,
} from "../store/block-blueprint";

const useBlueprintInsert = () => {
	const dispatch = useDispatch();
	const tutorial = useTutorial();

	const { addAttribute, getUniqueAttributeName } = useBlockJson();
	const { context: draggingContext, resetDraggingContext } = useEditorDrag();

	const component = draggingContext?.component || {};
	const componentType = component?.type || "html";

	const componentProperties = getComponentProperties(
		componentType,
		component.tagName || "div",
	);

	const newAttributeName = getUniqueAttributeName(camelize(componentType));

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
			if (componentType !== "html") {
				component.attributeName = newAttributeName;
				addAttribute(newAttributeName, {
					type: "string",
					default: "",
					...(componentProperties?.blockAttribute || {}),
				});
			}

			dispatch(
				insertNewComponentAtPosition({
					component: draggingContext?.component,
					context,
					position: ancestry,
				}),
			);
			resetDraggingContext();
		}

		if (tutorial.isActive && tutorial.currentStep === 6) {
			tutorial.goToNextStep();
		}
	};
};

export default useBlueprintInsert;
