const validateNameClash = (value) => {
  return true;
  //return value.match(/[a-z][a-z0-9]+\/[a-z0-9]+/);
};

const validateNameFormat = (value) => {
  return !!value.match(/[a-z][a-z0-9]*\/[a-z0-9]+/);
};

const validateRequired = (value) => {
  return !!value.match(/[a-z][a-z0-9]*\/[a-z0-9]+/);
};

const validateTitle = (value) => {
  return value.length > 0 && value.length < 80;
};

export {
  validateNameClash,
  validateNameFormat,
  validateRequired,
  validateTitle,
};
