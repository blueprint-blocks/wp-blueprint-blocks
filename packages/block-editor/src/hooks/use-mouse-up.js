import { useEffect } from "react";

function useMouseUp(onMouseUp) {
	useEffect(() => {
		window.addEventListener("mouseup", onMouseUp);
		return () => {
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, [onMouseUp]);
}

export default useMouseUp;
