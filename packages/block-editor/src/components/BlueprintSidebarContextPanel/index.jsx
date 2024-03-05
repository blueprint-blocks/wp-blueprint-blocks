import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getBlockComponent,
  setComponentAttribute,
} from "../../store/block-blueprint";

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
  } = useSelector((state) => state.editor.currentFocus || {});

  const { type = "html", ...component } =
    useSelector((state) => getBlockComponent(state.blockBlueprint, clientId)) ||
    {};

  const onClickSuggestedValue = ({ attribute, value }) => {
    console.log(clientId, attribute, value);

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
