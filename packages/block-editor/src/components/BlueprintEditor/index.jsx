import clsx from "clsx";
import { useContext, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppContext, BlueprintEditorContext } from "../../contexts";
import { useDebugRenderCount, useRect, useTutorial } from "../../hooks";
import { setSize as setEditorSize } from "../../store/editor";
import { getComponentListDepth } from "../../store/block-blueprint";

import BlueprintAttributeList from "../BlueprintAttributeList";
import BlueprintBlockEdit from "../BlueprintBlockEdit";
import BlueprintConnections from "../BlueprintConnections";
import BlueprintConnectionsDebug from "../BlueprintConnectionsDebug";
import BlueprintColumn from "../BlueprintColumn";
import UpsellBanner from "../UpsellBanner";

import "./style.css";
import "./style-debug.css";

function BlueprintEditor() {
	const dispatch = useDispatch();

	const { setEditorRef } = useContext(AppContext);
	const { setRef } = useContext(BlueprintEditorContext);

	const tutorial = useTutorial();

	const column2Depth = useSelector((state) =>
		getComponentListDepth(state.blockBlueprint, "edit"),
	);

	const ref = useRef(null);
	const scrollRef = useRef(null);
	const wrapRef = useRef(null);

	const wrapRect = useRect(wrapRef, null, ["height", "width"]);

	useLayoutEffect(() => {
		setEditorRef(scrollRef);
		setRef(scrollRef);
	}, [scrollRef]);

	useLayoutEffect(() => {
		dispatch(
			setEditorSize({
				height: wrapRect.height,
				width: wrapRect.width,
			}),
		);
	}, [wrapRect]);

	useLayoutEffect(() => {
		ref.current.style.setProperty("--column-2-depth", column2Depth);
	}, [column2Depth]);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintEditor");
	}

	return (
		<div
			ref={ref}
			className={clsx("BlueprintEditor", {
				"has-upsell": !tutorial.isActive,
			})}
		>
			<div ref={scrollRef} className="BlueprintEditor-scroll">
				<div ref={wrapRef} className="BlueprintEditor-wrap">
					<div className="BlueprintEditor-grid" />

					<BlueprintConnections />
					<BlueprintConnectionsDebug />

					<div className="BlueprintEditor-columns">
						<BlueprintColumn label="Block Attributes">
							<BlueprintAttributeList />
						</BlueprintColumn>

						<BlueprintColumn label="Block Edit">
							<BlueprintBlockEdit />
						</BlueprintColumn>
					</div>
				</div>
			</div>
			{!tutorial.isActive && <UpsellBanner />}
		</div>
	);
}

export default BlueprintEditor;
