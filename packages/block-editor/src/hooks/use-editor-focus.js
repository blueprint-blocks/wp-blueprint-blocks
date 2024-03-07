import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { componentHasFocus, setFocus, unsetFocus } from "../store/editor";

const useEditorFocus = (clientId) => {
	const dispatch = useDispatch();

	const _componentHasFocus = useSelector((state) =>
		componentHasFocus(state.editor, clientId),
	);

	const _setFocus = (context) => {
		dispatch(setFocus(context));
	};

	const _unsetFocus = (unsetRegardlessOfCurrentFocus = false) => {
		if (unsetRegardlessOfCurrentFocus || _componentHasFocus) {
			dispatch(unsetFocus());
		}
	};

	return useMemo(
		() => ({
			hasFocus: _componentHasFocus,
			setFocus: _setFocus,
			unsetFocus: _unsetFocus,
		}),
		[_componentHasFocus],
	);
};

export default useEditorFocus;