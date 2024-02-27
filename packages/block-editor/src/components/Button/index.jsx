import classNames from "classnames";

import "./style.css";

const Button = ({
  children,
  disabled = false,
  label,
  onClick,
  style = "secondary",
}) => {
  return (
    <button
      className={classNames("Button", `is-${style}`, {
        "is-disabled": disabled,
      })}
      onClick={(event) => !disabled && onClick(event)}
    >
      {children && <span>{children}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
