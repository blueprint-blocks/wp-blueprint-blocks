import { memo, useRef } from "react";

import { useDebugRenderCount } from "../../hooks";

import BlueprintEditor from "../BlueprintEditor";
import BlueprintSidebar from "../BlueprintSidebar";

import "./style.css";

const PageBlueprint = memo(() => {
	const ref = useRef(null);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("PageBlueprint");
	}

	return (
		<div ref={ref} className="PageBlueprint">
			<div className="PageBlueprint-view">
				<BlueprintEditor />
				<BlueprintSidebar editorRef={ref} />
			</div>
		</div>
	);
});

export default PageBlueprint;
