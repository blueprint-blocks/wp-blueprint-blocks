import classNames from "classnames";
import { useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";

import FieldLabel from "../FieldLabel";

import "./style.css";

function SelectField({
  name,
  label,
  onBlur,
  onFocus,
  options,
  tooltip,
  value,
  setValue,
}) {
  const ref = useRef(null);

  const [isSelectOpen, setSelectOpen] = useState(false);

  const selectedLabel = useMemo(() => {
    for (let option of options) {
      if (option.value === value) {
        return option.label;
      }
    }
    return null;
  }, [value]);

  const onClick = () => {
    setSelectOpen(true);
    onFocus();
  };

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => {
    if (isSelectOpen === true) {
      setSelectOpen(false);
      onBlur();
    }
  });

  return (
    <div
      ref={ref}
      className={classNames("SelectField", { "is-open": isSelectOpen })}
      onClick={onClick}
    >
      {label && <FieldLabel htmlFor={name} label={label} tooltip={tooltip} />}
      <div className="SelectField-value">{selectedLabel}</div>
      <div className="SelectField-options">
        {options.map(({ label, value }, index) => (
          <div
            key={index}
            onClick={(event) => {
              event.stopPropagation();
              setValue(value);
              setSelectOpen(false);
              onBlur();
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectField;
