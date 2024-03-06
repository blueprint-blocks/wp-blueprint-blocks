import { forwardRef, useState } from "react";
import { sass, sassLanguage } from "@codemirror/lang-sass";
import { languages } from "@codemirror/language-data";
import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";

import "./style.css";

const CssEditor = forwardRef(
	(
		{
			onChange,
			onSelectionChange,
			defaultValue = "",
			value = "",
			...props
		},
		ref,
	) => {
		const [editorState, setEditorState] = useState(null);
		const [selectionRange, setSelectionRange] = useState({
			from: 0,
			to: 0,
		});

		const onEditorSelectionChange = (range) => {
			onSelectionChange && onSelectionChange(range);
		};

		const onEditorValueChange = (value) => {
			onChange && onChange(value);
		};

		const refCallback = (editor) => {
			if (
				!ref.current &&
				editor?.editor &&
				editor?.state &&
				editor?.view
			) {
				setEditorState(editor.state);
				ref.current = editor;
			}
		};

		return (
			<div className="CssEditor">
				<CodeMirror
					ref={refCallback}
					onChange={onEditorValueChange}
					value={value || defaultValue}
					extensions={[
						sass({
							base: sassLanguage,
							codeLanguages: languages,
						}),
						EditorView.updateListener.of((view) => {
							const currentSelectionRange =
								view.state.selection.asSingle().ranges[0];
							if (
								currentSelectionRange.from !==
									selectionRange.from ||
								currentSelectionRange.to !== selectionRange.to
							) {
								setSelectionRange(currentSelectionRange);
								onEditorSelectionChange(currentSelectionRange);
							}
						}),
					]}
					indentWithTab={true}
					basicSetup={{
						indentUnit: 4,
						indentWithTabs: true,
						tabSize: 4,
					}}
					theme={"dark"}
				/>
			</div>
		);
	},
);

export default CssEditor;
