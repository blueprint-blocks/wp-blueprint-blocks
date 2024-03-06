const isNewPost = (state, context) => {
	return state.postId === null;
};

const hasUnsavedChanges = (state, context) => {
	return state.changed === true;
};

const hasValidationErrors = (state, context) => {
	return state.valid === false;
};

export { hasUnsavedChanges, hasValidationErrors, isNewPost };
