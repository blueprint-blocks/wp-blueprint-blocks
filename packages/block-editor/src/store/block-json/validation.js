const { registeredBlocks } =
	blueprintBlocksEditorSettings?.editorMetadata || {};

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
	validateFullNameFormat,
	validateName,
	validateNamespace,
	validateNameClash,
	validateRequired,
	validateTitle,
};
