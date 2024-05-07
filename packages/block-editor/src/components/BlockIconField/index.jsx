import clsx from "clsx";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { dashicons } from "../../data";
import { useOnClickOutside, useTutorial } from "../../hooks";

import { setIcon } from "../../store/block-json";
import { setChanged } from "../../store/post-metadata";

import EditableString from "../EditableString";

import "./style.css";

function BlockIconField({ onBlur, onFocus }) {
	const dispatch = useDispatch();

	const tutorial = useTutorial({ step: 3 });

	const blockIcon = useSelector((state) => state.blockJson?.icon || "");

	const ref = useRef(null);
	const inputRef = useRef(null);

	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [searchFilter, setSearchFilter] = useState("");

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
	};

	const onClick = () => {
		if (tutorial.isNotActiveStep) {
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

	// Forward the ref to the tutorial context
	useLayoutEffect(() => {
		tutorial.forwardRef(ref);
	}, [ref]);

	return (
		<div className="BlockIconField-wrap">
			<div
				ref={ref}
				className={clsx("BlockIconField", {
					"is-disabled": tutorial.isNotActiveStep,
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
						{filteredDashicons.map((group) => (
							<div key={group.label}>
								<div className="BlockIconField-heading">
									{group.label}
								</div>
								<div className="BlockIconField-icons">
									{group.icons.map(
										({ icon, label, value }) => (
											<div
												key={`${group.label}-${icon}`}
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
