import { createContext } from "react";

export default createContext({
	allConnections: [],
	existingDraggingConnection: null,
	newDraggingConnection: null,
});
