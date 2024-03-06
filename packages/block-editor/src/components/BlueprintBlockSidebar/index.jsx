import { useDispatch, useSelector } from "react-redux";

import {
	getComponentList,
	insertDraggingComponentAtPosition,
} from "../../store/block-blueprint";

import BlueprintComponentList from "../BlueprintComponentList";

function BlueprintBlockSidebar({ editorRef }) {
	const dispatch = useDispatch();

	const components = useSelector((state) =>
		getComponentList(state.blockBlueprint, "sidebar"),
	);

	const onDrop = ({ ancestry }) => {
		dispatch(
			insertDraggingComponentAtPosition({
				context: "sidebar",
				position: ancestry,
			}),
		);
	};

	return (
		<BlueprintComponentList
			isRoot={true}
			allowMultiple={false}
			hintText={`Drag components here that you'd like to display in the block sidebar.`}
			components={components}
			editorRef={editorRef}
			onDrop={onDrop}
		/>
	);
}

export default BlueprintBlockSidebar;
