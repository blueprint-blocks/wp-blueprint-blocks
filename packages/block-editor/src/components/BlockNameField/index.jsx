import { useContext, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TutorialContext } from "../../contexts";
import { delimiterize } from "../../functions";

import {
	getBlockName,
	getBlockNamespace,
	setName,
	setTextdomain,
	setTitle,
	validateName,
	validateNamespace,
} from "../../store/block-json";

import {
	hasValidationErrors,
	isNewPost,
	setChanged,
} from "../../store/post-metadata";

import EditableString from "../EditableString";
import Tooltip from "../Tooltip";

import "./style.css";

const defaultBlockNamespace =
	blueprintBlocksEditorSettings?.blockMetadata?.blockNamespace ||
	"blueprint-blocks";

const BlockNameField = ({ onBlur, onFocus }) => {
	const dispatch = useDispatch();

	const tutorialContext = useContext(TutorialContext);

	const ref = useRef(null);
	const nameRef = tutorialContext?.focusRefs?.[0] || useRef(null);

	const [hasFocus, setHasFocus] = useState(false);

	const blockName = useSelector((state) => getBlockName(state.blockJson));

	const blockNamespace = useSelector((state) =>
		getBlockNamespace(state.blockJson),
	);

	const delimiterizedBlockTitle = useSelector((state) =>
		delimiterize(state.blockJson.title),
	);

	const showValidationErrors = useSelector(
		(state) =>
			hasValidationErrors(state.postMetadata) ||
			!isNewPost(state.postMetadata),
	);

	const setBlockName = (newBlockName) => {
		if (blockName === delimiterizedBlockTitle) {
			//dispatch(setTitle())
		}

		dispatch(setName(`${blockNamespace}/${delimiterize(newBlockName)}`));
		dispatch(setChanged(true));

		// Move on to the next step in the tutorial if the user has started typing a name
		if (
			tutorialContext.isActive &&
			tutorialContext.currentStep === 1 &&
			newBlockName.length > 2
		) {
			tutorialContext.goToNextStep();
		}
	};

	const setBlockNamespace = (newBlockNamespace) => {
		if (newBlockNamespace === "") {
			dispatch(setName(`${defaultBlockNamespace}/${blockName}`));
			dispatch(setTextdomain(defaultBlockNamespace));
		} else {
			dispatch(
				setName(`${delimiterize(newBlockNamespace)}/${blockName}`),
			);
			dispatch(setTextdomain(delimiterize(newBlockNamespace)));
		}
		dispatch(setChanged(true));
	};

	const showNameInvalid = useMemo(
		() => showValidationErrors && !validateName(blockName),
		[showValidationErrors, blockName],
	);

	const showNamespaceInvalid = useMemo(
		() => showValidationErrors && !validateNamespace(blockNamespace),
		[showValidationErrors, blockNamespace],
	);

	const disabled = useMemo(
		() =>
			!hasFocus &&
			tutorialContext.isActive &&
			tutorialContext.currentStep !== 1,
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
		<div className="BlockNameField" ref={ref}>
			<div className="BlockNameField-input">
				<EditableString
					className="BlockNameField-namespace"
					disabled={tutorialContext.isActive}
					invalid={showNamespaceInvalid}
					onBlur={_onBlur}
					onChange={setBlockNamespace}
					onFocus={_onFocus}
					value={blockNamespace}
				/>
				<div class="BlockNameField-seperator">{"/"}</div>
				<EditableString
					ref={nameRef}
					className="BlockNameField-name"
					disabled={disabled}
					invalid={showNameInvalid}
					onBlur={_onBlur}
					onChange={setBlockName}
					onFocus={_onFocus}
					placeholder={"enter-a-block-name..."}
					value={blockName}
				/>
			</div>
			<Tooltip data="blockJson.name" position="below" />
		</div>
	);
};

export default BlockNameField;
