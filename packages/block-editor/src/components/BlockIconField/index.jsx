import clsx from "clsx";
import { useContext, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TutorialContext } from "../../contexts";
import { dashicons } from "../../data";
import { useOnClickOutside } from "../../hooks";

import { setIcon } from "../../store/block-json";
import { setChanged } from "../../store/post-metadata";

import EditableString from "../EditableString";

import "./style.css";

function BlockIconField({ onBlur, onFocus }) {
	const dispatch = useDispatch();

	const tutorialContext = useContext(TutorialContext);

	const blockIcon = useSelector((state) => state.blockJson?.icon || "");

	const ref = tutorialContext?.focusRefs?.[2] || useRef(null);
	const inputRef = useRef(null);

	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [searchFilter, setSearchFilter] = useState("");

	const disabled = useMemo(
		() => tutorialContext.isActive && tutorialContext.currentStep < 3,
		[tutorialContext],
	);

	const selectedIcon = useMemo(() => {
		for (let dashicon of dashicons) {
			if (dashicon.value === blockIcon) {
				return dashicon.icon;
			}
		}
		return "dashicons dashicons-star-filled";
	}, [blockIcon]);

	const filteredDashicons = useMemo(() => {
		return dashicons
			.map((group) => ({
				label: group.label,
				icons: group.icons.filter(
					({ label, keywords }) =>
						group.label.toLowerCase().indexOf(searchFilter) !==
							-1 ||
						label.toLowerCase().indexOf(searchFilter) !== -1 ||
						keywords
							.join(" ")
							.toLowerCase()
							.indexOf(searchFilter) !== -1,
				),
			}))
			.filter((group) => group.icons.length > 0);
	}, [searchFilter]);

	const setBlockIcon = (event, newBlockIcon) => {
		event.stopPropagation();

		dispatch(setIcon(newBlockIcon));
		dispatch(setChanged(true));

		setSearchFilter("");
		setDropdownOpen(false);

		onBlur();

		// Move on to the next step in the tutorial if the user has started typing a name
		if (tutorialContext.isActive && tutorialContext.currentStep === 3) {
			tutorialContext.goToNextStep();
		}
	};

	const onClick = () => {
		if (disabled) {
			return;
		}
		setDropdownOpen(true);
		onFocus();
		setTimeout(() => {
			inputRef?.current.focus();
		}, 0);
	};

	// Call hook passing in the ref and a function to call on outside click
	useOnClickOutside(ref, () => {
		if (isDropdownOpen === true) {
			setSearchFilter("");
			setDropdownOpen(false);
			onBlur();
		}
	});

	return (
		<div className="BlockIconField-wrap">
			<div
				ref={ref}
				className={clsx("BlockIconField", {
					"is-disabled": disabled,
					"is-open": isDropdownOpen,
				})}
				onClick={onClick}
			>
				<span className={selectedIcon} />
				<div className="BlockIconField-dropdown">
					<EditableString
						ref={inputRef}
						className="BlockIconField-filter"
						onChange={(value) =>
							setSearchFilter(value.toLowerCase())
						}
						placeholder={"Filter icons..."}
						value={searchFilter}
					/>
					<div className="BlockIconField-options">
						{filteredDashicons.map((group, index) => (
							<div key={index}>
								<div className="BlockIconField-heading">
									{group.label}
								</div>
								<div className="BlockIconField-icons">
									{group.icons.map(
										({ icon, label, value }) => (
											<div
												key={index}
												onClick={(event) =>
													setBlockIcon(event, value)
												}
												title={label}
											>
												<div>
													<span className={icon} />
												</div>
											</div>
										),
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlockIconField;
