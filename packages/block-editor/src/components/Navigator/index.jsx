import clsx from "clsx";
import { useCallback, useContext, useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { TutorialContext } from "../../contexts";
import { navItems } from "../../data";
import { useDispatchNavRect, useRect } from "../../hooks";
import { hasUnsavedChanges } from "../../store/post-metadata";

import Button from "../Button";

import "./style.css";

const { pluginMetadata = {} } = blueprintBlocksEditorSettings;

const Navigator = ({ activeNavItem, setActiveNavItem, onUpdate }) => {
	const tutorialContext = useContext(TutorialContext);

	const ref = useRef(null);

	const updateRef = tutorialContext?.focusRefs?.[8] || useRef(null);

	const navItemRefs = navItems.map((_, index) => {
		if (index === 1) {
			return tutorialContext?.focusRefs?.[4] || useRef(null);
		}
		return useRef(null);
	});

	const navItemRects = navItems.map((_, index) =>
		useRect(navItemRefs[index], ref, ["left", "width"]),
	);

	const activeIndicatorRect = useMemo(
		() => navItemRects[activeNavItem],
		[navItemRects],
	);

	const isUpdateDisabled = useSelector((state) => {
		if (tutorialContext.isActive && tutorialContext.currentStep !== 9) {
			return true;
		}
		return !hasUnsavedChanges(state.postMetadata);
	});

	const _setActiveNavItem = useCallback(
		(index) => {
			if (tutorialContext.isActive && tutorialContext.currentStep !== 5) {
				return;
			}

			// Move on to the next step in the tutorial if the user clicks the tab
			if (tutorialContext.isActive && tutorialContext.currentStep === 5) {
				tutorialContext.goToNextStep();
			}

			setActiveNavItem(index);
		},
		[tutorialContext],
	);

	const isDisabled = useCallback(
		(index) =>
			tutorialContext.isActive &&
			(tutorialContext.currentStep !== 5 || index !== 1),
		[tutorialContext],
	);

	useDispatchNavRect(ref);

	return (
		<div ref={ref} className="Navigator">
			<ul>
				{navItems.map(({ label, icon }, index) => (
					<li
						ref={navItemRefs[index]}
						key={index}
						className={clsx({
							"is-active": index === activeNavItem,
							"is-disabled": isDisabled(index),
						})}
						onClick={() => _setActiveNavItem(index)}
					>
						<div className="Navigator-item">
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
					ref={updateRef}
					disabled={isUpdateDisabled}
					label={"Save Changes"}
					onClick={onUpdate}
					style="primary"
				/>
			</div>
		</div>
	);
};

export default Navigator;
