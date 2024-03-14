import { useSelector } from "react-redux";

function useNavRect() {
	return useSelector((state) => state.app.navRect);
}

export default useNavRect;
