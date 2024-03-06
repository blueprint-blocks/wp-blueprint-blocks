import clsx from "clsx";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { useRect } from "../../hooks";
import { setPosition, removePosition } from "../../store/attribute-handles";

import "./style.css";

function BlueprintAttributeHandle({
	attributeName,
	clientId = null,
	componentId = null,
	context = "to",
	draggingOffset = { x: 0, y: 0 },
	editorRef = null,
	isClone = false,
	isDragging = false,
	...props
}) {
	const id = useId();
	const ref = useRef(null);
	const rect = useRect(ref, editorRef, ["x", "y", "height", "width"]);

	const dispatch = useDispatch();

	const [name, setName] = useState(attributeName);

	useLayoutEffect(() => {
		if ((isClone && !isDragging) || (!isClone && isDragging)) {
			dispatch(
				removePosition({
					name,
					id: clientId || id,
				}),
			);
		} else {
			dispatch(
				setPosition({
					name,
					id: clientId || id,
					componentId,
					context: (context === "from" && "from") || "to",
					x: rect.x + rect.width / 2 + draggingOffset.x,
					y: rect.y + rect.height / 2 + draggingOffset.y,
				}),
			);
		}
	}, [name, rect, draggingOffset, isClone, isDragging]);

	useLayoutEffect(() => {
		if (attributeName !== name) {
			dispatch(
				removePosition({
					name,
					id: clientId || id,
				}),
			);
		}

		setName(attributeName);
	}, [attributeName]);

	return (
		<div
			ref={ref}
			className={clsx(
				"BlueprintAttributeHandle",
				`is-${(props?.position === "right" && "right") || "left"}`,
				{
					hide: (isClone && !isDragging) || (!isClone && isDragging),
				},
			)}
		/>
	);
}

export default BlueprintAttributeHandle;
