import classNames from "classnames";
import { useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveNewBlock, updateBlock } from "../../api";
import { useRect } from "../../hooks";
import { setRect as setAppRect } from "../../store/app";
import { getRawJson as getRawBlueprintJson } from "../../store/block-blueprint";
import { setPostId } from "../../store/post-metadata";
import { showSaveDialog } from "../../store/save-dialog";

import Navigator from "../Navigator";
import PageBlockJson from "../PageBlockJson";
import PageBlueprint from "../PageBlueprint";
import PageEditorCss from "../PageEditorCss";
import PageViewCss from "../PageViewCss";
import SaveDialog from "../SaveDialog";
import UpsellDialog from "../UpsellDialog";

import "./style.css";
import "./style-debug.css";

function App() {
  const dispatch = useDispatch();

  const ref = useRef(null);
  const appRect = useRect(ref, null);

  const [activeNavItem, setActiveNavItem] = useState(0);

  const postId = useSelector((state) => state.postMetadata.postId);

  const postType = useSelector((state) => state.postType);

  const blockBlueprint = useSelector((state) => state.blockBlueprint);

  const blockJson = useSelector((state) => state.blockJson);

  const blockEditorCss = useSelector((state) => state.blockEditorCss.raw);

  const blockViewCss = useSelector((state) => state.blockViewCss.raw);

  const saveDialogIsVisible = useSelector((state) => state.saveDialog.visible);

  const upsellDialogIsVisible = useSelector(
    (state) => state.upsellDialog.visible,
  );

  const onUpdate = () => {
    dispatch(showSaveDialog());

    if (postId === null) {
      saveNewBlock({
        postType,
        blockBlueprint: getRawBlueprintJson(blockBlueprint),
        blockJson,
        blockEditorCss,
        blockViewCss,
      }).then(({ id }) => {
        dispatch(setPostId(id));
        window.history.pushState(
          { id },
          `Edit Block < Flickerbox - WordPress`,
          `/wp-admin/post.php?post=${id}&action=edit`,
        );
      });
    } else {
      updateBlock({
        postId,
        postType,
        blockBlueprint: getRawBlueprintJson(blockBlueprint),
        blockJson,
        blockEditorCss,
        blockViewCss,
      });
    }
  };

  useLayoutEffect(() => {
    dispatch(setAppRect(appRect));
  }, [appRect]);

  return (
    <div
      ref={ref}
      className={classNames("App", {
        "is-debug": process.env.NODE_ENV === "development",
      })}
    >
      <Navigator
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        onUpdate={onUpdate}
      />
      {activeNavItem === 0 && <PageBlockJson />}
      {activeNavItem === 1 && <PageBlueprint />}
      {activeNavItem === 2 && <PageViewCss />}
      {activeNavItem === 3 && <PageEditorCss />}
      {saveDialogIsVisible && <SaveDialog />}
      {upsellDialogIsVisible && <UpsellDialog />}
    </div>
  );
}

export default App;
