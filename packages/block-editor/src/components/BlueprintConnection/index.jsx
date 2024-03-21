import { useBlueprint, useBlueprintConnections } from "../../hooks";

const BlueprintConnection = ({ from = null, to = null }) => {
	const { unsetComponentAttribute } = useBlueprint();
	const { getHandlePosition } = useBlueprintConnections();

	const fromPosition = getHandlePosition(from);
	const toPosition = getHandlePosition(to);

	const height = Math.abs(toPosition?.y - fromPosition?.y);
	const width = Math.abs(toPosition?.x - fromPosition?.x);

	const handleOffsetX =
		Math.round(Math.min(height * 2, width * 0.75) * 100) / 100;
	const handleOffsetY = Math.round(height * 0.1 * 100) / 100;

	const onClick = () => {
		if (clientId) {
			//unsetComponentAttribute(clientId, "attributeName");
		}
	};

	return (
		<g>
			<path
				d={`M${fromPosition?.x} ${fromPosition?.y}C${fromPosition?.x + handleOffsetX} ${fromPosition?.y - handleOffsetY} ${toPosition?.x - handleOffsetX} ${toPosition?.y + handleOffsetY} ${toPosition?.x} ${toPosition?.y}`}
				stroke="var(--color-white)"
				strokeWidth="2"
			/>
			<path
				d={`M${fromPosition?.x} ${fromPosition?.y}C${fromPosition?.x + handleOffsetX} ${fromPosition?.y - handleOffsetY} ${toPosition?.x - handleOffsetX} ${toPosition?.y + handleOffsetY} ${toPosition?.x} ${toPosition?.y}`}
				onClick={onClick}
				stroke="transparent"
				strokeWidth="10"
			/>
		</g>
	);
};

export default BlueprintConnection;
