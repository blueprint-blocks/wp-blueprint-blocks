import { useCallback, useMemo, useState } from "react";

import useDebugRenderCount from "./use-debug-render-count";

const useDragWithinBounds = ({ bounds = null, onDrag, onStart, onStop }) => {
	const [isDragging, setIsDragging] = useState(false);

	const [offset, setOffset] = useState({
		x: 0,
		y: 0,
	});

	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	const _onDrag = useCallback(
		(event, { x, y }) => {
			if (isDragging === false) {
				setIsDragging(true);
				onStart && onStart();
			}
			setOffset({ x, y });
			onDrag && onDrag({ x, y });
		},
		[isDragging, onDrag, onStart],
	);

	const _onStart = useCallback(() => {}, []);

	const _onStop = useCallback(() => {
		setIsDragging(false);
		setPosition({ x: 0, y: 0 });
		onStop && onStop();
	}, [onStop]);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("useDragWithinBounds");
	}

	return useMemo(
		() => ({
			axis: "both",
			bounds,
			offset,
			isDragging,
			position,
			onDrag: _onDrag,
			onStart: _onStart,
			onStop: _onStop,
		}),
		[bounds, offset, isDragging, position, _onDrag, _onStart, _onStop],
	);
};

export default useDragWithinBounds;
