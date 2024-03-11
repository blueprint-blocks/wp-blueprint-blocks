const getBlockName = (state, context) => {
	const { name = "" } = state;
	return name.split("/")?.[1] || "";
};

export default getBlockName;
