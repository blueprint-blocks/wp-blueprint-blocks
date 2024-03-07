import { useCallback } from "react";
import { useSelector } from "react-redux";

const useBlueprint = () => {
	const { blockComponents = {} } = useSelector(
		(state) => state.blockBlueprint,
	);

	const getComponentById = useCallback(
		(clientId) => {
			return blockComponents?.[clientId] || null;
		},
		[blockComponents],
	);

	return {
		allComponents: blockComponents,
		getComponentById,
	};
};

export default useBlueprint;
