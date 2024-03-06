import { useSelector } from "react-redux";

function useBlockNamespace() {
	const { name } = useSelector((state) => {
		return state.blockJson || {};
	});

	return `wp-block-${name.split("/")[0]}-${name.split("/")[0]}`;
}

export default useBlockNamespace;
