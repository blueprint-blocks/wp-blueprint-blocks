import { useCallback, useState } from "react";

import { TutorialContext } from "../../contexts";

const MAX_STEPS = 4;

function TutorialProvider({ children }) {
	const [isActive, setIsActive] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);

	const goToNextStep = useCallback(() => {
		console.log("next step:", currentStep + 1 <= MAX_STEPS);
		if (currentStep + 1 <= MAX_STEPS) {
			setCurrentStep(currentStep + 1);
		} else {
			setIsActive(false);
		}
	}, [currentStep]);

	return (
		<TutorialContext.Provider
			value={{
				currentStep,
				goToNextStep,
				isActive,
			}}
		>
			{children}
		</TutorialContext.Provider>
	);
}

export default TutorialProvider;
