import clsx from "clsx";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import { AppContext } from "../../contexts";

import {
	useBlockSave,
	useDispatchAppRect,
	useDebugRenderCount,
} from "../../hooks";

import BlueprintConnectionsProvider from "../BlueprintConnectionsProvider";
import BlueprintEditorProvider from "../BlueprintEditorProvider";
import Navigator from "../Navigator";
import PageBlockJson from "../PageBlockJson";
import PageBlueprint from "../PageBlueprint";
import PageEditorCss from "../PageEditorCss";
import PageViewCss from "../PageViewCss";
import SaveDialog from "../SaveDialog";
import UpsellDialog from "../UpsellDialog";

import "./style.css";
import "./style-debug.css";

function App() {
	const ref = useRef(null);

	const [editorRef, setEditorRef] = useState(null);
	const [editorWrapperRef, setEditorWrapperRef] = useState(null);

	const [activeNavItem, setActiveNavItem] = useState(0);

	const { saveBlock, saveDialogIsVisible } = useBlockSave();

	const upsellDialogIsVisible = useSelector(
		(state) => state.upsellDialog.visible,
	);

	useDispatchAppRect(ref);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("App");
	}

	return (
		<AppContext.Provider
			value={{
				editorRef,
				editorWrapperRef,
				setEditorRef,
				setEditorWrapperRef,
			}}
		>
			<BlueprintConnectionsProvider>
				<BlueprintEditorProvider>
					<div
						ref={ref}
						className={clsx("App", {
							"is-debug": process.env.NODE_ENV === "development",
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
					</div>
				</BlueprintEditorProvider>
			</BlueprintConnectionsProvider>
		</AppContext.Provider>
	);
}

export default App;
