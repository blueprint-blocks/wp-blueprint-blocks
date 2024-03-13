import { useSelector } from "react-redux";

function useBlockNamespace() {
	const name = useSelector((state) => {
		return state.blockJson?.name || "";
	});

	return name.split("/")[0];
}

export default useBlockNamespace;
