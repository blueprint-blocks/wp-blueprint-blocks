import { useMemo } from "react";
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

	const blockSupportsValues = useMemo(
		() =>
			blockSupportsProperties.map((property, index) => {
				if (property.name in blockSupports) {
					return blockSupports?.[property.name];
				}

				return property?.default || false;
			}),
		[blockSupports],
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
					value={blockSupportsValues[index]}
					setValue={(value) => setPropertyValue(property.name, value)}
				/>
			))}
		</div>
	);
};

export default BlockSupportsField;
