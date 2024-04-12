import { useContext, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TutorialContext } from "../../contexts";
import { delimiterize, setDocumentTitle } from "../../functions";
import { useBlockSave } from "../../hooks";

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

	const tutorialContext = useContext(TutorialContext);

	const ref = tutorialContext?.focusRefs?.[1] || useRef(null);

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

		// Move on to the next step in the tutorial if the user has started typing a name
		if (
			tutorialContext.isActive &&
			tutorialContext.currentStep === 2 &&
			newBlockTitle.length > 2
		) {
			tutorialContext.goToNextStep();
		}
	};

	const disabled = useMemo(
		() =>
			!hasFocus &&
			tutorialContext.isActive &&
			tutorialContext.currentStep !== 2,
		[hasFocus, tutorialContext],
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
		<div ref={ref} className="BlockTitleField">
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
