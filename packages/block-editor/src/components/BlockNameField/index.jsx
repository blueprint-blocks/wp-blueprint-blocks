import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { delimiterize } from "../../functions";

import {
  getBlockName,
  getBlockNamespace,
  setName,
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

const BlockNameField = () => {
  const dispatch = useDispatch();

  const blockName = useSelector((state) => getBlockName(state.blockJson));

  const blockNamespace = useSelector((state) =>
    getBlockNamespace(state.blockJson),
  );

  const showValidationErrors = useSelector(
    (state) =>
      hasValidationErrors(state.postMetadata) || !isNewPost(state.postMetadata),
  );

  const setBlockName = (newBlockName) => {
    dispatch(setName(`${blockNamespace}/${delimiterize(newBlockName)}`));
    dispatch(setChanged(true));
  };

  const setBlockNamespace = (newBlockNamespace) => {
    if (newBlockNamespace === "") {
      dispatch(setName(`blueprint-block/${blockName}`));
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
          onChange={setBlockNamespace}
          value={blockNamespace}
        />
        <div class="BlockNameField-seperator">{"/"}</div>
        <EditableString
          className="BlockNameField-name"
          invalid={showNameInvalid}
          onChange={setBlockName}
          placeholder={"enter-a-block-name..."}
          value={blockName}
        />
      </div>
      <Tooltip data="blockJson.name" position="below" />
    </div>
  );
};

export default BlockNameField;
