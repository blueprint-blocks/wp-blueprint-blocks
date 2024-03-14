import useEditorRef from "./use-editor-ref";
import useRect from "./use-rect";

const useEditorRect = () => {
	const editorRef = useEditorRef();
	return useRect(editorRef);
};

export default useEditorRect;
