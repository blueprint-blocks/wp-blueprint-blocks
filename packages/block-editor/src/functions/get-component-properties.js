import { blockComponents } from "../data";

function _getComponentProperties(type = "html", tagName = "div") {
  for (let component of blockComponents.fields) {
    if (component?.type === type) {
      return component;
    }
  }

  for (let component of blockComponents.html) {
    if (component?.defaultAttributes?.tagName === tagName) {
      return component;
    }
  }

  return null;
}

function getComponentProperties(type = "html", tagName = "div") {
  const component = _getComponentProperties(type, tagName);

  if (component) {
    return {
      ...component,
      attributes: {
        ...blockComponents.attributes,
        ...component.attributes,
      },
    };
  }

  return component;
}

export default getComponentProperties;
