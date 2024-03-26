import { parseComponentTree } from "./functions";

const { blockBlueprint = {} } =
	blueprintBlocksEditorSettings?.blockMetadata || {};

const blockEdit = parseComponentTree(blockBlueprint?.blockEdit || []);
const blockToolbar = parseComponentTree(blockBlueprint?.blockToolbar || []);
const blockSave = parseComponentTree(blockBlueprint?.blockSave || []);
const blockSidebar = parseComponentTree(blockBlueprint?.blockSidebar || []);

const blockComponents = {
	...blockEdit[1],
	...blockToolbar[1],
	...blockSave[1],
	...blockSidebar[1],
};

const initialState = {
	blockComponents,

	blockEdit: blockEdit[0],

	blockToolbar: blockToolbar[0],

	blockSave: blockSave[0],

	blockSidebar: blockSidebar[0],

	existingDraggingComponent: null,

	newDraggingComponent: null,

	isDragging: false,
};

export default initialState;
