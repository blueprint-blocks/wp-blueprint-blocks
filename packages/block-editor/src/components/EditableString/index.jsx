import classNames from "classnames";
import { memo, useCallback, useMemo, useRef, useState } from "react";
import ContentEditable from "react-contenteditable";

import "./style.css";

const EditableString = memo(
  ({
    allowEnter = false,
    className = "",
    invalid = false,
    multiLine = false,
    onChange,
    onDelete,
    onFocus,
    onBlur,
    placeholder = "",
    rows = 1,
    value = "",
  }) => {
    const ref = useRef(null);
    const contentRef = useRef(null);
    const [hasFocus, setHasFocus] = useState(false);

    const _value = useMemo(() => String(value || ""), [value]);

    const _onBlur = () => {
      setHasFocus(false);
      onBlur && onBlur();
    };

    const _onChange = ({ target }) => {
      let newValue = String(target?.value || "").replace(/\n/g, " ");
      onChange && onChange(newValue);
    };

    const _onFocus = () => {
      setHasFocus(true);
      onFocus && onFocus();
    };

    const onKeyDown = useCallback(
      (event) => {
        if (event.key === "Backspace" && _value.length === 0) {
          onDelete && onDelete();
        }
      },
      [_value],
    );

    return (
      <div
        ref={ref}
        data-testid="editable-string"
        className={classNames("EditableString", className, {
          "has-focus": hasFocus,
          "has-value": _value.length > 0,
          "is-invalid": invalid,
          "is-multiline": multiLine,
        })}
        onKeyDown={onKeyDown}
        style={{
          "--rows": (multiLine && rows) || 1,
        }}
      >
        {_value.length === 0 && (
          <div
            className="placeholder"
            data-testid="editable-string/placeholder"
          >
            {placeholder}
          </div>
        )}
        <ContentEditable
          data-testid="editable-string/content-editable"
          innerRef={contentRef}
          html={html}
          onChange={_onChange}
          onBlur={_onBlur}
          onFocus={_onFocus}
          onKeyDown={(event) => {
            if (event.key === "Enter" && allowEnter === false) {
              event.preventDefault();
              event.stopPropagation();
            }
          }}
        />
      </div>
    );
  },
);

export default EditableString;
