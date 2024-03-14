import { useContext } from "react";
import { AppContext } from "../contexts";

const useEditorRef = () => {
	const { editorRef } = useContext(AppContext);
	return editorRef;
};

export default useEditorRef;
