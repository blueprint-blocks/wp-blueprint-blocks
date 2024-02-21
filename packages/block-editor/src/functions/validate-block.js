import validateBlockJson from "./validate-block-json";

const validateBlock = ({ blockJson = {} }) => {
  return {
    blockJson: validateBlockJson(blockJson),
  };
};

export default validateBlock;
