import {
	getComponentAncestors,
	getComponentAncestry,
	removeFromTree,
} from "../functions";

const removeComponent = (state, action) => {
	const clientId = action.payload;

	if (!(clientId in state.blockComponents)) {
		return;
	}

	const isInBlueprint =
		getComponentAncestry(clientId, state.blockEdit) !== false;

	if (!isInBlueprint) {
		return;
	}

	const ancestors = [...getComponentAncestors(clientId, state.blockEdit)];

	state.blockComponents = Object.fromEntries(
		Object.entries(state.blockComponents).filter(
			([key, _]) => key !== clientId && !ancestors.includes(key),
		),
	);

	state.blockEdit = removeFromTree(clientId, state.blockEdit);
};

export default removeComponent;
