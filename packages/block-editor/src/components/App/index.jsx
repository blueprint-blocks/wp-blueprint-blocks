import clsx from "clsx";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveNewBlock, updateBlock } from "../../api";
import { AppContext } from "../../contexts";

import {
	useDispatchAppRect,
	useDebugRenderCount,
	usePreventClose,
} from "../../hooks";

import { getRawJson as getRawBlueprintJson } from "../../store/block-blueprint";
import { getRawJson as getRawBlockJson } from "../../store/block-json";

import {
	hasUnsavedChanges,
	setChanged,
	setPostId,
} from "../../store/post-metadata";

import { showSaveDialog } from "../../store/save-dialog";

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
	const dispatch = useDispatch();

	const ref = useRef(null);

	const [editorRef, setEditorRef] = useState(null);
	const [editorWrapperRef, setEditorWrapperRef] = useState(null);

	const [activeNavItem, setActiveNavItem] = useState(0);

	const postId = useSelector((state) => state.postMetadata.postId);

	const postType = useSelector((state) => state.postType);

	const blockBlueprint = useSelector((state) =>
		getRawBlueprintJson(state.blockBlueprint),
	);

	const blockJson = useSelector((state) => getRawBlockJson(state.blockJson));

	const blockEditorCss = useSelector((state) => state.blockEditorCss.raw);

	const blockViewCss = useSelector((state) => state.blockViewCss.raw);

	const saveDialogIsVisible = useSelector(
		(state) => state.saveDialog.visible,
	);

	const upsellDialogIsVisible = useSelector(
		(state) => state.upsellDialog.visible,
	);

	const onUpdate = () => {
		dispatch(showSaveDialog());

		if (postId === null) {
			saveNewBlock({
				postType,
				blockBlueprint,
				blockJson,
				blockEditorCss,
				blockViewCss,
			}).then(({ id }) => {
				dispatch(setPostId(id));
				dispatch(setChanged(false));
				window.history.pushState(
					{ id },
					`Edit Block < Flickerbox - WordPress`,
					`/wp-admin/post.php?post=${id}&action=edit`,
				);
			});
		} else {
			updateBlock({
				postId,
				postType,
				blockBlueprint,
				blockJson,
				blockEditorCss,
				blockViewCss,
			}).then(() => {
				dispatch(setChanged(false));
			});
		}
	};

	useDispatchAppRect(ref);

	usePreventClose(
		useSelector((state) => hasUnsavedChanges(state.postMetadata)),
	);

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
			<div
				ref={ref}
				className={clsx("App", {
					"is-debug": process.env.NODE_ENV === "development",
				})}
			>
				<Navigator
					activeNavItem={activeNavItem}
					setActiveNavItem={setActiveNavItem}
					onUpdate={onUpdate}
				/>
				{activeNavItem === 0 && <PageBlockJson />}
				{activeNavItem === 1 && <PageBlueprint />}
				{activeNavItem === 2 && <PageViewCss />}
				{activeNavItem === 3 && <PageEditorCss />}
				{saveDialogIsVisible && <SaveDialog />}
				{upsellDialogIsVisible && <UpsellDialog />}
			</div>
		</AppContext.Provider>
	);
}

export default App;
