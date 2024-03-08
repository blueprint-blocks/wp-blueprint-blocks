import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { pascalize } from "../../functions";
import { useBlueprint } from "../../hooks";
import { getBlockComponent } from "../../store/block-blueprint";

import BlueprintDebugRect from "../BlueprintDebugRect";

const BlueprintComponentClosingTag = ({ clientId, editorRef = null }) => {
	const ref = useRef(null);

	const { getComponentById } = useBlueprint();

	const {
		tagName = null,
		type = "html",
		...component
	} = getComponentById(clientId);

	const _tagName = useMemo(
		() => (type === "html" && tagName) || pascalize(type),
		[tagName, type],
	);

	return (
		<div className="BlueprintComponent-close">
			<div className="BlueprintComponent-markup">
				<div className="BlueprintComponent-line">
					<span>{`</`}</span>
					<span className="BlueprintComponent-tagName">
						{_tagName}
					</span>
					<span>{`>`}</span>
				</div>
			</div>

			{process.env.NODE_ENV === "development" && ref && editorRef && (
				<BlueprintDebugRect debugRef={ref} parentRef={editorRef} />
			)}
		</div>
	);
};

export default BlueprintComponentClosingTag;
