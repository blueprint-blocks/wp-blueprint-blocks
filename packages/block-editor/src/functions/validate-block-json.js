import { blockJsonValidation } from "../data";
import validateBlockJsonProperty from "./validate-block-json-property";

const validateBlockJson = (blockJson) => {
	const validations = blockJsonValidation.map(
		({ propertyName, validationFunction, warningMessage }) =>
			validateBlockJsonProperty({
				propertyName,
				propertyValue: blockJson?.[propertyName],
				validationFunction,
				warningMessage,
			}),
	);

	const isValid = validations.reduce(
		(isValid, validation) =>
			(isValid === true && validation.isValid) || false,
		true,
	);

	const errors = validations.filter(
		({ isValid, ...property }) => isValid === false,
	);

	return {
		isValid: isValid,
		errors: errors,
	};
};

export default validateBlockJson;
