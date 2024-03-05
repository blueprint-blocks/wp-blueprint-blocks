const componentHasFocus = (state, clientId) => {
  return clientId === state.currentFocus?.clientId;
};

const getFocus = (state, action) => {
  return state.currentFocus || { context: null };
};

export { componentHasFocus, getFocus };
