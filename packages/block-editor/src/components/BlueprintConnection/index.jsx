import { useBlueprintConnections, useTutorial } from "../../hooks";

const BlueprintConnection = ({
	from = null,
	fromPosition = null,
	to = null,
	toPosition = null,
}) => {
	const tutorial = useTutorial();

	const { getHandlePosition, removeConnection } = useBlueprintConnections();

	const _fromPosition = fromPosition || getHandlePosition(from);
	const _toPosition = toPosition || getHandlePosition(to);

	const height = Math.abs(_toPosition?.y - _fromPosition?.y);
	const width = Math.abs(_toPosition?.x - _fromPosition?.x);

	const handleOffsetX =
		Math.round(Math.min(height * 2, width * 0.75) * 100) / 100;
	const handleOffsetY = Math.round(height * 0.1 * 100) / 100;

	const onClick = () => {
		if (tutorial.isActive) {
			return;
		}
		removeConnection(to);
	};

	return (
		<g>
			<path
				d={`M${_fromPosition?.x} ${_fromPosition?.y}C${_fromPosition?.x + handleOffsetX} ${_fromPosition?.y - handleOffsetY} ${_toPosition?.x - handleOffsetX} ${_toPosition?.y + handleOffsetY} ${_toPosition?.x} ${_toPosition?.y}`}
				stroke="var(--color-white)"
				strokeWidth="2"
			/>
			<path
				d={`M${_fromPosition?.x} ${_fromPosition?.y}C${_fromPosition?.x + handleOffsetX} ${_fromPosition?.y - handleOffsetY} ${_toPosition?.x - handleOffsetX} ${_toPosition?.y + handleOffsetY} ${_toPosition?.x} ${_toPosition?.y}`}
				onClick={onClick}
				stroke="transparent"
				strokeWidth="10"
			/>
		</g>
	);
};

export default BlueprintConnection;
