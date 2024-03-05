const unsetComponentAttribute = (state, action) => {
  const { clientId, attribute } = action.payload;

  if (!(clientId in state.blockComponents)) {
    return;
  }

  state.blockComponents = {
    ...state.blockComponents,
    [clientId]: Object.fromEntries(
      Object.entries(state.blockComponents[clientId]).filter(
        ([key, _]) => key !== attribute,
      ),
    ),
  };
};

export default unsetComponentAttribute;
