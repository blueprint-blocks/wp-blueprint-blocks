import { useSelector } from "react-redux";

function useBlockNamespace() {
	const { name } = useSelector((state) => {
		return state.blockJson || {};
	});

	return name.split("/")[0];
}

export default useBlockNamespace;
