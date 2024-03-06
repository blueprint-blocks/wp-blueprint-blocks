import { useDispatch, useSelector } from "react-redux";

import { delimiterize } from "../../functions";

import {
	getBlockName,
	getBlockNamespace,
	setName,
	setTitle,
} from "../../store/block-json";
import { setChanged } from "../../store/post-metadata";

import TextField from "../TextField";

const BlockTitleField = ({ onBlur, onFocus }) => {
	const dispatch = useDispatch();

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
		dispatch(setChanged(true));
	};

	return (
		<TextField
			label="Enter a title..."
			tooltip="blockJson.title"
			value={blockTitle}
			setValue={setBlockTitle}
			onFocus={onFocus}
			onBlur={onBlur}
		/>
	);
};

export default BlockTitleField;
