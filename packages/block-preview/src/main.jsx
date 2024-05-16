import React from "react";
import ReactDOM from "react-dom/client";

import { BlockPreview } from "@wordpress/block-editor";

import "./main.css";

document.querySelectorAll(".blueprint-blocks-block-preview").forEach(($el) => {
	/*const blocks = [
		{
			name: $el.dataset?.blockName,
			innerBlocks: [],
			attrs: [],
		},
	];*/
	const blocks = [
		{
			name: "core/heading",
			innerBlocks: [],
			attributes: {
				level: 3,
				content: "hello heading",
				placeholder: "hello heading",
			},
			attrs: {
				level: 3,
				content: "hello heading",
				placeholder: "hello heading",
			},
		},
		{
			name: "core/paragraph",
			innerBlocks: [],
			attributes: {
				content: "hello paragraph",
			},
		},
	];
	ReactDOM.createRoot($el).render(
		<BlockPreview blocks={blocks} viewportWidth={800} minHeight={200} />,
	);
});
