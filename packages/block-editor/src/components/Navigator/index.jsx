import clsx from "clsx";
import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { navItems } from "../../data";
import { useDispatchNavRect, useRect, useTutorial } from "../../hooks";
import { hasUnsavedChanges } from "../../store/post-metadata";

import Button from "../Button";

import "./style.css";

const { pluginMetadata = {} } = blueprintBlocksEditorSettings;

const Navigator = ({ activeNavItem, setActiveNavItem, onUpdate }) => {
	const tutorial = useTutorial();

	const ref = useRef(null);
	const updateRef = useRef(null);

	const navItemRefs = navItems.map((_, index) => useRef(null));

	const navItemRects = navItems.map((_, index) =>
		useRect(navItemRefs[index], ref, ["left", "width"]),
	);

	const activeIndicatorRect = useMemo(
		() => navItemRects[activeNavItem],
		[navItemRects],
	);

	const isNavDisabled = useMemo(
		() => tutorial.isActive && tutorial.currentStep !== 5,
		[tutorial.currentStep, tutorial.isActive],
	);

	const isUpdateDisabled = useMemo(
		() => tutorial.isActive && tutorial.currentStep !== 9,
		[tutorial.currentStep, tutorial.isActive],
	);

	const _hasUnsavedChanges = useSelector((state) => {
		if (isUpdateDisabled) {
			return false;
		}
		return hasUnsavedChanges(state.postMetadata);
	});

	const isNavItemDisabled = useCallback(
		(index) => isNavDisabled || (tutorial.isActive && index !== 1),
		[isNavDisabled, tutorial.isActive],
	);

	const _setActiveNavItem = useCallback(
		(index) => {
			if (isNavItemDisabled(index)) {
				return;
			}

			setActiveNavItem(index);
		},
		[isNavDisabled],
	);

	// Forward the ref to the tutorial context
	useLayoutEffect(() => {
		tutorial.forwardRef(navItemRefs[1], 5);
		tutorial.forwardRef(updateRef, 9);
	}, [navItemRefs[1], updateRef]);

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
							"is-disabled": isNavItemDisabled(index),
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
					disabled={!_hasUnsavedChanges}
					label={"Save Changes"}
					onClick={onUpdate}
					style="primary"
				/>
			</div>
		</div>
	);
};

export default Navigator;
