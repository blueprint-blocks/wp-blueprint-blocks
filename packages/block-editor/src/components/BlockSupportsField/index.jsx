import { useDispatch, useSelector } from "react-redux";

import { blockSupports as blockSupportsProperties } from "../../data";
import { setSupportsProperty } from "../../store/block-json";

import BlockSupportsFieldItem from "../BlockSupportsFieldItem";

import "./style.css";

const BlockSupportsField = () => {
  const dispatch = useDispatch();

  const blockSupports = useSelector((state) => state.blockJson?.supports || {});

  const setPropertyValue = (property, value) => {
    dispatch(setSupportsProperty({ property, value }));
  };

  return (
    <div className="BlockSupportsField">
      {blockSupportsProperties.map((property, index) => (
        <BlockSupportsFieldItem
          {...property}
          key={index}
          value={blockSupports?.[property.name]}
          setValue={(value) => setPropertyValue(property, value)}
        />
      ))}
    </div>
  );
};

export default BlockSupportsField;
