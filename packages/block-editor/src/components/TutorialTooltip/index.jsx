import clsx from "clsx";
import {
	forwardRef,
	memo,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

import { TutorialContext } from "../../contexts";
import { tooltips } from "../../data";

import {
	getObjectProperty,
	parseMarkdown,
	replaceTokens,
} from "../../functions";

import { useAppRect, useBlockJson, useNavRect, useRect } from "../../hooks";

import Button from "../Button";

import "./style.css";

const TutorialTooltip = memo(
	forwardRef(
		(
			{ step = null, left = null, position = "above", right = null },
			parentRef,
		) => {
			const tooltipRef = useRef(null);

			const tooltipRect = useRect(tooltipRef, null, ["height"]);
			//const parentRect = useRect(parentRef, null, ["bottom", "top"]);

			const [isVisible, setIsVisible] = useState(false);

			const appRect = useAppRect();
			const navRect = useNavRect();

			const tutorialContext = useContext(TutorialContext);

			const { blockJson } = useBlockJson();

			const _label = useMemo(
				() => getObjectProperty(tooltips, `tutorial.step${step}.label`),
				[step],
			);

			const _text = useMemo(() => {
				let _text = getObjectProperty(
					tooltips,
					`tutorial.step${step}.text`,
				);

				return parseMarkdown(
					replaceTokens(_text, {
						block: {
							...blockJson,
							namespace: blockJson.name.split("/")?.[0],
							name: blockJson.name.split("/")?.[1],
						},
					}),
				);
			}, [blockJson, step]);

			const _width = useMemo(
				() => getObjectProperty(tooltips, `tutorial.step${step}.width`),
				[step],
			);

			const style = useMemo(() => {
				const style = { "--width": `${_width}px` };
				if (left) {
					style["--left"] = `${left}px`;
				}
				if (right) {
					style["--right"] = `${right}px`;
				}
				return style;
			}, [left, right]);

			useEffect(() => {
				if (!isVisible && step === tutorialContext.currentStep) {
					setIsVisible(true);
				} else if (isVisible && step !== tutorialContext.currentStep) {
					setIsVisible(false);
				} else if (isVisible && !tutorialContext.isActive) {
					setIsVisible(false);
				}
			}, [step, tutorialContext]);

			return (
				<div
					ref={tooltipRef}
					className={clsx("TutorialTooltip", `position-${position}`, {
						"has-label": _label,
						"is-visible": isVisible,
					})}
					style={style}
				>
					<div className="TutorialTooltip-text">
						{_label && (
							<div className="TutorialTooltip-label">
								{_label}
							</div>
						)}
						<p dangerouslySetInnerHTML={{ __html: _text }} />
					</div>
					<div className="TutorialTooltip-actions">
						<div>
							<p className="TutorialTooltip-skip">
								Done? Click here to skip.
							</p>
						</div>
						<Button
							label="Got it!"
							style={["small", "white"]}
							onClick={tutorialContext.goToNextStep}
						/>
					</div>
				</div>
			);
		},
	),
);

export default TutorialTooltip;
