import { getUniqueClientId, normalizeClasslistAsObject } from "../../functions";

const blockComponents = {};

function parseComponentTree(components = []) {
  if (!components) {
    return [];
  }

  let clientIds = [];

  components.forEach(({ children = [], ...component }) => {
    const clientId = getUniqueClientId();
    let childClientIds = [];

    if (children.length > 0) {
      childClientIds = parseComponentTree(children);
    }

    if (component?.className) {
      component.className = normalizeClasslistAsObject(component?.className);
    }

    blockComponents[clientId] = {
      ...component,
    };

    clientIds.push([clientId, childClientIds]);
  });

  return clientIds;
}

const { blockBlueprint = {} } =
  blueprintBlocksEditorSettings?.blockMetadata || {};

const blockEdit = parseComponentTree(blockBlueprint?.blockEdit || []);
const blockToolbar = parseComponentTree(blockBlueprint?.blockToolbar || []);
const blockSave = parseComponentTree(blockBlueprint?.blockSave || []);
const blockSidebar = parseComponentTree(blockBlueprint?.blockSidebar || []);

const initialState = {
  blockComponents,

  blockEdit,

  blockToolbar,

  blockSave,

  blockSidebar,

  existingDraggingComponent: null,

  newDraggingComponent: null,

  isDragging: false,

  focusedComponent: null,
};

export default initialState;
