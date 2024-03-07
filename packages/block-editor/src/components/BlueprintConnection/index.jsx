import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { unsetComponentAttribute } from "../../store/block-blueprint";

const BlueprintConnection = forwardRef(({ from, to }, ref) => {
	const dispatch = useDispatch();

	const height = Math.abs(to?.y - from?.y);
	const width = Math.abs(to?.x - from?.x);

	const handleOffsetX =
		Math.round(Math.min(height * 2, width * 0.75) * 100) / 100;
	const handleOffsetY = Math.round(height * 0.1 * 100) / 100;

	const onClick = () => {
		if (componentId) {
			/*dispatch(
				unsetComponentAttribute({
					clientId: componentId,
					attribute: "attributeName",
				}),
			);*/
		}
	};

	return (
		<g>
			<path
				ref={ref}
				d={`M${from?.x} ${from?.y}C${from?.x + handleOffsetX} ${from?.y - handleOffsetY} ${to?.x - handleOffsetX} ${to?.y + handleOffsetY} ${to?.x} ${to?.y}`}
				stroke="var(--color-white)"
				strokeWidth="2"
			/>
			<path
				ref={ref}
				d={`M${from?.x} ${from?.y}C${from?.x + handleOffsetX} ${from?.y - handleOffsetY} ${to?.x - handleOffsetX} ${to?.y + handleOffsetY} ${to?.x} ${to?.y}`}
				onClick={onClick}
				stroke="transparent"
				strokeWidth="10"
			/>
		</g>
	);
});

export default BlueprintConnection;
