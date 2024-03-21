import removeHandlePosition from "./remove-handle-position";
import setHandlePosition from "./set-handle-position";
import startDraggingExistingConnection from "./start-dragging-existing-connection";
import startDraggingNewConnection from "./start-dragging-new-connection";
import stopDraggingExistingConnection from "./stop-dragging-existing-connection";
import stopDraggingNewConnection from "./stop-dragging-new-connection";

const reducers = {
	removeHandlePosition,
	setHandlePosition,
	startDraggingExistingConnection,
	startDraggingNewConnection,
	stopDraggingExistingConnection,
	stopDraggingNewConnection,
};

export default reducers;
