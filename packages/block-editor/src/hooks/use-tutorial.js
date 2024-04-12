import { useContext } from "react";
import { TutorialContext } from "../contexts";

function useTutorial() {
	const context = useContext(TutorialContext);
	return context;
}

export default useTutorial;
