import clsx from "clsx";
import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";

import { componentAllowsChildren, pascalize } from "../../functions";

import {
  useBlockClassName,
  useDebugRenderCount,
  useOnClickOutside,
  useRect,
} from "../../hooks";

import {
  getBlockComponent,
  startDraggingExistingComponent,
  stopDragging,
  unsetDraggingComponent,
} from "../../store/block-blueprint";

import {
  componentHasFocus,
  setFocus as setComponentFocus,
  unsetFocus as unsetComponentFocus,
} from "../../store/editor";

import BlueprintAttributeHandle from "../BlueprintAttributeHandle";
import BlueprintComponentClosingTag from "../BlueprintComponentClosingTag";
import BlueprintComponentOpeningTag from "../BlueprintComponentOpeningTag";

import "./style.css";

function BlueprintComponent({
  clientId,
  editorRef = null,
  children = [],
  indent = 0,
  draggable = true,
}) {
  const blockClassName = useBlockClassName();

  const dispatch = useDispatch();

  let {
    type = "html",
    tagName = "div",
    attributeName = "",
    className = [],
    style = {},
    ...component
  } = useSelector((state) => getBlockComponent(state.blockBlueprint, clientId));

  let _componentHasFocus = useSelector((state) =>
    componentHasFocus(state.editor, clientId),
  );

  const allowsChildren = componentAllowsChildren(type, tagName);

  const ref = useRef(null);
  const rect = useRect(ref);

  const editorRect = useRef(editorRef);

  const openRef = useRef(null);
  const closeRef = useRef(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [draggingOffset, setDraggingOffset] = useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  const onClick = (event) => {
    event.stopPropagation();
    dispatch(setComponentFocus({ clientId, context: "component" }));
  };

  const onClickOutside = () => {
    if (_componentHasFocus) {
      dispatch(unsetComponentFocus());
    }
  };

  const onDrag = (event, { x, y }) => {
    if (isDragging === false) {
      setIsDragging(true);
      dispatch(startDraggingExistingComponent(clientId));
    }
    setDraggingOffset({ x, y });
  };

  const onStartDrag = () => {};

  const onStopDrag = () => {
    setIsDragging(false);
    setPosition({ x: 0, y: 0 });
    setDraggingOffset({ x: 0, y: 0 });
    dispatch(stopDragging());
    // this is done at the end of the browser render to
    // allow pickup by insert or hint components
    setTimeout(() => {
      dispatch(unsetDraggingComponent());
    }, 0);
  };

  const hasAttributeHandle = type !== "html";

  if (type !== "html") {
    tagName = pascalize(type);
  }

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, onClickOutside);

  if (process.env.NODE_ENV === "development") {
    useDebugRenderCount("BlueprintComponent");
  }

  return (
    <div
      ref={ref}
      className={clsx("BlueprintComponent", {
        "is-draggable": draggable,
        "is-dragging": isDragging,
        "has-focus": _componentHasFocus,
      })}
      onClick={onClick}
      style={{ "--indent": indent }}
    >
      <BlueprintComponentOpeningTag
        clientId={clientId}
        ref={openRef}
        editorRef={editorRef}
      >
        {hasAttributeHandle && (
          <BlueprintAttributeHandle
            editorRef={editorRef}
            componentId={`${clientId}`}
            clientId={`${clientId}-1`}
            attributeName={attributeName}
            isDragging={isDragging}
            context="to"
            position="left"
          />
        )}
      </BlueprintComponentOpeningTag>

      {allowsChildren && !!children && (
        <div className="BlueprintComponent-body">{children}</div>
      )}

      {allowsChildren && (
        <BlueprintComponentClosingTag
          clientId={clientId}
          ref={closeRef}
          editorRef={editorRef}
        />
      )}

      {draggable && (
        <Draggable
          axis="both"
          bounds={{
            bottom: editorRect.bottom - rect.bottom,
            left: editorRect.left - rect.left,
            right: editorRect.right - rect.right,
            top: editorRect.top - rect.top,
          }}
          position={position}
          onStart={onStartDrag}
          onStop={onStopDrag}
          onDrag={onDrag}
        >
          <div className="BlueprintComponent is-clone">
            <BlueprintComponentOpeningTag clientId={clientId} disabled={true}>
              {hasAttributeHandle && (
                <BlueprintAttributeHandle
                  editorRef={editorRef}
                  clientId={`${clientId}-2`}
                  attributeName={attributeName}
                  draggingOffset={draggingOffset}
                  isClone={true}
                  isDragging={isDragging}
                  context="to"
                  position="left"
                />
              )}
            </BlueprintComponentOpeningTag>

            {allowsChildren && !!children && (
              <div className="BlueprintComponent-body">{children}</div>
            )}

            {allowsChildren && (
              <BlueprintComponentClosingTag clientId={clientId} />
            )}
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default BlueprintComponent;
