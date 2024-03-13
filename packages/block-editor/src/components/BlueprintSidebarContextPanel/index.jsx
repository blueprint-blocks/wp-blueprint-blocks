import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getBlockComponent,
	setComponentAttribute,
	unsetComponentAttribute,
} from "../../store/block-blueprint";

import { getFocus as getEditorFocus } from "../../store/editor";

import BlueprintContextualAttributeNameHelp from "../BlueprintContextualAttributeNameHelp";
import BlueprintContextualAttributeValueHelp from "../BlueprintContextualAttributeValueHelp";

import "./style.css";

const BlueprintSidebarContextPanel = forwardRef(({ editorRef = null }, ref) => {
	const dispatch = useDispatch();

	const {
		clientId = null,
		context,
		property,
		...currentFocus
	} = useSelector((state) => getEditorFocus(state.editor));

	const { type = "html", ...component } =
		useSelector((state) =>
			getBlockComponent(state.blockBlueprint, clientId),
		) || {};

	const onClickSuggestedValue = ({ attribute, value }) => {
		if (attribute.indexOf(currentFocus?.attributeName) !== -1) {
			dispatch(
				unsetComponentAttribute({
					clientId,
					attribute: currentFocus?.attributeName,
				}),
			);
		}

		dispatch(
			setComponentAttribute({
				clientId,
				attribute,
				value,
			}),
		);
	};

	return (
		<div
			ref={ref}
			className="BlueprintSidebarContextPanel"
			onMouseDown={(event) => {
				event.stopPropagation();
			}}
			onTouchStart={(event) => {
				event.stopPropagation();
			}}
		>
			{context === "component" && (
				<BlueprintContextualAttributeNameHelp
					clientId={clientId}
					componentType={type}
					attributeName={currentFocus?.attributeName}
					onClickSuggestedValue={onClickSuggestedValue}
				/>
			)}
		</div>
	);
});

export default BlueprintSidebarContextPanel;
