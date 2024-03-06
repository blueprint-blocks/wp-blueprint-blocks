import { getComponentContext } from "../selectors";
import insertExistingComponentAtPosition from "./insert-existing-component-at-position";

const moveComponentToPosition = (state, action) => {
	const {
		clientId = null,
		context = "edit",
		position = [],
	} = action.payload || {};

	if (!clientId) {
		return;
	}

	const currentContext = getComponentContext(state, clientId);

	if (context === currentContext.context) {
		// compare positions and decrement if dragging higher
		for (let i = 0; i < currentContext.position.length; i++) {
			if (
				position.length > i &&
				position[i] > currentContext.position[i]
			) {
				position[i]--;
				break;
			}
		}
	}

	insertExistingComponentAtPosition(state, {
		payload: {
			context: currentContext.context,
			newContext: context,
			position: currentContext.position,
			newPosition: position,
		},
	});
};

export default moveComponentToPosition;
