import { useSelector } from "react-redux";
import { getComponentList } from "../../store/block-blueprint";
import BlueprintComponentList from "../BlueprintComponentList";

function BlueprintBlockEdit() {
	const components = useSelector((state) =>
		getComponentList(state.blockBlueprint, "edit"),
	);

	return (
		<BlueprintComponentList
			isRoot={true}
			allowMultiple={false}
			hintText={`Drag components here to begin building your block.`}
			components={components}
			context="edit"
		/>
	);
}

export default BlueprintBlockEdit;
