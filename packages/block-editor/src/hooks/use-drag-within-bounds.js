import { useMemo, useState } from "react";
import useRect from "./use-rect";

const useDragWithinBounds = ({
	boundsRef = null,
	ref = null,
	onDrag,
	onStart,
	onStop,
}) => {
	const rect = useRect(ref);
	const boundsRect = useRect(boundsRef);

	const [isDragging, setIsDragging] = useState(false);

	const [offset, setOffset] = useState({
		x: 0,
		y: 0,
	});

	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	const bounds = useMemo(
		() => ({
			bottom: boundsRect.bottom - rect.bottom,
			left: boundsRect.left - rect.left,
			right: boundsRect.right - rect.right,
			top: boundsRect.top - rect.top,
		}),
		[boundsRect, rect],
	);

	const _onDrag = (event, { x, y }) => {
		if (isDragging === false) {
			setIsDragging(true);
			onStart && onStart();
		}
		setOffset({ x, y });
		onDrag && onDrag({ x, y });
	};

	const _onStart = () => {};

	const _onStop = () => {
		setIsDragging(false);
		setPosition({ x: 0, y: 0 });
		onStop && onStop();
	};

	return {
		axis: "both",
		bounds,
		offset,
		isDragging,
		position,
		onDrag: _onDrag,
		onStart: _onStart,
		onStop: _onStop,
	};
};

export default useDragWithinBounds;
