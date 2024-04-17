import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveNewBlock, updateBlock } from "../api";

import {
	setDocumentHistory,
	setDocumentTitle,
	validateBlock,
} from "../functions";

import { getRawJson as getRawBlueprintJson } from "../store/block-blueprint";
import { getRawJson as getRawBlockJson } from "../store/block-json";

import {
	hasUnsavedChanges,
	hasValidationErrors,
	isNewPost,
	setChanged,
	setPostId,
	setValid,
} from "../store/post-metadata";

import { showSaveDialog } from "../store/save-dialog";

const useBlockSave = () => {
	const dispatch = useDispatch();

	const firstUpdate = useRef(true);

	const postId = useSelector((state) => state.postMetadata.postId);
	const postType = useSelector((state) => state.postType);

	const isNew = useSelector((state) => isNewPost(state.postMetadata));

	const blockBlueprint = useSelector((state) =>
		getRawBlueprintJson(state.blockBlueprint),
	);

	const blockJson = useSelector((state) => getRawBlockJson(state.blockJson));

	const blockEditorCss = useSelector((state) => state.blockEditorCss.raw);

	const blockViewCss = useSelector((state) => state.blockViewCss.raw);

	const _hasUnsavedChanges = useSelector((state) =>
		hasUnsavedChanges(state.postMetadata),
	);

	const dialogIsVisible = useSelector((state) => state.saveDialog.visible);

	const validationResults = useMemo(
		() => validateBlock({ blockJson }),
		[blockJson],
	);

	const isValid = useMemo(
		() => validationResults.blockJson.isValid,
		[validationResults],
	);

	const showErrors = useSelector(
		useCallback(
			(state) => !isNew || hasValidationErrors(state.postMetadata),
			[isNew],
		),
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

	const tryToSave = useCallback(() => {
		if (isValid) {
			saveBlock();
		} else {
			dispatch(setValid(isValid));
			dispatch(showSaveDialog());
		}
	}, [isValid]);

	// Watch all stores for changes
	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		dispatch(setChanged(true));
	}, [blockBlueprint, blockJson, blockEditorCss, blockViewCss]);

	return {
		hasUnsavedChanges: _hasUnsavedChanges,
		isNew,
		isValid,
		saveBlock,
		dialogIsVisible,
		setChanged: _setChanged,
		showErrors,
		tryToSave,
	};
};

export default useBlockSave;
