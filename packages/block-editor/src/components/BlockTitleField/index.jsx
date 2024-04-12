import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { delimiterize, setDocumentTitle } from "../../functions";
import { useBlockSave, useTutorial } from "../../hooks";

import {
	getBlockName,
	getBlockNamespace,
	setName,
	setTitle,
} from "../../store/block-json";

import TextField from "../TextField";

import "./style.css";

const BlockTitleField = ({ onBlur, onFocus }) => {
	const dispatch = useDispatch();

	const tutorial = useTutorial(2);

	const [hasFocus, setHasFocus] = useState(false);

	const { isNew, setChanged } = useBlockSave();

	const blockName = useSelector((state) => getBlockName(state.blockJson));

	const blockNamespace = useSelector((state) =>
		getBlockNamespace(state.blockJson),
	);

	const blockTitle = useSelector((state) => state.blockJson.title);

	const setBlockTitle = (newBlockTitle) => {
		if (blockName === delimiterize(blockTitle)) {
			const newBlockName = delimiterize(newBlockTitle);
			dispatch(setName(`${blockNamespace}/${newBlockName}`));
		}

		dispatch(setTitle(newBlockTitle));
		setChanged();

		// Update the document title when the block title is changed
		if (!isNew) {
			setDocumentTitle(newBlockTitle);
		}
	};

	const disabled = useMemo(
		() => !hasFocus && !tutorial.isStepActive,
		[hasFocus, tutorial.isStepActive],
	);

	const _onBlur = () => {
		setHasFocus(false);
		onBlur();
	};

	const _onFocus = () => {
		setHasFocus(true);
		onFocus();
	};

	return (
		<div ref={tutorial.stepRef} className="BlockTitleField">
			<TextField
				disabled={disabled}
				label="Enter a title..."
				tooltip="blockJson.title"
				value={blockTitle}
				setValue={setBlockTitle}
				onFocus={_onFocus}
				onBlur={_onBlur}
			/>
		</div>
	);
};

export default BlockTitleField;
