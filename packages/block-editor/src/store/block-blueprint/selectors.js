const ALL_CONTEXTS = ["edit", "toolbar", "save", "sidebar"];

const getBlockComponent = (state, clientId) => {
  return state.blockComponents?.[clientId] || null;
};

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

const getRawJson = ({
  blockComponents = {},
  blockEdit = [],
  blockToolbar = [],
  blockSave = [],
  blockSidebar = [],
}) => {
  return {
    $schema: "https://schemas.blueprint-blocks.com/blueprint.json",
    apiVersion: 1,
    blockEdit: rebuildComponentTree(blockEdit, blockComponents),
    blockToolbar: rebuildComponentTree(blockToolbar, blockComponents),
    blockSave: rebuildComponentTree(blockSave, blockComponents),
    blockSidebar: rebuildComponentTree(blockSidebar, blockComponents),
  };
};

const rebuildComponentTree = (tree = [], components = {}) => {
  if (!tree) {
    return [];
  }

  return tree.map(([clientId, children = []]) => {
    if (!(clientId in components)) {
      return null;
    }

    return {
      ...(components[clientId] || {}),
      children: rebuildComponentTree(children, components),
    };
  });
};

export {
  getBlockComponent,
  getComponentContext,
  getComponentList,
  getComponentListDepth,
  getRawJson,
};
