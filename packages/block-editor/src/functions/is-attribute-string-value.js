import isAttributeArrayValue from "./is-attribute-array-value";
import isAttributeNullValue from "./is-attribute-null-value";
import isAttributeNumberValue from "./is-attribute-number-value";
import isAttributeObjectValue from "./is-attribute-object-value";

function isAttributeStringValue(value) {
	return (
		!isAttributeNullValue(value) &&
		!isAttributeArrayValue(value) &&
		!isAttributeNumberValue(value) &&
		!isAttributeObjectValue(value)
	);
}

export default isAttributeStringValue;
