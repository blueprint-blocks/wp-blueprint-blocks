import { useMemo, useRef } from "react";

import { navItems } from "../../data";
import { useRect } from "../../hooks";

import Button from "../Button";

import "./style.css";

function Navigator({ activeNavItem, setActiveNavItem, onUpdate, onPreview }) {
  const ref = useRef(null);

  const navItemRefs = navItems.map(() => useRef(null));
  const navItemRects = navItems.map((_, index) =>
    useRect(navItemRefs[index], ref, ["left", "width"]),
  );

  const activeIndicatorRect = useMemo(
    () => navItemRects[activeNavItem],
    [navItemRects],
  );

  return (
    <div ref={ref} className="Navigator">
      <ul>
        {navItems.map(({ label }, index) => (
          <li
            ref={navItemRefs[index]}
            key={index}
            className={(index === activeNavItem && "is-active") || ""}
            onClick={() => setActiveNavItem(index)}
          >
            <span>{label}</span>
          </li>
        ))}
        <div
          className="Navigator-activeIndicator"
          style={{
            "--left": activeIndicatorRect.left,
            "--width": activeIndicatorRect.width,
          }}
        />
      </ul>
      <div className="Navigator-actions">
        <Button onClick={onPreview} label={"Preview"} />
        <Button onClick={onUpdate} label={"Update"} style="primary" />
      </div>
    </div>
  );
}

export default Navigator;
