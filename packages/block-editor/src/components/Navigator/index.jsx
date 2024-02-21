import { navItems } from "../../data";

import Button from "../Button";

import "./style.css";

function Navigator({ activeNavItem, setActiveNavItem, onUpdate, onPreview }) {
  return (
    <div className="Navigator">
      <ul>
        {navItems.map(({ label }, index) => (
          <li
            key={index}
            className={(index === activeNavItem && "is-active") || ""}
            onClick={() => setActiveNavItem(index)}
          >
            <span>{label}</span>
          </li>
        ))}
      </ul>
      <div className="Navigator-actions">
        <Button onClick={onPreview} label={"Preview"} />
        <Button onClick={onUpdate} label={"Update"} style="primary" />
      </div>
    </div>
  );
}

export default Navigator;
