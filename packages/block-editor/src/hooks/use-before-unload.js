import { useEffect } from "react";

function useBeforeUnload(callback) {
	useEffect(() => {
		window.addEventListener("beforeunload", callback);

		return () => {
			window.removeEventListener("beforeunload", callback);
		};
	}, [callback]);
}

export default useBeforeUnload;
