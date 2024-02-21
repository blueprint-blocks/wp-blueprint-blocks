import { useLayoutEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";

import { navItems } from "../../data";
import { useRect } from "../../hooks";
import { setNavRect } from "../../store/app";

import Button from "../Button";

import "./style.css";

const { pluginMetadata = {} } = blueprintBlocksEditorSettings;

function Navigator({ activeNavItem, setActiveNavItem, onUpdate, onPreview }) {
  const dispatch = useDispatch();

  const ref = useRef(null);
  const rect = useRect(ref, null);

  const navItemRefs = navItems.map(() => useRef(null));
  const navItemRects = navItems.map((_, index) =>
    useRect(navItemRefs[index], ref, ["left", "width"]),
  );

  const activeIndicatorRect = useMemo(
    () => navItemRects[activeNavItem],
    [navItemRects],
  );

  useLayoutEffect(() => {
    dispatch(setNavRect(rect));
  }, [rect]);

  return (
    <div ref={ref} className="Navigator">
      <ul>
        {navItems.map(({ label, icon }, index) => (
          <li
            ref={navItemRefs[index]}
            key={index}
            className={(index === activeNavItem && "is-active") || ""}
            onClick={() => setActiveNavItem(index)}
          >
            <div>
              {icon && (
                <img
                  src={`${pluginMetadata?.url}/assets/images/font-awesome/${icon}.svg`}
                />
              )}
              {label}
            </div>
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
