import clsx from "clsx";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import SearchIcon from "./search-icon.svg";

import { shuffleArray } from "../../functions";
import { useBlockJson, useTypedText } from "../../hooks";

import "./style.css";

const RANDOM_BLOCKS = [
	{
		icon: "heading",
		title: "Heading",
	},
	{
		icon: "editor-paragraph",
		title: "Paragraph",
	},
	{
		icon: "html",
		title: "HTML",
	},
	{
		icon: "art",
		title: "Juicy Lemon",
	},
	{
		icon: "flag",
		title: "Notice Text",
	},
	{
		icon: "open-folder",
		title: "Tabbed Content",
	},
	{
		icon: "menu",
		title: "Nav Menu",
	},
	{
		icon: "camera",
		title: "Photo",
	},
	{
		icon: "admin-appearance",
		title: "Cover Image",
	},
	{
		icon: "admin-network",
		title: "Password Protected",
	},
	{
		icon: "dashboard",
		title: "Status Graph",
	},
	{
		icon: "admin-links",
		title: "Embed Links",
	},
];

const InserterPreview = ({}) => {
	const ref = useRef(null);

	const { blockJson } = useBlockJson();

	const [focus, setFocus] = useState(false);
	const [name, setName] = useState(null);

	const inserterBlocks = useMemo(
		() => [
			...shuffleArray(RANDOM_BLOCKS).slice(
				0,
				Math.min(6, blockJson.title.length),
			),
			{
				icon: blockJson.icon,
				title: blockJson.title,
				isReal: true,
			},
		],
		[],
	);

	const [_inserterBlocks, setInserterBlocks] = useState(inserterBlocks);

	useEffect(() => {
		setTimeout(() => {
			setFocus(true);
		}, 700);
	}, []);

	useTypedText(
		useCallback((text) => {
			setName(text);
			const newBlocks = [...inserterBlocks.slice(text.length)];
			if (newBlocks.length >= 1) {
				setInserterBlocks(newBlocks);
			}
		}, []),
		{
			text: blockJson.title,
			delay: 2000,
		},
	);

	return (
		<div ref={ref} className={clsx("InserterPreview")}>
			<div className="InserterPreview-search">
				<div
					className={clsx("InserterPreview-searchInput", {
						"has-placeholder": name === null,
						"has-focus": focus,
					})}
				>
					<div>
						<div className="InserterPreview-searchPlaceholder">
							{"Search"}
						</div>
						<div className="InserterPreview-searchValue">
							{name}
						</div>
						<div className="InserterPreview-cursor"></div>
					</div>
					<SearchIcon />
				</div>
			</div>
			<div className="InserterPreview-list">
				<div className="InserterPreview-grid">
					{_inserterBlocks.map(({ icon, title }, index) => (
						<div>
							<div className="InserterPreview-itemIcon">
								<span
									className={`dashicon dashicons dashicons-${icon}`}
								/>
							</div>
							<div className="InserterPreview-itemTitle">
								{title}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="InserterPreview-button">{"Browse all"}</div>
		</div>
	);
};

export default InserterPreview;
