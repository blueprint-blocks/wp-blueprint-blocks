import { useRef } from "react";

import BlueprintEditor from "../BlueprintEditor";
import BlueprintSidebar from "../BlueprintSidebar";

import "./style.css";

function PageBlueprint() {
	const ref = useRef(null);

	return (
		<div ref={ref} className="PageBlueprint">
			<div className="PageBlueprint-view">
				<BlueprintEditor />
				<BlueprintSidebar editorRef={ref} />
			</div>
		</div>
	);
}

export default PageBlueprint;
