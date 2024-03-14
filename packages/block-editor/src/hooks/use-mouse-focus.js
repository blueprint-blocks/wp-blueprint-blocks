import { useState } from "react";
import useMouseMove from "./use-mouse-move";
import useRect from "./use-rect";

function useMouseFocus(ref) {
	const [hasMouseFocus, setHasMouseFocus] = useState(false);
	const rect = useRect(ref, null, ["bottom", "left", "right", "top"]);

	useMouseMove(
		(mouse) => {
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
		[hasMouseFocus, rect],
	);

	return hasMouseFocus;
}

export default useMouseFocus;
