import classNames from "classnames";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../Logo";

import { hideUpsellDialog } from "../../store/upsell-dialog";

import "./style.css";

function UpsellDialog() {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const onClose = () => {
    ref?.current?.classList.remove("is-visible");
    setTimeout(() => {
      dispatch(hideUpsellDialog());
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => {
      ref?.current?.classList.add("is-visible");
    }, 50);
  }, []);

  return (
    <div ref={ref} className="UpsellDialog">
      <div className="UpsellDialog-wrap">
        <div className="UpsellDialog-window">
          <div className="UpsellDialog-close" onClick={onClose} />

          <div className="UpsellDialog-content">
            <Logo />

            <p>
              {
                "Ready to level up you block building game? Blueprint Blocks is the native Gutenberg platform for web professionals that has near-zero learning curve but is extremely powerful. Transparent annual pricing with ongoing updates and support."
              }
            </p>

            <div className="UpsellDialog-try">
              {
                "Try Blueprint Blocks Pro risk-free for 30 days. Switch plans at any time."
              }
            </div>
          </div>

          <div className="UpsellDialog-tiles">
            <div className="UpsellDialog-tile">
              <div>
                <h3>Single Site</h3>
                <p>Utilize all pro features on a single site.</p>
              </div>

              <div className="UpsellDialog-pricing">
                $149 <span>per year</span>
              </div>

              <div className="UpsellDialog-secondaryButton">Upgrade Now</div>
            </div>
            <div className="UpsellDialog-tile">
              <div>
                <h3>Unlimited Sites</h3>
                <p>Utilize all pro features on unlimited sites.</p>
              </div>

              <div className="UpsellDialog-pricing">
                $299 <span>per year</span>
              </div>

              <div className="UpsellDialog-primaryButton">Upgrade Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpsellDialog;
