import { useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDebugRenderCount, useRect } from "../../hooks";
import { setSize as setEditorSize } from "../../store/editor";
import { getComponentListDepth } from "../../store/block-blueprint";
import { showUpsellDialog } from "../../store/upsell-dialog";

import BlueprintAttributeList from "../BlueprintAttributeList";
import BlueprintBlockEdit from "../BlueprintBlockEdit";
import BlueprintConnections from "../BlueprintConnections";
import BlueprintColumn from "../BlueprintColumn";
import Button from "../Button";

import "./style.css";
import "./style-debug.css";

function BlueprintEditor() {
  const dispatch = useDispatch();

  const column2Depth = useSelector((state) =>
    getComponentListDepth(state.blockBlueprint, "edit"),
  );

  const ref = useRef(null);
  const scrollRef = useRef(null);
  const wrapRef = useRef(null);

  const wrapRect = useRect(wrapRef, null, ["height", "width"]);

  const onClickUpsellBanner = () => {
    dispatch(showUpsellDialog());
  };

  useLayoutEffect(() => {
    dispatch(
      setEditorSize({
        height: wrapRect.height,
        width: wrapRect.width,
      }),
    );
  }, [wrapRect]);

  useLayoutEffect(() => {
    ref.current.style.setProperty("--column-2-depth", column2Depth);
  }, [column2Depth]);

  if (process.env.NODE_ENV === "development") {
    useDebugRenderCount("BlueprintEditor");
  }

  return (
    <div ref={ref} className="BlueprintEditor">
      <div ref={scrollRef} className="BlueprintEditor-scroll">
        <div ref={wrapRef} className="BlueprintEditor-wrap">
          <div className="BlueprintEditor-grid" />

          <BlueprintConnections />

          <div className="BlueprintEditor-columns">
            <BlueprintColumn label="Block Attributes">
              <BlueprintAttributeList editorRef={scrollRef} />
            </BlueprintColumn>

            <BlueprintColumn label="Block Edit">
              <BlueprintBlockEdit editorRef={scrollRef} />
            </BlueprintColumn>
          </div>
        </div>
      </div>
      <div className="BlueprintEditor-banner" onClick={onClickUpsellBanner}>
        <p>Ready to level up with advanced features?</p>
        <Button label={"Learn More"} style={["large", "primary", "rounded"]} />
      </div>
    </div>
  );
}

export default BlueprintEditor;
