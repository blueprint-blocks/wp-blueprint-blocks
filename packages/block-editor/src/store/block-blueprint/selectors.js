import { createSelector } from "@reduxjs/toolkit";

const ALL_CONTEXTS = ["edit", "toolbar", "save", "sidebar"];

const selectBlockComponents = (state) => state.blockComponents || {};
const selectBlockEdit = (state) => state.blockEdit || [];
const selectBlockToolbar = (state) => state.blockToolbar || [];
const selectBlockSave = (state) => state.blockSave || [];
const selectBlockSidebar = (state) => state.blockSidebar || [];
const selectClientId = (_, { clientId } = {}) => clientId;
const selectAttributeName = (_, { attributeName } = {}) => attributeName;

const getComponent = createSelector(
	[selectBlockComponents, selectClientId],
	(blockComponents, clientId) => {
		if (clientId in blockComponents) {
			return blockComponents[clientId];
		}
		return null;
	},
);

const getComponentAttributes = createSelector([getComponent], (component) => {
	return component?.attributes || [];
});

const getComponentAttribute = createSelector(
	[getComponentAttributes, selectAttributeName],
	(attributes, attributeName) => {
		for (const attribute of attributes || []) {
			if (attribute.name === attributeName) {
				return attribute.value;
			}
		}
		return null;
	},
);

const getComponentTagName = createSelector([getComponent], (component) => {
	return component?.tagName || null;
});

const getComponentType = createSelector([getComponent], (component) => {
	return component?.type || "html";
});

const getComponentList = (state, context) => {
	if (context === "edit") {
		return state.blockEdit;
	} else if (context === "toolbar") {
		return state.blockToolbar;
	} else if (context === "save") {
		return state.blockSave;
	} else if (context === "sidebar") {
		return state.blockSidebar;
	}

	return null;
};

const getComponentListDepth = (state, context) => {
	let componentList = [];

	if (context === "edit") {
		componentList = state.blockEdit;
	} else if (context === "toolbar") {
		componentList = state.blockToolbar;
	} else if (context === "save") {
		componentList = state.blockSave;
	} else if (context === "sidebar") {
		componentList = state.blockSidebar;
	}

	if (!componentList || !Array.isArray(componentList)) {
		return 0;
	}

	const getDepth = (list = [], depth = 0) => {
		list.forEach(([_, list]) => {
			if (Array.isArray(list) && list.length > 0) {
				depth = Math.max(depth, getDepth(list, depth + 1));
			}
		});
		return depth;
	};

	return getDepth(componentList);
};

const getComponentContext = (state, clientId) => {
	for (let context of ALL_CONTEXTS) {
		const position = getComponentPositionInList(state, {
			clientId,
			list: getComponentList(state, "edit"),
		});

		if (position !== null) {
			return {
				context,
				position,
			};
		}
	}
};

const getComponentPositionInList = (state, { clientId, list = [] }) => {
	if (!Array.isArray(list) || !list.length) {
		return null;
	}

	for (let i = 0; i < list.length; i++) {
		if (list[i][0] === clientId) {
			return [i];
		}

		let listPosition = null;

		if (Array.isArray(list[i][1]) && list[i][1].length > 0) {
			listPosition = getComponentPositionInList(state, {
				clientId,
				list: list[i][1] || [],
			});
		}

		if (listPosition !== null) {
			return [i, ...listPosition];
		}
	}

	return null;
};

const getRawJson = createSelector(
	[
		selectBlockComponents,
		selectBlockEdit,
		selectBlockToolbar,
		selectBlockSave,
		selectBlockSidebar,
	],
	(blockComponents, blockEdit, blockToolbar, blockSave, blockSidebar) => ({
		$schema: "https://schemas.blueprint-blocks.com/blueprint.json",
		apiVersion: 1,
		blockEdit: rebuildComponentTree(blockEdit, blockComponents),
		blockToolbar: rebuildComponentTree(blockToolbar, blockComponents),
		blockSave: rebuildComponentTree(blockSave, blockComponents),
		blockSidebar: rebuildComponentTree(blockSidebar, blockComponents),
	}),
);

const rebuildComponentTree = (tree = [], components = {}) => {
	if (!tree) {
		return [];
	}

	return tree.map(([clientId, children = []]) => {
		if (!(clientId in components)) {
			return null;
		}

		return {
			...Object.fromEntries(
				(components[clientId]?.attributes || []).map(
					({ name, value }) => [name, value],
				),
			),
			type: components[clientId]?.type || "html",
			tagName: components[clientId]?.tagName || null,
			children: rebuildComponentTree(children, components),
		};
	});
};

export {
	getComponent,
	getComponentAttribute,
	getComponentAttributes,
	getComponentTagName,
	getComponentType,
	getComponentContext,
	getComponentList,
	getComponentListDepth,
	getRawJson,
};
