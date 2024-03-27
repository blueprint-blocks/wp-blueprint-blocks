import clsx from "clsx";

import { memo, useCallback, useRef } from "react";

import {
	useBlockJson,
	useBlueprint,
	useBlueprintConnectionsDrag,
	useDebugRenderCount,
	useEditorFocus,
	useOnClickOutside,
	useOnDelete,
} from "../../hooks";

import BlueprintAttributeDefault from "../BlueprintAttributeDefault";
import BlueprintAttributeName from "../BlueprintAttributeName";
import BlueprintAttributeType from "../BlueprintAttributeType";
import BlueprintConnectionHandle from "../BlueprintConnectionHandle";

import "./style.css";

const BlueprintAttribute = memo(({ clientId }) => {
	const ref = useRef(null);

	const { hasFocus, setFocus, unsetFocus } = useEditorFocus(clientId);

	const { getAttributeById, removeAttribute } = useBlockJson();

	const { getComponentsByAttributeName, unsetComponentAttribute } =
		useBlueprint();

	const { name: attributeName } = getAttributeById(clientId);

	const onClick = useCallback(
		(event) => {
			event.stopPropagation();
			setFocus({ clientId, context: "attribute" });
		},
		[clientId],
	);

	const { hasFocus: hasDraggingConnectionFocus } =
		useBlueprintConnectionsDrag(ref, {
			attributeName,
			clientId,
			context: "attribute",
		});

	// Remove attribute on delete
	useOnDelete(() => {
		if (hasFocus) {
			const blockComponents = Object.keys(
				getComponentsByAttributeName(attributeName),
			);

			blockComponents.forEach((clientId) => {
				unsetComponentAttribute(clientId, "attributeName");
			});

			removeAttribute(attributeName);
		}
	}, [clientId, hasFocus]);

	// Call hook passing in the ref and a function to call on outside click
	useOnClickOutside(ref, () => {
		unsetFocus();
	});

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintAttribute");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintAttribute", {
				"has-focus": hasFocus || hasDraggingConnectionFocus,
			})}
			onClick={onClick}
		>
			<div class="BlueprintAttribute-focus" />
			<BlueprintConnectionHandle clientId={clientId} context="from" />
			<BlueprintAttributeName clientId={clientId} />
			<BlueprintAttributeType clientId={clientId} />
			<BlueprintAttributeDefault clientId={clientId} />
			<div>
				<span>{"}"}</span>
			</div>
		</div>
	);
});

export default BlueprintAttribute;
