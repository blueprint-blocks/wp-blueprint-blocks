import clsx from "clsx";
import { useCallback, useMemo, useRef, useState } from "react";

import EditableString from "../EditableString";
import FieldLabel from "../FieldLabel";

import { isArray } from "../../functions";
import { useOnClickOutside } from "../../hooks";

import "./style.css";

function ListField({
	disabled = false,
	label,
	max = null,
	placeholder,
	onBlur,
	onFocus,
	tooltip,
	value = [],
	setValue,
}) {
	const ref = useRef(null);

	const [hasFocus, setHasFocus] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	function setFocus(index) {
		if (hasFocus === false || index !== currentIndex) {
			setHasFocus(true);
			setCurrentIndex(index);
			onFocus(index);
		}

		if (index === value?.length || 0) {
			setValue([...value, ""]);
		} else if (value?.[(value?.length || 0) - 1] === "") {
			setValue(value.slice(0, -1));
		}
	}

	const setBlur = (index) => {
		if (hasFocus === true && index === currentIndex) {
			setHasFocus(false);
			setCurrentIndex(0);
			onBlur(index);
		}

		if (value?.[(value?.length || 0) - 1] === "") {
			setValue(value.slice(0, -1));
		}
	};

	const onChange = (indexValue, index) => {
		const newValue = [...value];
		if (index > newValue.length) {
			newValue.push(indexValue);
		} else {
			newValue[index] = indexValue;
		}
		setValue([...newValue].filter((n) => n.length > 0));
	};

	const itemList = useMemo(() => {
		let itemList = [];

		if (max === null) {
			itemList = (isArray(value) && [...value]) || [value];
		} else {
			itemList = value.slice(0, max);
		}

		if (itemList[itemList.length - 1] !== "") {
			itemList.push("");
		}

		return itemList;
	}, [max, value]);

	useOnClickOutside(ref, () => {
		if (hasFocus === true) {
			setBlur(currentIndex);
		}
	});

	return (
		<div
			ref={ref}
			className={clsx("ListField", { "is-disabled": disabled })}
			onClick={() => setFocus(Math.min(value?.length || 0, max))}
		>
			{label && <FieldLabel label={label} tooltip={tooltip} />}
			<div className="ListField-list">
				{((max > 0 && itemList.slice(0, max)) || itemList).map(
					(itemValue, index) => (
						<div
							key={index}
							onClick={(event) => event.stopPropagation()}
							onFocus={() => setFocus(index)}
							onBlur={() => setBlur(index)}
						>
							{disabled === true &&
								index < itemList.length - 1 && (
									<div className="ListField-value">
										{itemValue}
									</div>
								)}
							{disabled === true &&
								index === itemList.length - 1 && (
									<div className="ListField-placeholder">
										{placeholder}
									</div>
								)}
							{disabled !== true && (
								<EditableString
									key={index}
									placeholder={placeholder}
									value={itemValue}
									onChange={(indexValue) =>
										onChange(indexValue, index)
									}
								/>
							)}
						</div>
					),
				)}
			</div>
		</div>
	);
}

export default ListField;
