import { useSelector } from "react-redux";

function useAppRect() {
	return useSelector((state) => state.app.rect);
}

export default useAppRect;
