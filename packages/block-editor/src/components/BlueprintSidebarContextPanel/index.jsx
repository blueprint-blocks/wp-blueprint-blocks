import { forwardRef, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useBlueprint } from "../../hooks";

import { getFocus as getEditorFocus } from "../../store/editor";

import BlueprintContextualAttributeNameHelp from "../BlueprintContextualAttributeNameHelp";
import BlueprintContextualAttributeValueHelp from "../BlueprintContextualAttributeValueHelp";

import "./style.css";

const BlueprintSidebarContextPanel = memo(
	forwardRef(({}, ref) => {
		const dispatch = useDispatch();

		const {
			getComponentType,
			setComponentAttribute,
			unsetComponentAttribute,
		} = useBlueprint();

		const {
			clientId = null,
			context,
			property,
			...currentFocus
		} = useSelector((state) => getEditorFocus(state.editor));

		const type = getComponentType(clientId);

		const onClickSuggestedValue = ({ attributeName, attributeValue }) => {
			if (attributeName.indexOf(currentFocus?.attributeName) !== -1) {
				unsetComponentAttribute(clientId, currentFocus?.attributeName);
			}

			setComponentAttribute(clientId, attributeName, attributeValue);
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
	}),
);

export default BlueprintSidebarContextPanel;
