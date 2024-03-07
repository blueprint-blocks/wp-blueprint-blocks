import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { unsetComponentAttribute } from "../../store/block-blueprint";

const BlueprintConnection = forwardRef(({ from, to }, ref) => {
	const dispatch = useDispatch();

	const { allHandles } = useSelector((state) => {
		return state.connectionHandles || {};
	});

	const { handlesByName } = useSelector((state) => {
		return state.connectionHandles || {};
	});

	const componentId = allHandles[to]?.componentId || null;

	const fromX = allHandles[from]?.x;
	const fromY = allHandles[from]?.y;
	const toX = allHandles[to]?.x;
	const toY = allHandles[to]?.y;

	const height = Math.abs(toY - fromY);
	const width = Math.abs(toX - fromX);

	const handleOffsetX =
		Math.round(Math.min(height * 2, width * 0.75) * 100) / 100;
	const handleOffsetY = Math.round(height * 0.1 * 100) / 100;

	const onClick = () => {
		if (componentId) {
			dispatch(
				unsetComponentAttribute({
					clientId: componentId,
					attribute: "attributeName",
				}),
			);
		}
	};

	if (!fromX || !fromY || !toX || !toY) {
		return null;
	}

	return (
		<g>
			<path
				ref={ref}
				d={`M${fromX} ${fromY}C${fromX + handleOffsetX} ${fromY - handleOffsetY} ${toX - handleOffsetX} ${toY + handleOffsetY} ${toX} ${toY}`}
				stroke="var(--color-white)"
				strokeWidth="2"
			/>
			<path
				ref={ref}
				d={`M${fromX} ${fromY}C${fromX + handleOffsetX} ${fromY - handleOffsetY} ${toX - handleOffsetX} ${toY + handleOffsetY} ${toX} ${toY}`}
				onClick={onClick}
				stroke="transparent"
				strokeWidth="10"
			/>
		</g>
	);
});

export default BlueprintConnection;
