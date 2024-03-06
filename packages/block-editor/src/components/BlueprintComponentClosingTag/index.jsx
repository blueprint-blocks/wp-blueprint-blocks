import { forwardRef } from "react";
import { useSelector } from "react-redux";

import { pascalize } from "../../functions";
import { getBlockComponent } from "../../store/block-blueprint";

import BlueprintDebugRect from "../BlueprintDebugRect";

const BlueprintComponentClosingTag = forwardRef(
	({ clientId, editorRef = null }, ref) => {
		let { type = "html", tagName = "div" } = useSelector((state) =>
			getBlockComponent(state.blockBlueprint, clientId),
		);

		if (type !== "html") {
			tagName = pascalize(type);
		}

		return (
			<div className="BlueprintComponent-close" ref={ref}>
				<div className="BlueprintComponent-markup">
					<div className="BlueprintComponent-line">
						<span>{`</`}</span>
						<span className="BlueprintComponent-tagName">
							{tagName}
						</span>
						<span>{`>`}</span>
					</div>
				</div>

				{process.env.NODE_ENV === "development" && ref && editorRef && (
					<BlueprintDebugRect debugRef={ref} parentRef={editorRef} />
				)}
			</div>
		);
	},
);

export default BlueprintComponentClosingTag;
