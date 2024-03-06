import { useDispatch, useSelector } from "react-redux";

import {
	getComponentList,
	insertDraggingComponentAtPosition,
} from "../../store/block-blueprint";

import BlueprintComponentList from "../BlueprintComponentList";

function BlueprintBlockToolbar({ editorRef }) {
	const dispatch = useDispatch();

	const components = useSelector((state) =>
		getComponentList(state.blockBlueprint, "toolbar"),
	);

	const onDrop = ({ ancestry }) => {
		dispatch(
			insertDraggingComponentAtPosition({
				context: "toolbar",
				position: ancestry,
			}),
		);
	};

	return (
		<BlueprintComponentList
			isRoot={true}
			allowMultiple={false}
			hintText={`Drag components here that you'd like to display in the block toolbar.`}
			components={components}
			editorRef={editorRef}
			onDrop={onDrop}
		/>
	);
}

export default BlueprintBlockToolbar;
