import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { validateBlock } from "../../functions";
import { hideSaveDialog } from "../../store/save-dialog";

import LoadingIcon from "../LoadingIcon";

import "./style.css";

function SaveDialog() {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("Saving...");

  const blockJson = useSelector((state) => state.blockJson);

  const validationResults = useMemo(
    () => validateBlock({ blockJson }),
    [blockJson],
  );

  const isValid = useMemo(
    () => validationResults.blockJson.isValid,
    [validationResults],
  );

  const onClose = () => {
    ref?.current?.classList.remove("is-visible");
    setTimeout(() => {
      dispatch(hideSaveDialog());
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      ref?.current?.classList.add("is-visible");
    }, 50);
  }, []);

  useEffect(() => {
    if (isValid === true) {
      setTimeout(() => {
        ref?.current?.classList.remove("is-visible");
      }, 2000);

      setTimeout(() => {
        dispatch(hideSaveDialog());
      }, 2300);
    }
  }, [isValid]);

  return (
    <div ref={ref} className="SaveDialog">
      <div className="SaveDialog-wrap">
        <div className="SaveDialog-window">
          {!isValid && <div className="SaveDialog-close" onClick={onClose} />}
          <div className="SaveDialog-content">
            {isLoading && <LoadingIcon />}
            {!isLoading && isValid && <p>{"Successfully saved."}</p>}
            {validationResults && (
              <div>
                {validationResults.blockJson.errors.map(
                  ({ warningMessage }) => (
                    <p>{warningMessage}</p>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveDialog;
