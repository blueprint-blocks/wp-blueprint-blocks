import { useEffect } from "react";

// Add handler to effect dependencies
// It's worth noting that because passed in handler is a new ...
// ... function on every render that will cause this effect ...
// ... callback/cleanup to run every render. It's not a big deal ...
// ... but to optimize you can wrap handler in useCallback before ...
// ... passing it into this hook.

function useOnDelete(handler) {
	useEffect(() => {
		const listener = (event) => {
			// Do nothing if key is not backspace
			if (event.key !== "Backspace") {
				return;
			}

			handler(event);
		};

		document.addEventListener("keydown", listener);

		return () => {
			document.removeEventListener("keydown", listener);
		};
	}, [handler]);
}

export default useOnDelete;
