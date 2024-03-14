import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import useRect from "./use-rect";
import { setNavRect } from "../store/app";

function useDispatchNavRect(ref) {
	const dispatch = useDispatch();
	const rect = useRect(ref, null);

	useLayoutEffect(() => {
		dispatch(setNavRect(rect));
	}, [rect]);
}

export default useDispatchNavRect;
