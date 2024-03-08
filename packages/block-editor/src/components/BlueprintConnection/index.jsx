import { useBlueprint } from "../../hooks";

const BlueprintConnection = ({ attributeName, clientId, from, to }) => {
	const { unsetComponentAttribute } = useBlueprint();

	const height = Math.abs(to?.y - from?.y);
	const width = Math.abs(to?.x - from?.x);

	const handleOffsetX =
		Math.round(Math.min(height * 2, width * 0.75) * 100) / 100;
	const handleOffsetY = Math.round(height * 0.1 * 100) / 100;

	const onClick = () => {
		unsetComponentAttribute(clientId, "attributeName");
	};

	return (
		<g>
			<path
				d={`M${from?.x} ${from?.y}C${from?.x + handleOffsetX} ${from?.y - handleOffsetY} ${to?.x - handleOffsetX} ${to?.y + handleOffsetY} ${to?.x} ${to?.y}`}
				stroke="var(--color-white)"
				strokeWidth="2"
			/>
			<path
				d={`M${from?.x} ${from?.y}C${from?.x + handleOffsetX} ${from?.y - handleOffsetY} ${to?.x - handleOffsetX} ${to?.y + handleOffsetY} ${to?.x} ${to?.y}`}
				onClick={onClick}
				stroke="transparent"
				strokeWidth="10"
			/>
		</g>
	);
};

export default BlueprintConnection;
