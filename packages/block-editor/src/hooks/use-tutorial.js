import { useCallback, useContext, useMemo } from "react";
import { TutorialContext } from "../contexts";

function useTutorial({ step = null } = {}) {
	const context = useContext(TutorialContext);

	const isActiveStep = useMemo(
		() => context.isActive && context.isCurrentStep(step),
		[context, step],
	);

	const isNotActiveStep = useMemo(
		() => context.isActive && !context.isCurrentStep(step),
		[context, step],
	);

	const forwardRef = useCallback(
		(ref, _step = null) => {
			context.setFocusRef(step || _step, ref);
		},
		[context.focusRefs],
	);

	return {
		...context,
		forwardRef,
		isActiveStep,
		isNotActiveStep,
	};
}

export default useTutorial;
