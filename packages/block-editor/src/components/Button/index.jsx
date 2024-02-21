import classNames from "classnames";

import "./style.css";

const Button = ({ children, label, onClick, style = "secondary" }) => {
  return (
    <button className={classNames("Button", `is-${style}`)} onClick={onClick}>
      {children && <span>{children}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
