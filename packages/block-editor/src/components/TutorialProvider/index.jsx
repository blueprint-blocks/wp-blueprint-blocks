import { useCallback, useRef, useState } from "react";

import { TutorialContext } from "../../contexts";

const MAX_STEPS = 9;

const TutorialProvider = ({ children }) => {
	const [isActive, setIsActive] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);

	const focusRefs = Array.from(Array(MAX_STEPS)).map(() => useRef(null));

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

	return (
		<TutorialContext.Provider
			value={{
				currentStep,
				endTutorial,
				goToNextStep,
				goToStep,
				isActive,
				focusRefs,
			}}
		>
			{children}
		</TutorialContext.Provider>
	);
};

export default TutorialProvider;
