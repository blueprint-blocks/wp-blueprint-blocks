import { useDispatch, useSelector } from "react-redux";
import usePreventClose from "./use-prevent-close";

import { saveNewBlock, updateBlock } from "../api";

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

	usePreventClose(
		useSelector((state) => hasUnsavedChanges(state.postMetadata)),
	);

	return {
		hasUnsavedChanges: _hasUnsavedChanges,
		saveBlock,
		saveDialogIsVisible,
	};
};

export default useBlockSave;
