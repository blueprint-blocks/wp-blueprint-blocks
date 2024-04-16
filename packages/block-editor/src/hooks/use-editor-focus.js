import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	componentHasFocus,
	getFocus,
	setFocus,
	unsetFocus,
} from "../store/editor";

const useEditorFocus = (clientId) => {
	const dispatch = useDispatch();

	const _componentHasFocus = useSelector((state) =>
		componentHasFocus(state.editor, clientId),
	);

	const currentFocus = useSelector((state) => getFocus(state.editor));

	const _setFocus = useCallback((context) => {
		dispatch(setFocus(context));
	}, []);

	const _unsetFocus = useCallback(
		(unsetRegardlessOfCurrentFocus = false) => {
			if (unsetRegardlessOfCurrentFocus || _componentHasFocus) {
				dispatch(unsetFocus());
			}
		},
		[_componentHasFocus],
	);

	return {
		currentFocus,
		hasFocus: _componentHasFocus,
		setFocus: _setFocus,
		unsetFocus: _unsetFocus,
	};
};

export default useEditorFocus;
