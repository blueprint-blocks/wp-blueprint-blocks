import { useSelector } from "react-redux";

import { useBlueprintInsert } from "../../hooks";
import { getComponentList } from "../../store/block-blueprint";

import BlueprintComponentList from "../BlueprintComponentList";

function BlueprintBlockEdit() {
	const blueprintInsert = useBlueprintInsert();

	const components = useSelector((state) =>
		getComponentList(state.blockBlueprint, "edit"),
	);

	const onDrop = ({ ancestry }) => {
		blueprintInsert({
			context: "edit",
			position: ancestry,
		});
	};

	return (
		<BlueprintComponentList
			isRoot={true}
			allowMultiple={false}
			hintText={`Drag components here to begin building your block.`}
			components={components}
			onDrop={onDrop}
		/>
	);
}

export default BlueprintBlockEdit;
