const getBlockVersion = (state, context) => {
	const { version = "" } = state;
	return version;
};

export default getBlockVersion;
