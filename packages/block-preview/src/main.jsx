import { v4 as uuid } from "uuid";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBlock, getBlockType } from "@wordpress/blocks";
import { BlockPreview } from "@wordpress/block-editor";

import "./main.css";

document.querySelectorAll(".blueprint-blocks-block-preview").forEach(($el) => {
	const blockType = getBlockType($el.dataset?.blockName);

	if (!blockType) {
		return null;
	}

	const blocks = [createBlock(blockType?.name)];

	ReactDOM.createRoot($el).render(
		<BlockPreview blocks={blocks} viewportWidth={500} />,
	);
});
