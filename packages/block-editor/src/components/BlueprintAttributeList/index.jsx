import { forwardRef } from "react";

import { useBlockJson, useDebugRenderCount } from "../../hooks";

import BlueprintAttribute from "../BlueprintAttribute";
import BlueprintHint from "../BlueprintHint";

import "./style.css";

const BlueprintAttributeList = forwardRef(({ editorRef = null }, ref) => {
	const { addEmptyAttribute, blockAttributes } = useBlockJson();

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintAttributeList");
	}

	return (
		<div ref={ref} className="BlueprintAttributeList">
			{Object.keys(blockAttributes).length > 0 && (
				<div className="BlueprintAttributeList-list">
					{Object.keys(blockAttributes).map(
						(attributeName, index) => (
							<BlueprintAttribute
								attributeName={attributeName}
								editorRef={editorRef}
								key={attributeName}
							/>
						),
					)}
				</div>
			)}
			{Object.keys(blockAttributes).length === 0 && (
				<BlueprintHint
					text={`Add attributes for values that you'd like to be saved upon update.`}
					editorRef={editorRef}
				/>
			)}
			<div
				className="BlueprintAttributeList-add"
				onClick={addEmptyAttribute}
			>
				{"Add attribute"}
			</div>
		</div>
	);
});

export default BlueprintAttributeList;
