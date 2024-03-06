import { useMemo } from "react";
import useRect from "./use-rect";

const useCenterPoint = (ref = null, parentRef = null) => {
	const rect = useRect(ref, parentRef, ["height", "width", "x", "y"]);

	return useMemo(
		() => ({
			x: rect.x + rect.width / 2 || 0,
			y: rect.y + rect.height / 2 || 0,
		}),
		[rect],
	);
};

export default useCenterPoint;
