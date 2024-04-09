import { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDebugRenderCount } from "../../hooks";
import { getBlockClassName } from "../../store/block-json";
import { setEditorCss } from "../../store/block-editor-css";
import { setChanged } from "../../store/post-metadata";

import CssEditor from "../CssEditor";
import CssSidebar from "../CssSidebar";

import "./style.css";

const PageEditorCss = memo(() => {
	const dispatch = useDispatch();

	const ref = useRef();

	const [selectionRange, setSelectionRange] = useState({
		from: 0,
		to: 0,
	});

	const className = useSelector((state) => {
		return getBlockClassName(state.blockJson);
	});

	const cssValue = useSelector((state) => state.blockEditorCss.raw);

	const defaultValue = `.${className} {
	/* Add styles here that should by used wherever the block is displayed */
}`;

	const onChange = (value) => {
		dispatch(setEditorCss(value));
		dispatch(setChanged(true));
	};

	const onSelectionChange = (range) => {
		setSelectionRange(range);
	};

	const onInsertVariable = (variableName) => {
		const insertVariable = `var(${variableName})`;

		if (ref?.current?.state && ref?.current?.view) {
			const newCss =
				cssValue.slice(0, selectionRange.from) +
				insertVariable +
				cssValue.slice(selectionRange.to);

			dispatch(setEditorCss(newCss));

			setTimeout(() => {
				ref.current.view.focus();

				ref.current.view.dispatch({
					selection: {
						anchor: selectionRange.from + insertVariable.length,
						head: selectionRange.from + insertVariable.length,
					},
				});
			}, 0);
		}
	};

	if (process.env.NODE_ENV === "development") {
		useDebugRenderCount("PageEditorCss");
	}

	return (
		<div className="PageEditorCss">
			<div className="PageEditorCss-view">
				<CssEditor
					ref={ref}
					onSelectionChange={onSelectionChange}
					onChange={onChange}
					defaultValue={defaultValue}
					value={cssValue}
				/>
				<CssSidebar onInsertVariable={onInsertVariable} />
			</div>
		</div>
	);
});

export default PageEditorCss;
