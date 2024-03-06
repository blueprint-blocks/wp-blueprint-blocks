import { getUniqueClientId } from "../../../functions";
import { getComponentList } from "../selectors";
import insertAtPosition from "./insert-at-position";
import setComponentList from "./set-component-list";

const insertNewComponentAtPosition = (state, action) => {
	const {
		context = "edit",
		component = {},
		position = [],
	} = action.payload || {};

	const clientId = getUniqueClientId();

	let componentList = insertAtPosition({
		clientId,
		componentList: getComponentList(state, context),
		position,
	});

	state.blockComponents = {
		...state.blockComponents,
		[clientId]: component,
	};

	setComponentList(state, {
		payload: {
			context,
			componentList,
		},
	});
};

export default insertNewComponentAtPosition;
