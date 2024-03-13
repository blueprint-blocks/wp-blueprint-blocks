import { useSelector } from "react-redux";

function useBlockNamespace() {
	const name = useSelector((state) => {
		return state.blockJson?.name || "";
	});

	return `wp-block-${name.split("/")[0]}-${name.split("/")[0]}`;
}

export default useBlockNamespace;
