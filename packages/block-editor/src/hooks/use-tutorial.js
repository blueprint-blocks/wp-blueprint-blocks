import { useContext, useMemo } from "react";
import { TutorialContext } from "../contexts";

function useTutorial(step = null) {
	const context = useContext(TutorialContext);

	const isStepActive = useMemo(() => context.isStep(step), [context]);

	const stepRef = context.useRef(step);

	return {
		...context,
		isStepActive,
		stepRef,
	};
}

export default useTutorial;
