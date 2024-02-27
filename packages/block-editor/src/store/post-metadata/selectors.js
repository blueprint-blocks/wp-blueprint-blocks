const isNewPost = (state, context) => {
  return state.postId !== null;
};

const hasUnsavedChanges = (state, context) => {
  return state.changed === true;
};

export { hasUnsavedChanges, isNewPost };
