const { documentTitle = "" } =
	blueprintBlocksEditorSettings?.editorMetadata || {};

const setDocumentTitle = (blockTitle) => {
	document.title = documentTitle.replace("{{ block.title }}", blockTitle);
};

export default setDocumentTitle;
