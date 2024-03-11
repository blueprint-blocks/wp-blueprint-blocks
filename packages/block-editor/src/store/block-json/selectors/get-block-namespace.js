const getBlockNamespace = (state, context) => {
	const { name = "" } = state;
	return name.split("/")?.[0] || "";
};

export default getBlockNamespace;
