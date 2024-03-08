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
			{Object.entries(blockAttributes).length > 0 && (
				<div className="BlueprintAttributeList-list">
					{Object.entries(blockAttributes).map(
						([attributeName, attributeProps], index) => (
							<BlueprintAttribute
								attributeName={attributeName}
								attributeType={attributeProps?.type}
								attributeDefault={attributeProps?.default}
								editorRef={editorRef}
								key={index}
							/>
						),
					)}
				</div>
			)}
			{Object.entries(blockAttributes).length === 0 && (
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
