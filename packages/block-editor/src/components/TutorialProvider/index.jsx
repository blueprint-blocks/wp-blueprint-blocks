import { useCallback, useState } from "react";

import { TutorialContext } from "../../contexts";

const IS_ACTIVE =
	blueprintBlocksEditorSettings?.tutorialMetadata?.isActive ?? false;

const MAX_STEPS = 9;

const TutorialProvider = ({ children }) => {
	const [isActive, setIsActive] = useState(IS_ACTIVE);
	const [currentStep, setCurrentStep] = useState(1);

	const focusRefs = Array.from(Array(MAX_STEPS)).map(() =>
		useState({ current: null }),
	);

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

	const isCurrentStep = useCallback(
		(step) => currentStep === step,
		[currentStep],
	);

	const setFocusRef = useCallback((step, ref) => {
		const [_, setRef] = focusRefs[step - 1];
		setRef(ref);
	});

	const useRef = useCallback((step) => focusRefs?.[step - 1][0], [focusRefs]);

	return (
		<TutorialContext.Provider
			value={{
				currentStep,
				endTutorial,
				goToNextStep,
				goToStep,
				isActive,
				isCurrentStep,
				focusRefs,
				setFocusRef,
				useRef,
			}}
		>
			{children}
		</TutorialContext.Provider>
	);
};

export default TutorialProvider;
