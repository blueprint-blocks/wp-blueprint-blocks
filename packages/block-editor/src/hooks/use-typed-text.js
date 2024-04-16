import { useEffect } from "react";

const TYPING_SPEED = 1000 / 21;

function useTypedText(handler, { text = "", delay = 0 }) {
	useEffect(() => {
		for (let i = 0; i < text.length; i++) {
			setTimeout(
				() => {
					handler(text.slice(0, i + 1));
				},
				delay + i * TYPING_SPEED,
			);
		}
	}, [handler]);
}

export default useTypedText;
