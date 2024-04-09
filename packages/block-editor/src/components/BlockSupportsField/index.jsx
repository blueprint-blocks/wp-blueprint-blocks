import { useDispatch, useSelector } from "react-redux";

import { blockSupports as blockSupportsProperties } from "../../data";
import { setSupportsProperty } from "../../store/block-json";
import { setChanged } from "../../store/post-metadata";

import BlockSupportsFieldItem from "../BlockSupportsFieldItem";

import "./style.css";

const BlockSupportsField = () => {
	const dispatch = useDispatch();

	const blockSupports = useSelector(
		(state) => state.blockJson?.supports || {},
	);

	const setPropertyValue = (propertyName, value) => {
		dispatch(setSupportsProperty({ propertyName, value }));
		dispatch(setChanged(true));
	};

	return (
		<div className="BlockSupportsField">
			{blockSupportsProperties.map((property, index) => (
				<BlockSupportsFieldItem
					{...property}
					key={index}
					value={
						blockSupports?.[property.name] ||
						property?.default ||
						false
					}
					setValue={(value) => setPropertyValue(property.name, value)}
				/>
			))}
		</div>
	);
};

export default BlockSupportsField;
