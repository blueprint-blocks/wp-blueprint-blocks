import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import useRect from "./use-rect";
import { setRect } from "../store/app";

function useDispatchAppRect(ref) {
	const dispatch = useDispatch();
	const rect = useRect(ref, null);

	useLayoutEffect(() => {
		dispatch(setRect(rect));
	}, [rect]);
}

export default useDispatchAppRect;
