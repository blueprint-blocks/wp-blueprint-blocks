import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { delimiterize } from "../../functions";
import { useBlockSave, useTutorial } from "../../hooks";

import {
	getBlockName,
	getBlockNamespace,
	setName,
	setTextdomain,
	setTitle,
	validateName,
	validateNameClash,
	validateNamespace,
} from "../../store/block-json";

import EditableString from "../EditableString";
import Tooltip from "../Tooltip";

import "./style.css";

const defaultBlockNamespace =
	blueprintBlocksEditorSettings?.blockMetadata?.blockNamespace ||
	"blueprint-blocks";

const BlockNameField = ({ onBlur, onFocus }) => {
	const dispatch = useDispatch();

	const ref = useRef(null);
	const nameRef = useRef(null);

	const blockSave = useBlockSave();
	const tutorial = useTutorial({ step: 1 });

	const [hasFocus, setHasFocus] = useState(false);

	const blockName = useSelector((state) => getBlockName(state.blockJson));

	const blockNamespace = useSelector((state) =>
		getBlockNamespace(state.blockJson),
	);

	const delimiterizedBlockTitle = useSelector((state) =>
		delimiterize(state.blockJson.title),
	);

	const setBlockName = (newBlockName) => {
		if (blockName === delimiterizedBlockTitle) {
			//dispatch(setTitle())
		}

		dispatch(setName(`${blockNamespace}/${delimiterize(newBlockName)}`));
	};

	const setBlockNamespace = (newBlockNamespace) => {
		dispatch(setName(`${delimiterize(newBlockNamespace)}/${blockName}`));
		dispatch(setTextdomain(delimiterize(newBlockNamespace)));
	};

	const nameClashInvalid = useMemo(
		() =>
			blockSave.showErrors &&
			!validateNameClash(`${blockNamespace}/${blockName}`),
		[blockSave.showErrors, blockName, blockNamespace],
	);

	const showNameInvalid = useMemo(
		() =>
			blockSave.showErrors &&
			(nameClashInvalid || !validateName(blockName)),
		[blockSave.showErrors, blockName, nameClashInvalid],
	);

	const showNamespaceInvalid = useMemo(
		() =>
			blockSave.showErrors &&
			(nameClashInvalid || !validateNamespace(blockNamespace)),
		[blockSave.showErrors, blockNamespace, nameClashInvalid],
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
		tutorial.forwardRef(nameRef);
	}, [nameRef]);

	return (
		<div className="BlockNameField" ref={ref}>
			<div className="BlockNameField-input">
				<EditableString
					className="BlockNameField-namespace"
					disabled={tutorial.isActive}
					invalid={showNamespaceInvalid}
					onBlur={_onBlur}
					onChange={setBlockNamespace}
					onFocus={_onFocus}
					placeholder={"enter-a-block-namespace..."}
					value={blockNamespace}
				/>
				<div className="BlockNameField-seperator">{"/"}</div>
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
