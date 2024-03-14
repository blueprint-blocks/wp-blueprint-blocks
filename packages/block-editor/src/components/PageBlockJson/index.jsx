import clsx from "clsx";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	getRawJson,
	setCategory,
	setDescription,
	setKeywords,
} from "../../store/block-json";

import { setChanged } from "../../store/post-metadata";

import { useDebugRenderCount, useFocus } from "../../hooks";

import BlockIconField from "../BlockIconField";
import BlockNameField from "../BlockNameField";
import BlockTitleField from "../BlockTitleField";
import BlockSupportsField from "../BlockSupportsField";
import BlockVersionField from "../BlockVersionField";
import JsonEditor from "../JsonEditor";
import ListField from "../ListField";
import SelectField from "../SelectField";
import TextField from "../TextField";

import "./style.css";

const PageBlockJson = memo(() => {
	const dispatch = useDispatch();

	const blockJson = useSelector((state) => getRawJson(state.blockJson));

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
			<div className="PageBlockJson-grid">
				<div className="PageBlockJson-fields">
					<div
						className="PageBlockJson-fieldset"
						style={{ gap: "var(--1x)" }}
					>
						<BlockNameField
							onBlur={() => onBlur("name")}
							onFocus={() => onFocus("name")}
						/>
						<BlockVersionField
							onBlur={() => onBlur("version")}
							onFocus={() => onFocus("version")}
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
							label="Enter a description..."
							tooltip="Hello..."
							multiLine={true}
							rows={4}
							value={blockJson?.description}
							setValue={setBlockDescription}
							onFocus={() => onFocus("description")}
							onBlur={() => onBlur("description")}
						/>
						<ListField
							label="Enter a few keywords..."
							placeholder="Enter a keyword..."
							tooltip="Keywords are used to find your block when searching in the editor."
							value={blockJson?.keywords}
							setValue={setBlockKeywords}
							onFocus={(index) => onFocus("keywords", index)}
							onBlur={(index) => onBlur("keywords", index)}
							max={3}
						/>
						<SelectField
							name="category"
							label="Category"
							tooltip="Hello..."
							options={[
								{
									label: "Common",
									value: "common",
								},
								{
									label: "Layout",
									value: "layout",
								},
							]}
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
						json={blockJson}
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
