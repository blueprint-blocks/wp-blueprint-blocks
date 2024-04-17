import { attributeTypes } from "../../data";

import {
	isArray,
	isAttributeArrayValue,
	isAttributeNullValue,
	isAttributeNumberValue,
	isAttributeObjectValue,
	isAttributeStringValue,
	isObject,
} from "../../functions";

const { registeredBlocks } =
	blueprintBlocksEditorSettings?.editorMetadata || {};

const validateAttributeDefault = (attribute) => {
	const allowsNullDefault =
		(attributeTypes?.[attribute.type]?.allowsNull === false && false) ||
		true;

	if (
		attribute.type === "array" &&
		!isAttributeArrayValue(attribute.default) &&
		!isAttributeNullValue(attribute.default)
	) {
		return false;
	} else if (
		attribute.type === "object" &&
		!isAttributeObjectValue(attribute.default) &&
		!isAttributeNullValue(attribute.default)
	) {
		return false;
	} else if (
		validateAttributeType(attribute) &&
		!allowsNullDefault &&
		!attribute.default?.length
	) {
		return false;
	}

	return true;
};

const validateAttributeDefaults = (attributes) => {
	for (let [_, attribute] of Object.entries(attributes)) {
		if (!validateAttributeDefault(attribute)) {
			return false;
		}
	}
	return true;
};

const validateAttributeName = (attribute) => {
	return attribute?.name?.length > 0;
};

const validateAttributeNames = (attributes) => {
	for (let [_, attribute] of Object.entries(attributes)) {
		if (!validateAttributeName(attribute)) {
			return false;
		}
	}
	return true;
};

const validateAttributeType = (attribute) => {
	return attribute?.type in attributeTypes;
};

const validateAttributeTypes = (attributes) => {
	for (let [_, attribute] of Object.entries(attributes)) {
		if (!validateAttributeType(attribute)) {
			return false;
		}
	}
	return true;
};

const validateFullNameFormat = (value) => {
	return !!value.match(/[a-z][a-z0-9]*\/[a-z0-9]+/);
};

const validateNameClash = (value) => {
	return !registeredBlocks.includes(value);
};

const validateName = (value) => {
	return !!value.match(/[a-z0-9]+/);
};

const validateNamespace = (value) => {
	return value !== "core" && !!value.match(/[a-z][a-z0-9]+/);
};

const validateRequired = (value) => {
	return !!value.match(/[a-z][a-z0-9]*\/[a-z0-9]+/);
};

const validateTitle = (value) => {
	return value.length > 0 && value.length < 80;
};

export {
	validateAttributeDefault,
	validateAttributeDefaults,
	validateAttributeName,
	validateAttributeNames,
	validateAttributeType,
	validateAttributeTypes,
	validateFullNameFormat,
	validateName,
	validateNamespace,
	validateNameClash,
	validateRequired,
	validateTitle,
};
