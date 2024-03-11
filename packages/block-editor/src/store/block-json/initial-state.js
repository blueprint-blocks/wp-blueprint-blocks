const { blockJson = {} } = blueprintBlocksEditorSettings?.blockMetadata || {};

const attributes = Object.entries(blockJson?.attributes || {}).map(
	([name, attribute]) => ({ ...attribute, name }),
);

const keywords = [...(blockJson?.keywords || [])];

const initialState = {
	...blockJson,
	keywords,
	attributes,
};

export default initialState;
