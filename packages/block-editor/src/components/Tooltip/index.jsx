import classNames from "classnames";
import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { tooltips } from "../../data";
import { getObjectProperty } from "../../functions";
import { useRect } from "../../hooks";

import "./style.css";

function Tooltip({
  data = "",
  direction = "left",
  label,
  position = "above",
  required = false,
  text,
  url,
  width = 240,
}) {
  const ref = useRef(null);
  const messageRef = useRef(null);

  const rect = useRect(ref, null, ["bottom", "top"]);
  const messageRect = useRect(messageRef, null, ["height"]);
  const appRect = useSelector((state) => state.app.rect);
  const navRect = useSelector((state) => state.app.navRect);

  const _position = useMemo(() => {
    if (rect.top - messageRect.height < navRect.bottom) {
      return "below";
    } else if (rect.bottom + messageRect.height > appRect.bottom) {
      return "above";
    }
    return position;
  }, [position, rect, appRect, navRect]);

  const _label = useMemo(
    () => getObjectProperty(tooltips, `${data}.label`) || label,
    [data, label],
  );
  const _required = useMemo(
    () => getObjectProperty(tooltips, `${data}.required`) || required,
    [data, required],
  );
  const _text = useMemo(
    () => getObjectProperty(tooltips, `${data}.text`) || text,
    [data, text],
  );
  const _url = useMemo(
    () => getObjectProperty(tooltips, `${data}.url`) || url,
    [data, url],
  );
  const _width = useMemo(
    () => getObjectProperty(tooltips, `${data}.width`) || width,
    [data, width],
  );

  return (
    <div ref={ref} className="Tooltip" style={{ "--width": _width }}>
      <span>{"?"}</span>
      <div
        ref={messageRef}
        className={classNames(
          "Tooltip-message",
          `is-${direction}`,
          `is-${_position}`,
          { "has-label": _label },
        )}
      >
        {_label && <div className="Tooltip-label">{_label}</div>}
        <div className="Tooltip-text">
          <p>{_text}</p>
          {_required && <div className="Tooltip-required">{"Required"}</div>}
        </div>
        {_url && <a className="Tooltip-link" href={_url} target="_blank" />}
      </div>
      {_url && <a className="Tooltip-link" href={_url} target="_blank" />}
    </div>
  );
}

export default Tooltip;
