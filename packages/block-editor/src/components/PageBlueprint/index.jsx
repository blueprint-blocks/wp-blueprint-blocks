import { memo, useContext, useLayoutEffect, useRef } from "react";

import { AppContext } from "../../contexts";
import { useDebugRenderCount } from "../../hooks";

import BlueprintEditor from "../BlueprintEditor";
import BlueprintSidebar from "../BlueprintSidebar";

import "./style.css";

const PageBlueprint = memo(() => {
	const ref = useRef(null);
	const { setEditorWrapperRef } = useContext(AppContext);

	useLayoutEffect(() => {
		setEditorWrapperRef(ref);
	}, [ref]);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("PageBlueprint");
	}

	return (
		<div className="PageBlueprint">
			<div ref={ref} className="PageBlueprint-view">
				<BlueprintEditor />
				<BlueprintSidebar />
			</div>
		</div>
	);
});

export default PageBlueprint;
