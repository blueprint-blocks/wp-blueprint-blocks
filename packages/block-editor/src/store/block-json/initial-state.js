import { getUniqueClientId } from "../../functions";

const { blockJson = {} } = blueprintBlocksEditorSettings?.blockMetadata || {};

const attributes = Object.entries(blockJson?.attributes || {}).map(
	([name, attribute]) => {
		return {
			...attribute,
			name,
			clientId: getUniqueClientId(),
		};
	},
);

const keywords = [...(blockJson?.keywords || [])];

const initialState = {
	...blockJson,
	keywords,
	attributes,
};

export default initialState;
