import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";

import FieldLabel from "../FieldLabel";

import "./style.css";

function SearchSelectField({
	name,
	label,
	onBlur,
	onFocus,
	options = [],
	tooltip,
	value = null,
	setValue,
}) {
	const ref = useRef();

	// State for our select dropdown
	const [isSelectOpen, setSelectOpen] = useState(false);

	const currentOption = useMemo(() => {
		for (let i = 0; i < options.length; i++) {
			if (options[i].value === value) {
				return options[i];
			}
		}
		return null;
	}, [options, value]);

	const onClick = () => {
		setSelectOpen(true);
		onFocus && onFocus();
	};

	const onSelectOption = (event) => {
		event.stopPropagation();
		setValue(event.target.dataset?.value);
		setSelectOpen(false);
		onBlur && onBlur();
	};

	useLayoutEffect(() => {
		ref.current.classList.toggle("is-open", isSelectOpen);
	}, [isSelectOpen]);

	// Call hook passing in the ref and a function to call on outside click
	useOnClickOutside(ref, () => {
		if (isSelectOpen === true) {
			setSelectOpen(false);
			onBlur && onBlur();
		}
	});

	return (
		<div ref={ref} className="SearchSelectField" onClick={onClick}>
			{label && (
				<FieldLabel htmlFor={name} label={label} tooltip={tooltip} />
			)}
			<div className="SearchSelectField-value">
				{currentOption && (
					<>
						{currentOption?.icon && (
							<span class={currentOption.icon} />
						)}
						{currentOption.label}
					</>
				)}
			</div>
			<div className="SearchSelectField-options">
				{options.map(({ icon, label, value }, index) => (
					<div
						key={index}
						data-value={value}
						onClick={onSelectOption}
					>
						{icon && <span class={icon} />}
						{label}
					</div>
				))}
			</div>
		</div>
	);
}

export default SearchSelectField;
