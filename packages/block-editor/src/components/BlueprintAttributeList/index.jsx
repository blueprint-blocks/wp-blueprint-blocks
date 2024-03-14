import { forwardRef, memo } from "react";

import { useBlockJson, useDebugRenderCount } from "../../hooks";

import BlueprintAttribute from "../BlueprintAttribute";
import BlueprintHint from "../BlueprintHint";

import "./style.css";

const BlueprintAttributeList = memo(
	forwardRef(({ editorRef = null }, ref) => {
		const { addEmptyAttribute, blockAttributes } = useBlockJson();

		if (process.env.NODE_ENV === "development") {
			useDebugRenderCount("BlueprintAttributeList");
		}

		return (
			<div ref={ref} className="BlueprintAttributeList">
				{blockAttributes?.length > 0 && (
					<div className="BlueprintAttributeList-list">
						{blockAttributes.map(({ clientId, name }) => (
							<BlueprintAttribute
								attributeName={name}
								editorRef={editorRef}
								key={clientId}
							/>
						))}
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
	}),
);

export default BlueprintAttributeList;
