import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { delimiterize, setDocumentTitle } from "../../functions";
import { useBlockSave, useTutorial } from "../../hooks";

import {
	getBlockName,
	getBlockNamespace,
	setName,
	setTitle,
	validateTitle,
} from "../../store/block-json";

import { hasValidationErrors, isNewPost } from "../../store/post-metadata";

import TextField from "../TextField";

import "./style.css";

const BlockTitleField = ({ onBlur, onFocus }) => {
	const dispatch = useDispatch();

	const ref = useRef(null);

	const blockSave = useBlockSave();
	const tutorial = useTutorial({ step: 2 });

	const [hasFocus, setHasFocus] = useState(false);

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
		//setChanged();

		// Update the document title when the block title is changed
		if (!blockSave.isNew) {
			setDocumentTitle(newBlockTitle);
		}
	};

	const invalid = useMemo(
		() => blockSave.showErrors && !validateTitle(blockTitle),
		[blockSave.showErrors, blockTitle],
	);

	const disabled = useMemo(
		() => !hasFocus && tutorial.isNotActiveStep,
		[hasFocus, tutorial.isNotActiveStep],
	);

	const _onBlur = () => {
		setHasFocus(false);
		onBlur();
	};

	const _onFocus = () => {
		setHasFocus(true);
		onFocus();
	};

	// Forward the ref to the tutorial context
	useLayoutEffect(() => {
		tutorial.forwardRef(ref);
	}, [ref]);

	return (
		<div ref={ref} className="BlockTitleField">
			<TextField
				disabled={disabled}
				invalid={invalid}
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
