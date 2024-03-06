import { getComponentList } from "../selectors";
import getAtPosition from "./get-at-position";
import insertAtPosition from "./insert-at-position";
import removeAtPosition from "./remove-at-position";
import setComponentList from "./set-component-list";

const insertExistingComponentAtPosition = (state, action) => {
	const {
		context,
		newContext,
		position = [],
		newPosition = [],
	} = action.payload;

	let component = getAtPosition({
		componentList: getComponentList(state, context),
		position,
	});

	if (component && component[0]) {
		let componentList = removeAtPosition({
			componentList: getComponentList(state, context),
			position,
		});

		if (context === newContext) {
			componentList = insertAtPosition({
				componentList,
				clientId: component[0],
				subList: component[1],
				position: newPosition,
			});

			setComponentList(state, {
				payload: {
					context,
					componentList,
				},
			});
		} else {
			setComponentList(state, {
				payload: {
					context,
					componentList,
				},
			});

			let newComponentList = insertAtPosition({
				componentList: getComponentList(state, newContext),
				clientId: component[0],
				subList: component[1],
				position: newPosition,
			});

			setComponentList(state, {
				payload: {
					context: newContext,
					componentList: newComponentList,
				},
			});
		}
	}
};

export default insertExistingComponentAtPosition;
