const validateNameClash = (value) => {
  return true;
  //return value.match(/[a-z][a-z0-9]+\/[a-z0-9]+/);
};

const validateNameFormat = (value) => {
  return !!value.match(/[a-z][a-z0-9]*\/[a-z0-9]+/);
};

export { validateNameClash, validateNameFormat };
