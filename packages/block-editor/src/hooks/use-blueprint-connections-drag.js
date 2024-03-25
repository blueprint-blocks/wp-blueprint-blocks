import { useCallback, useMemo } from "react";

import useBlueprint from "./use-blueprint";
import useBlueprintConnections from "./use-blueprint-connections";
import useEditorDrag from "./use-editor-drag";
import useMouseFocus from "./use-mouse-focus";
import useBlockJson from "./use-block-json";

const useBlueprintConnectionsDrag = (
	ref,
	{ attributeName = null, clientId, context = "component" },
) => {
	const hasMouseFocus = useMouseFocus(ref);

	const { getAttributeById } = useBlockJson();
	const { getComponentType, setComponentAttribute, unsetComponentAttribute } =
		useBlueprint();

	let hasAttributeHandle = null;

	if (context === "attribute") {
		const attribute = getAttributeById(clientId);
		hasAttributeHandle = true;
	} else {
		const type = getComponentType(clientId);
		hasAttributeHandle = useMemo(() => type !== "html", [type]);
	}

	if (!hasAttributeHandle) {
		return {};
	}

	const { existingDraggingConnection, newDraggingConnection } =
		useBlueprintConnections();

	const onDrop = useCallback(() => {
		if (existingDraggingConnection) {
			unsetComponentAttribute(
				existingDraggingConnection?.clientId,
				"attributeName",
			);
			setComponentAttribute(
				clientId,
				"attributeName",
				existingDraggingConnection?.attributeName,
			);
		} else if (newDraggingConnection && context === "attribute") {
			setComponentAttribute(
				newDraggingConnection?.clientId,
				"attributeName",
				attributeName,
			);
		} else if (newDraggingConnection) {
			setComponentAttribute(
				clientId,
				"attributeName",
				newDraggingConnection?.attributeName,
			);
		}
	}, [clientId, context, existingDraggingConnection, newDraggingConnection]);

	const { isDragging } = useEditorDrag(
		{ context: ["connectionHandle"], ref },
		onDrop,
	);

	return {
		hasFocus: hasMouseFocus && isDragging,
	};
};

export default useBlueprintConnectionsDrag;
