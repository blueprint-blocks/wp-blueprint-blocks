import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { delimiterize } from "../../functions";

import {
  getBlockName,
  getBlockNamespace,
  setName,
  setTitle,
  validateName,
  validateNamespace,
} from "../../store/block-json";

import {
  hasValidationErrors,
  isNewPost,
  setChanged,
} from "../../store/post-metadata";

import EditableString from "../EditableString";
import Tooltip from "../Tooltip";

import "./style.css";

const defaultBlockNamespace =
  blueprintBlocksEditorSettings?.blockMetadata?.blockNamespace ||
  "blueprint-blocks";

const BlockNameField = ({ onBlur, onFocus }) => {
  const dispatch = useDispatch();

  const blockName = useSelector((state) => getBlockName(state.blockJson));

  const blockNamespace = useSelector((state) =>
    getBlockNamespace(state.blockJson),
  );

  const delimiterizedBlockTitle = useSelector((state) =>
    delimiterize(state.blockJson.title),
  );

  const showValidationErrors = useSelector(
    (state) =>
      hasValidationErrors(state.postMetadata) || !isNewPost(state.postMetadata),
  );

  const setBlockName = (newBlockName) => {
    if (blockName === delimiterizedBlockTitle) {
      //dispatch(setTitle())
    }
    dispatch(setName(`${blockNamespace}/${delimiterize(newBlockName)}`));
    dispatch(setChanged(true));
  };

  const setBlockNamespace = (newBlockNamespace) => {
    if (newBlockNamespace === "") {
      dispatch(setName(`${defaultBlockNamespace}/${blockName}`));
    } else {
      dispatch(setName(`${delimiterize(newBlockNamespace)}/${blockName}`));
    }
    dispatch(setChanged(true));
  };

  const showNameInvalid = useMemo(
    () => showValidationErrors && !validateName(blockName),
    [showValidationErrors, blockName],
  );

  const showNamespaceInvalid = useMemo(
    () => showValidationErrors && !validateNamespace(blockNamespace),
    [showValidationErrors, blockNamespace],
  );

  return (
    <div className="BlockNameField">
      <div className="BlockNameField-input">
        <EditableString
          className="BlockNameField-namespace"
          invalid={showNamespaceInvalid}
          onBlur={onBlur}
          onChange={setBlockNamespace}
          onFocus={onFocus}
          value={blockNamespace}
        />
        <div class="BlockNameField-seperator">{"/"}</div>
        <EditableString
          className="BlockNameField-name"
          invalid={showNameInvalid}
          onBlur={onBlur}
          onChange={setBlockName}
          onFocus={onFocus}
          placeholder={"enter-a-block-name..."}
          value={blockName}
        />
      </div>
      <Tooltip data="blockJson.name" position="below" />
    </div>
  );
};

export default BlockNameField;
