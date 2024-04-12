import { useCallback, useRef, useState } from "react";

import { TutorialContext } from "../../contexts";

const MAX_STEPS = 9;

const TutorialProvider = ({ children }) => {
	const [isActive, setIsActive] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);

	const focusRefs = Array.from(Array(MAX_STEPS)).map(() => useRef(null));

	const _useRef = useCallback((step) => focusRefs[step - 1], [focusRefs]);

	const endTutorial = useCallback(() => {
		setIsActive(false);
	});

	const goToNextStep = useCallback(() => {
		if (currentStep + 1 <= MAX_STEPS) {
			setCurrentStep(currentStep + 1);
		} else {
			setIsActive(false);
		}
	}, [currentStep]);

	const goToStep = useCallback((step) => {
		setCurrentStep(step);
	}, []);

	const isStep = useCallback(
		(step) => isActive && currentStep === step,
		[currentStep, isActive],
	);

	return (
		<TutorialContext.Provider
			value={{
				currentStep,
				endTutorial,
				goToNextStep,
				goToStep,
				isActive,
				isStep,
				focusRefs,
				useRef: _useRef,
			}}
		>
			{children}
		</TutorialContext.Provider>
	);
};

export default TutorialProvider;
