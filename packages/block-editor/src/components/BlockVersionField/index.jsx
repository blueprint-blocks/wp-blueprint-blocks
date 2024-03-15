import { useDispatch, useSelector } from "react-redux";

import { getBlockVersion, setVersion } from "../../store/block-json";
import { setChanged } from "../../store/post-metadata";

import EditableString from "../EditableString";

import "./style.css";

function BlockVersionField({ onBlur, onFocus }) {
	const dispatch = useDispatch();

	const blockVersion = useSelector((state) =>
		getBlockVersion(state.blockJson),
	);

	const setBlockVersion = (newBlockVersion) => {
		dispatch(setVersion(newBlockVersion));
		dispatch(setChanged(true));
	};

	return (
		<div className="BlockVersionField">
			<div className="BlockVersionField-label">{"Version:"}</div>
			<EditableString
				className="BlockVersionField-value"
				onBlur={onBlur}
				onChange={setBlockVersion}
				onFocus={onFocus}
				value={blockVersion}
			/>
		</div>
	);
}

export default BlockVersionField;
