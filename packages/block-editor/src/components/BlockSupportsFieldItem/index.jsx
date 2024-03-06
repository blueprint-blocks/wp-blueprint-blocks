import { useCallback, useMemo } from "react";

import CheckboxField from "../CheckboxField";

import "./style.css";

const BlockSupportsFieldItem = ({
	defaultValueWhenChecked = true,
	description,
	name,
	label,
	learnMoreLink,
	setValue,
	subProperties,
	size,
	type = "boolean",
	value = false,
}) => {
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
		if (newPropertyValue === false) {
			setValue(false);
		} else if (type === "boolean") {
			setValue(true);
		} else {
			setValue(defaultValueWhenChecked);
		}
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

	return (
		<div className="BlockSupportsFieldItem">
			<CheckboxField
				label={label}
				size={size}
				value={isChecked}
				setValue={setPropertyValue}
			>
				{(description || learnMoreLink) && (
					<p>
						{description}
						{description && learnMoreLink && <br />}
						{learnMoreLink && (
							<a href={learnMoreLink}>{"Learn more"}</a>
						)}
					</p>
				)}
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
