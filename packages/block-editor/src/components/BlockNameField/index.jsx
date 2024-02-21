import { useDispatch, useSelector } from "react-redux";

import { delimiterize } from "../../functions";
import { setName } from "../../store/block-json";

import EditableString from "../EditableString";
import Tooltip from "../Tooltip";

import "./style.css";

const BlockNameField = () => {
  const dispatch = useDispatch();

  const [blockNamespace = "", blockName = ""] = useSelector((state) =>
    (state.blockJson?.name || "").split("/"),
  );

  const setBlockName = (newBlockName) => {
    dispatch(setName(`${blockNamespace}/${delimiterize(newBlockName)}`));
  };

  const setBlockNamespace = (newBlockNamespace) => {
    if (newBlockNamespace === "") {
      dispatch(setName(`blueprint-block/${blockName}`));
    } else {
      dispatch(setName(`${delimiterize(newBlockNamespace)}/${blockName}`));
    }
  };

  return (
    <div className="BlockNameField">
      <EditableString
        className="BlockNameField-namespace"
        onChange={setBlockNamespace}
        value={blockNamespace}
      />
      <div class="BlockNameField-seperator">{"/"}</div>
      <EditableString
        className="BlockNameField-name"
        onChange={setBlockName}
        placeholder={"enter-a-block-name..."}
        value={blockName}
      />
      <Tooltip
        text={
          "The name for a block is a unique string that identifies a block. Names have to be structured as namespace/block-name, where namespace is the name of your plugin or theme."
        }
      />
    </div>
  );
};

export default BlockNameField;
