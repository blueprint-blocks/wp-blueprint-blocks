import { useMemo } from "react";

import useBlueprint from "./use-blueprint";
import useBlueprintConnections from "./use-blueprint-connections";
import useEditorDrag from "./use-editor-drag";
import useMouseFocus from "./use-mouse-focus";

const useBlueprintConnectionsDrag = (ref, clientId) => {
	const hasMouseFocus = useMouseFocus(ref);
	const { getComponentType, setComponentAttribute, unsetComponentAttribute } =
		useBlueprint();
	const type = getComponentType(clientId);
	const hasAttributeHandle = useMemo(() => type !== "html", [type]);

	if (!hasAttributeHandle) {
		return {};
	}

	const { draggingExistingConnection, draggingNewConnection } =
		useBlueprintConnections();

	const { isDragging } = useEditorDrag(
		{ context: ["connectionHandle"], ref },
		() => {
			if (draggingExistingConnection) {
				unsetComponentAttribute(
					draggingExistingConnection?.clientId,
					"attributeName",
				);
				setComponentAttribute(
					clientId,
					"attributeName",
					draggingExistingConnection?.attributeName,
				);
			} else if (draggingNewConnection) {
				setComponentAttribute(
					clientId,
					"attributeName",
					draggingNewConnection?.attributeName,
				);
			}
		},
	);

	return {
		hasFocus: hasMouseFocus && isDragging,
	};
};

export default useBlueprintConnectionsDrag;
