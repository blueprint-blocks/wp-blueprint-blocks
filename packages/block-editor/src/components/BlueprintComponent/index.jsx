import classNames from "classnames";
import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Draggable from "react-draggable";

import { componentAllowsChildren, pascalize } from "../../functions";
import { useBlockClassName, useDebugRenderCount, useRect } from "../../hooks";
import {
  getBlockComponent,
  startDraggingExistingComponent,
  stopDragging,
  unsetDraggingComponent,
} from "../../store/block-blueprint";

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

  const onStartDrag = () => {
    setIsDragging(true);
    dispatch(startDraggingExistingComponent(clientId));
  };

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

  const onDrag = (event, { x, y }) => {
    setDraggingOffset({ x, y });
  };

  useLayoutEffect(() => {
    ref.current.classList.toggle("is-dragging", isDragging);
  }, [isDragging]);

  const hasAttributeHandle = type !== "html";

  if (type !== "html") {
    tagName = pascalize(type);
  }

  if (process.env.NODE_ENV === "development") {
    useDebugRenderCount("BlueprintComponent");
  }

  return (
    <div
      ref={ref}
      className={classNames("BlueprintComponent", {
        "is-draggable": draggable,
      })}
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
            <BlueprintComponentOpeningTag clientId={clientId}>
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
