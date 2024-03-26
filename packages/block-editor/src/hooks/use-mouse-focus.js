import { useState } from "react";
import useMouseMove from "./use-mouse-move";

function useMouseFocus(ref) {
	const [hasMouseFocus, setHasMouseFocus] = useState(false);

	useMouseMove(
		(mouse) => {
			const rect = ref?.current?.getBoundingClientRect();

			const isInsideBounds =
				mouse.x >= rect?.left &&
				mouse.x <= rect?.right &&
				mouse.y >= rect?.top &&
				mouse.y <= rect?.bottom;

			if (isInsideBounds === true && hasMouseFocus === false) {
				setHasMouseFocus(true);
			} else if (isInsideBounds === false && hasMouseFocus === true) {
				setHasMouseFocus(false);
			}
		},
		[hasMouseFocus],
	);

	return hasMouseFocus;
}

export default useMouseFocus;
