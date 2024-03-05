const setFocus = (state, action) => {
  const { context = null, ...props } = action.payload || {};

  if (context === null) {
    return;
  }

  state.currentFocus = {
    context,
    ...props,
  };
};

const setSize = (state, action) => {
  state.height = action.payload?.height || 0;
  state.width = action.payload?.width || 0;
};

const unsetFocus = (state, action) => {
  state.priorFocus = state.currentFocus;
  state.currentFocus = null;
};

export default { setFocus, setSize, unsetFocus };
