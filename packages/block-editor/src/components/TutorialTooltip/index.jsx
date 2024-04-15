import clsx from "clsx";
import { memo, useContext, useEffect, useMemo, useRef, useState } from "react";

import { AppContext } from "../../contexts";
import { tooltips } from "../../data";

import {
	getObjectProperty,
	parseMarkdown,
	replaceTokens,
} from "../../functions";

import { useBlockJson, useRect, useTutorial } from "../../hooks";

import Button from "../Button";

import "./style.css";

const TutorialTooltip = memo(({ onNextStep, step = null }) => {
	const tooltipRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const appContext = useContext(AppContext);
	const tutorial = useTutorial();

	const appRect = useRect(appContext.appRef, null, ["left", "right", "top"]);

	const focusRef = tutorial.useRef(step);
	const focusRect = useRect(focusRef, appContext.appRef, [
		"left",
		"right",
		"top",
	]);

	const { blockJson } = useBlockJson();

	const label = useMemo(
		() => getObjectProperty(tooltips, `tutorial.step${step}.label`),
		[step],
	);

	const position = useMemo(
		() => getObjectProperty(tooltips, `tutorial.step${step}.position`),
		[step],
	);

	const text = useMemo(() => {
		let text = getObjectProperty(tooltips, `tutorial.step${step}.text`);

		return parseMarkdown(
			replaceTokens(text, {
				block: {
					...blockJson,
					namespace: blockJson.name.split("/")?.[0],
					name: blockJson.name.split("/")?.[1],
				},
			}),
		);
	}, [blockJson, step]);

	const left = useMemo(
		() => getObjectProperty(tooltips, `tutorial.step${step}.left`),
		[step],
	);

	const top = useMemo(
		() => getObjectProperty(tooltips, `tutorial.step${step}.top`),
		[step],
	);

	const width = useMemo(
		() => getObjectProperty(tooltips, `tutorial.step${step}.width`),
		[step],
	);

	const style = useMemo(() => {
		const style = {
			"--top": `${(focusRect?.top || 0) + (top || 0)}px`,
			"--width": `${width}px`,
		};

		if (position === "right") {
			style["--left"] = `${(focusRect?.right || 0) + (left || 0)}px`;
		} else if (position === "left") {
			style["--right"] =
				`${(appRect?.right || 0) - (appRect?.left || 0) - (focusRect?.left || 0) + (left || 0)}px`;
		}

		return style;
	}, [focusRect, position, top, width]);

	const _onNextStep = () => {
		onNextStep && onNextStep();
		tutorial.goToNextStep();
	};

	useEffect(() => {
		if (!isVisible && "top" in focusRect) {
			setIsVisible(true);
		}
	}, [focusRect]);

	useEffect(() => {
		if (!isVisible && step === tutorial.currentStep) {
			setIsVisible(true);
		} else if (isVisible && step !== tutorial.currentStep) {
			setIsVisible(false);
		} else if (isVisible && !tutorial.isActive) {
			setIsVisible(false);
		}
	}, [step, tutorial.isActive, tutorial.currentStep]);

	return (
		<div
			ref={tooltipRef}
			className={clsx("TutorialTooltip", `position-${position}`, {
				"has-label": label,
				"is-visible": isVisible,
			})}
			style={style}
		>
			<div className="TutorialTooltip-text">
				{label && <div className="TutorialTooltip-label">{label}</div>}
				<p dangerouslySetInnerHTML={{ __html: text }} />
			</div>
			<div className="TutorialTooltip-actions">
				<div>
					<p
						className="TutorialTooltip-skip"
						onClick={tutorial.endTutorial}
					>
						Done? Click here to skip.
					</p>
				</div>
				<Button
					label="Got it!"
					style={["small", "white"]}
					onClick={_onNextStep}
				/>
			</div>
		</div>
	);
});

export default TutorialTooltip;
