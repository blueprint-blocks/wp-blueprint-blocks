import { useContext } from "react";
import { BlueprintEditorContext } from "../../contexts";
import { useRect } from "../../hooks";

import "./style.css";

function BlueprintDebugRect({ debugRef = null }) {
	if (process.env.NODE_ENV !== "development" || env.DEBUG_RECT !== true) {
		return null;
	}

	const editorContext = useContext(BlueprintEditorContext);
	const rect = useRect(debugRef, editorContext?.ref);

	return (
		<div className="BlueprintDebugRect">
			<div className="debug-tl">{`${rect.left}, ${rect.top}`}</div>
			<div className="debug-tr">{`${rect.right}, ${rect.top}`}</div>
			<div className="debug-bl">{`${rect.left}, ${rect.bottom}`}</div>
			<div className="debug-br">{`${rect.right}, ${rect.bottom}`}</div>
		</div>
	);
}

export default BlueprintDebugRect;
