import { useLayoutEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { navItems } from "../../data";
import { useRect } from "../../hooks";
import { setNavRect } from "../../store/app";
import { hasUnsavedChanges } from "../../store/post-metadata";

import Button from "../Button";

import "./style.css";

const { pluginMetadata = {} } = blueprintBlocksEditorSettings;

function Navigator({ activeNavItem, setActiveNavItem, onUpdate }) {
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

  const isUpdateDisabled = useSelector(
    (state) => !hasUnsavedChanges(state.postMetadata),
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
        <Button
          disabled={isUpdateDisabled}
          label={"Update"}
          onClick={onUpdate}
          style="primary"
        />
      </div>
    </div>
  );
}

export default Navigator;
