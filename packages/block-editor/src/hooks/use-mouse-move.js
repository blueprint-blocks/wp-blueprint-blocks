import { useLayoutEffect } from "react";

function useMouseMove(onMouseMove, dependencies = []) {
	useLayoutEffect(() => {
		function handleMouseMove({ clientX, clientY }) {
			onMouseMove({
				x: clientX,
				y: clientY,
			});
		}

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, dependencies);
}

export default useMouseMove;
