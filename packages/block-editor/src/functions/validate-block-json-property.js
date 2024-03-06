import * as blockJsonValidationFunctions from "../store/block-json/validation";

const validateBlockJsonProperty = ({
	propertyName,
	propertyValue,
	validationFunction,
	warningMessage,
}) => {
	let isValid = true;

	if (validationFunction in blockJsonValidationFunctions) {
		isValid =
			blockJsonValidationFunctions[validationFunction](propertyValue);
	}

	return {
		propertyName: propertyName,
		warningMessage: (!isValid && warningMessage) || "",
		isValid: isValid,
	};
};

export default validateBlockJsonProperty;
