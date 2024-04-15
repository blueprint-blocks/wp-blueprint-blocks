import clsx from "clsx";
import { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { AppContext } from "../../contexts";

import {
	useBlockSave,
	useDispatchAppRect,
	useDebugRenderCount,
	usePreventClose,
	useTutorial,
} from "../../hooks";

import Navigator from "../Navigator";
import PageBlockJson from "../PageBlockJson";
import PageBlueprint from "../PageBlueprint";
import PageEditorCss from "../PageEditorCss";
import PageViewCss from "../PageViewCss";
import SaveDialog from "../SaveDialog";
import UpsellDialog from "../UpsellDialog";
import Tutorial from "../Tutorial";

import "./style.css";
import "./style-debug.css";

function App() {
	const ref = useRef(null);

	const [editorRef, setEditorRef] = useState(null);
	const [editorWrapperRef, setEditorWrapperRef] = useState(null);

	const [activeNavItem, setActiveNavItem] = useState(0);

	const { hasUnsavedChanges, saveBlock, saveDialogIsVisible } =
		useBlockSave();

	const upsellDialogIsVisible = useSelector(
		(state) => state.upsellDialog.visible,
	);

	const tutorial = useTutorial();

	useDispatchAppRect(ref);
	usePreventClose(hasUnsavedChanges);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("App");
	}

	return (
		<AppContext.Provider
			value={{
				activeNavItem,
				appRef: ref,
				activeNavItem,
				editorRef,
				editorWrapperRef,
				setActiveNavItem,
				setEditorRef,
				setEditorWrapperRef,
			}}
		>
			<div
				ref={ref}
				className={clsx("App", {
					"is-debug": process.env.NODE_ENV === "development",
					"is-tutorial": tutorial.isActive,
				})}
			>
				<Navigator
					activeNavItem={activeNavItem}
					setActiveNavItem={setActiveNavItem}
					onUpdate={saveBlock}
				/>
				{activeNavItem === 0 && <PageBlockJson />}
				{activeNavItem === 1 && <PageBlueprint />}
				{activeNavItem === 2 && <PageViewCss />}
				{activeNavItem === 3 && <PageEditorCss />}
				{saveDialogIsVisible && <SaveDialog />}
				{upsellDialogIsVisible && <UpsellDialog />}
				{tutorial.isActive && <Tutorial />}
			</div>
		</AppContext.Provider>
	);
}

export default App;
