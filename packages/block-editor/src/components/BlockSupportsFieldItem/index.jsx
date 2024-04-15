import { useCallback, useLayoutEffect, useMemo, useRef } from "react";

import { useTutorial } from "../../hooks";

import CheckboxField from "../CheckboxField";

import "./style.css";

const BlockSupportsFieldItem = ({
	label,
	name,
	tooltip,
	setValue,
	subProperties,
	size,
	type = "boolean",
	value = false,
}) => {
	const ref = useRef(null);

	const tutorial = useTutorial({ step: 4 });

	const isChecked = useMemo(() => {
		if (type === "boolean") {
			return value;
		} else if (type === "array") {
			return value?.length > 0;
		} else if (type === "object") {
			return Object.values(value)?.length > 0;
		}
	}, [type, value]);

	const isSubPropertyChecked = useCallback(
		(subProperty) => {
			if (type === "array") {
				return value?.includes && value.includes(subProperty?.name);
			} else if (type === "object") {
				return value?.[subProperty?.name] !== false;
			}
			return false;
		},
		[type, value],
	);

	const setPropertyValue = (newPropertyValue) => {
		setValue(newPropertyValue);
	};

	const setSubPropertyValue = (subProperty, newSubPropertyValue) => {
		if (type === "object") {
			setValue({ ...value, [subProperty?.name]: newSubPropertyValue });
		} else if (newSubPropertyValue === true && type === "array") {
			setValue([...value, subProperty?.name]);
		} else if (newSubPropertyValue === false && type === "array") {
			setValue(
				[...value].filter(
					(subPropertyValue) =>
						subPropertyValue !== subProperty?.name,
				),
			);
		}
	};

	const disabled = useMemo(
		() => name !== "color" && tutorial.isNotActiveStep,
		[name, tutorial.isNotActiveStep],
	);

	// Forward the ref to the tutorial context
	useLayoutEffect(() => {
		if (name === "color") {
			tutorial.forwardRef(ref);
		}
	}, [name, ref]);

	return (
		<div ref={ref} className="BlockSupportsFieldItem">
			<CheckboxField
				disabled={disabled}
				label={label}
				size={size}
				tooltip={tooltip}
				value={isChecked}
				setValue={setPropertyValue}
			>
				{isChecked && subProperties?.length > 0 && (
					<div className="BlockSupportsFieldItem-list">
						{subProperties.map((subProperty, index) => (
							<BlockSupportsFieldItem
								{...subProperty}
								key={index}
								size={"small"}
								value={isSubPropertyChecked(subProperty)}
								setValue={(value) =>
									setSubPropertyValue(subProperty, value)
								}
							/>
						))}
					</div>
				)}
			</CheckboxField>
		</div>
	);
};

export default BlockSupportsFieldItem;
