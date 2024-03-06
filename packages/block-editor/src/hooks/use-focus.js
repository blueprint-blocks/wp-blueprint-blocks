import { useMemo, useState } from "react";

function useFocus(initialState = []) {
	const [hasFocus, toggleFocus] = useState(initialState);

	const { onFocus, onBlur } = useMemo(
		() => ({
			onFocus: (...names) => {
				toggleFocus([...hasFocus, ...names]);
			},
			onBlur: (...names) => {
				toggleFocus(hasFocus.filter((focus) => !names.includes(focus)));
			},
		}),
		[],
	);

	return [hasFocus, onBlur, onFocus];
}

export default useFocus;
