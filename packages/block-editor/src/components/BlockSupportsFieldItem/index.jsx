import { useMemo } from "react";

import CheckboxField from "../CheckboxField";

import "./style.css";

const BlockSupportsFieldItem = ({
  defaultValueWhenChecked = true,
  description,
  name,
  label,
  learnMoreLink,
  setValue,
  subProperties,
  size,
  type = "boolean",
  value = false,
}) => {
  const isChecked = useMemo(() => {
    if (type === "boolean") {
      return value;
    } else if (type === "array") {
      return value?.length > 0;
    } else if (type === "object") {
      return Object.values(value)?.length > 0;
    }
  }, [type, value]);

  const setPropertyValue = (newPropertyValue) => {
    if (newPropertyValue === false) {
      setValue(false);
    } else if (type === "boolean") {
      setValue(true);
    } else {
      setValue(defaultValueWhenChecked);
    }
  };

  const setSubPropertyValue = (subProperty, newSubPropertyValue) => {
    if (newSubPropertyValue === false && type === "array") {
      setValue(
        [...value].filter(
          (subPropertyValue) => subPropertyValue !== subProperty.name,
        ),
      );
    } else if (newSubPropertyValue === true && type === "array") {
      setValue([...value, subProperty.name]);
    }
  };

  return (
    <CheckboxField
      label={label}
      size={size}
      value={isChecked}
      setValue={setPropertyValue}
    >
      {description && (
        <>
          <p>{description}</p>
          <br />
        </>
      )}
      {learnMoreLink && <a href={learnMoreLink}>{"Learn more"}</a>}
      {subProperties?.length > 0 && (
        <div className="CheckboxField-list">
          {subProperties.map((subProperty, index) => (
            <BlockSupportsFieldItem
              {...subProperty}
              key={index}
              size={"small"}
              value={
                (type === "array" && value?.includes(subProperty.name)) ||
                (type === "object" && value?.[name])
              }
              setValue={(value) => setSubPropertyValue(subProperty, value)}
            />
          ))}
        </div>
      )}
    </CheckboxField>
  );
};

export default BlockSupportsFieldItem;
