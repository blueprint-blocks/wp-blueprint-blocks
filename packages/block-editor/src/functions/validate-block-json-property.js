import * as blockJsonValidationFunctions from "../store/block-json/validation";

console.log(blockJsonValidationFunctions);

const validateBlockJsonProperty = ({
  propertyName,
  propertyValue,
  validationFunction,
  warningMessage,
}) => {
  let isValid = true;

  if (validationFunction in blockJsonValidationFunctions) {
    isValid = blockJsonValidationFunctions[validationFunction](propertyValue);
  }

  return {
    propertyName: propertyName,
    warningMessage: (!isValid && warningMessage) || "",
    isValid: isValid,
  };
};

export default validateBlockJsonProperty;
