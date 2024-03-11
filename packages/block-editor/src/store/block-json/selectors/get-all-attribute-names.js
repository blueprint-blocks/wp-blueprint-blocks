const getAllAttributeNames = (state) => {
	return state?.attributes?.map(({ name }) => name);
};

export default getAllAttributeNames;
