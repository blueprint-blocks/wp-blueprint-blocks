const { blockJson = {} } = blueprintBlocksEditorSettings?.blockMetadata || {};

const initialState = {
	...blockJson,
	keywords: [...(blockJson?.keywords || [])],
	attributes: {
		...(blockJson?.attributes || {}),
	},
};

export default initialState;
