import clsx from "clsx";
import { memo, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getRawJson,
	setCategory,
	setDescription,
	setKeywords,
} from "../../store/block-json";

import { setChanged } from "../../store/post-metadata";

import {
	useDebugRenderCount,
	useFocus,
	useRect,
	useTutorial,
} from "../../hooks";

import BlockIconField from "../BlockIconField";
import BlockNameField from "../BlockNameField";
import BlockTitleField from "../BlockTitleField";
import BlockSupportsField from "../BlockSupportsField";
import JsonEditor from "../JsonEditor";
import ListField from "../ListField";
import SelectField from "../SelectField";
import TextField from "../TextField";

import "./style.css";

const { blockCategories = [] } =
	blueprintBlocksEditorSettings?.editorMetadata || {};

const PageBlockJson = memo(() => {
	const ref = useRef(null);
	const fieldsRef = useRef(null);

	const dispatch = useDispatch();

	const tutorial = useTutorial();

	const gridHeight = useRect(ref, null, "height")?.height || 0;
	const fieldsHeight = useRect(fieldsRef, null, "height")?.height || 0;

	const _blockCategories = useMemo(
		() =>
			blockCategories
				.filter(({ slug }) => !["reusable"].includes(slug))
				.map(({ slug, title }) => ({
					label: title,
					value: slug,
				})),
		[],
	);

	const blockJson = useSelector((state) => getRawJson(state.blockJson));

	const _blockJson = useMemo(
		() =>
			Object.fromEntries(
				Object.entries(blockJson).filter(
					([key, _]) =>
						["$schema", "apiVersion"].includes(key) === false,
				),
			),
		[blockJson],
	);

	const setBlockDescription = (description) => {
		dispatch(setDescription(description));
		dispatch(setChanged(true));
	};

	const setBlockCategory = (category) => {
		dispatch(setCategory(category));
		dispatch(setChanged(true));
	};

	const setBlockKeywords = (keywords) => {
		dispatch(setKeywords(keywords));
		dispatch(setChanged(true));
	};

	const [hasFocus, onBlur, onFocus] = useFocus([]);

	useLayoutEffect(() => {
		if (
			tutorial.isActive &&
			tutorial.currentStep === 4 &&
			fieldsHeight > gridHeight
		) {
			ref?.current?.style?.setProperty(
				"--scroll-offset",
				`-${fieldsHeight - gridHeight}px`,
			);
		} else if (!tutorial.isActive) {
			ref?.current?.style?.setProperty("--scroll-offset", "");
		}
	}, [fieldsHeight, gridHeight, tutorial.isActive, tutorial.currentStep]);

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("PageBlockJson");
	}

	return (
		<div
			className={clsx(
				"PageBlockJson",
				hasFocus.map((focus) => `focus-${focus}`),
			)}
		>
			<div ref={ref} className="PageBlockJson-grid">
				<div ref={fieldsRef} className="PageBlockJson-fields">
					<div
						className="PageBlockJson-fieldset"
						style={{ gap: "var(--1x)" }}
					>
						<BlockNameField
							onBlur={() => onBlur("name")}
							onFocus={() => onFocus("name")}
						/>
					</div>

					<div className="PageBlockJson-fieldset">
						<BlockIconField
							onBlur={() => onBlur("icon")}
							onFocus={() => onFocus("icon")}
						/>
						<BlockTitleField
							onBlur={() => onBlur("title")}
							onFocus={() => onFocus("title")}
						/>
						<TextField
							disabled={tutorial.isActive}
							label="Enter a description..."
							tooltip="blockJson.description"
							multiLine={true}
							rows={4}
							value={blockJson?.description}
							setValue={setBlockDescription}
							onFocus={() => onFocus("description")}
							onBlur={() => onBlur("description")}
						/>
						<ListField
							disabled={tutorial.isActive}
							label="Enter a few keywords..."
							placeholder="Enter a keyword..."
							tooltip="blockJson.keywords"
							value={blockJson?.keywords}
							setValue={setBlockKeywords}
							onFocus={(index) => onFocus("keywords", index)}
							onBlur={(index) => onBlur("keywords", index)}
						/>
						<SelectField
							disabled={tutorial.isActive}
							name="category"
							label="Category"
							tooltip="blockJson.category"
							options={_blockCategories}
							value={blockJson?.category}
							setValue={setBlockCategory}
							onFocus={() => onFocus("category")}
							onBlur={() => onBlur("category")}
						/>
					</div>

					<div className="PageBlockJson-fieldset">
						<div className="PageBlockJson-header">
							<div>{"Block Supports"}</div>
						</div>
						<BlockSupportsField />
					</div>
				</div>
				<div className="PageBlockJson-json">
					<JsonEditor
						focus={hasFocus}
						json={_blockJson}
						placeholders={{
							title: "Enter a title for your block...",
							description:
								"Enter a description for your block...",
							keywords: "Enter a keyword...",
						}}
						values={{
							textdomain: blockJson?.textdomain,
							title: blockJson?.title,
							description: blockJson?.description,
							category: blockJson?.category,
							keywords: blockJson?.keywords,
						}}
					/>
				</div>
			</div>
		</div>
	);
});

export default PageBlockJson;
