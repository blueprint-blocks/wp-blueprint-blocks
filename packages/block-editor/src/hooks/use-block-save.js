import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveNewBlock, updateBlock } from "../api";

import { setDocumentHistory, setDocumentTitle } from "../functions";

import { getRawJson as getRawBlueprintJson } from "../store/block-blueprint";
import { getRawJson as getRawBlockJson } from "../store/block-json";

import {
	hasUnsavedChanges,
	setChanged,
	setPostId,
} from "../store/post-metadata";

import { showSaveDialog } from "../store/save-dialog";

const useBlockSave = () => {
	const dispatch = useDispatch();

	const postId = useSelector((state) => state.postMetadata.postId);
	const postType = useSelector((state) => state.postType);

	const isNew = useMemo(() => postId === null, [postId]);

	const blockBlueprint = useSelector((state) =>
		getRawBlueprintJson(state.blockBlueprint),
	);

	const blockJson = useSelector((state) => getRawBlockJson(state.blockJson));

	const blockEditorCss = useSelector((state) => state.blockEditorCss.raw);

	const blockViewCss = useSelector((state) => state.blockViewCss.raw);

	const _hasUnsavedChanges = useSelector((state) =>
		hasUnsavedChanges(state.postMetadata),
	);

	const saveDialogIsVisible = useSelector(
		(state) => state.saveDialog.visible,
	);

	const saveBlock = () => {
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
				setDocumentHistory(id, blockJson?.title);
				setDocumentTitle(blockJson?.title);
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

	const _setChanged = () => {
		dispatch(setChanged(true));
	};

	return {
		hasUnsavedChanges: _hasUnsavedChanges,
		isNew,
		saveBlock,
		saveDialogIsVisible,
		setChanged: _setChanged,
	};
};

export default useBlockSave;
