const setComponentList = (state, action) => {
	const { context = "edit", componentList = [] } = action.payload;

	if (context === "edit") {
		return (state.blockEdit = componentList);
	} else if (context === "toolbar") {
		return (state.blockToolbar = componentList);
	} else if (context === "save") {
		return (state.blockSave = componentList);
	} else if (context === "sidebar") {
		return (state.blockSidebar = componentList);
	}
};

export default setComponentList;
