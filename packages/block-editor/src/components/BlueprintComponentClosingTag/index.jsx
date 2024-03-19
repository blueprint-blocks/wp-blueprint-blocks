import { useRef } from "react";
import { useBlueprint } from "../../hooks";
import BlueprintDebugRect from "../BlueprintDebugRect";

const BlueprintComponentClosingTag = ({ clientId }) => {
	const ref = useRef(null);
	const { getComponentTagName } = useBlueprint();
	const tagName = getComponentTagName(clientId);

	return (
		<div ref={ref} className="BlueprintComponent-close">
			<div className="BlueprintComponent-markup">
				<div className="BlueprintComponent-line">
					<span>{`</`}</span>
					<span className="BlueprintComponent-tagName">
						{tagName}
					</span>
					<span>{`>`}</span>
				</div>
			</div>

			{process.env.NODE_ENV === "development" && ref && (
				<BlueprintDebugRect debugRef={ref} />
			)}
		</div>
	);
};

export default BlueprintComponentClosingTag;
