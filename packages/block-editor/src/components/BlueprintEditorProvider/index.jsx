import { useCallback, useState } from "react";

import { BlueprintEditorContext } from "../../contexts";
import { useDebugRenderCount } from "../../hooks";

function BlueprintEditorProvider({ children }) {
	const [ref, setRef] = useState(null);
	const [isDragging, setIsDragging] = useState(false);
	const [currentDraggingContext, setCurrentDraggingContext] = useState(null);
	const [priorDraggingContext, setPriorDraggingContext] = useState(null);

	const resetDraggingContext = useCallback(() => {
		setCurrentDraggingContext(null);
	}, []);

	const startDragging = useCallback((context) => {
		setCurrentDraggingContext(context);
		setIsDragging(true);
	}, []);

	const stopDragging = useCallback(() => {
		// this is done at the end of the render to prevent click events
		setTimeout(() => {
			setPriorDraggingContext(currentDraggingContext);
			setIsDragging(false);

			// this is done at the end of the next render to
			// allow pickup by drop listeners
			setTimeout(() => {
				resetDraggingContext();
			}, 0);
		}, 0);
	}, []);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("BlueprintEditorProvider");
	}

	return (
		<BlueprintEditorContext.Provider
			value={{
				ref,
				currentDraggingContext,
				isDragging,
				priorDraggingContext,
				resetDraggingContext,
				setRef,
				startDragging,
				stopDragging,
			}}
		>
			{children}
		</BlueprintEditorContext.Provider>
	);
}

export default BlueprintEditorProvider;
