import removePosition from "./remove-position";
import setPosition from "./set-position";
import startDraggingExistingConnection from "./start-dragging-existing-connection";
import startDraggingNewConnection from "./start-dragging-new-connection";
import stopDraggingExistingConnection from "./stop-dragging-existing-connection";
import stopDraggingNewConnection from "./stop-dragging-new-connection";

const reducers = {
	removePosition,
	setPosition,
	startDraggingExistingConnection,
	startDraggingNewConnection,
	stopDraggingExistingConnection,
	stopDraggingNewConnection,
};

export default reducers;
