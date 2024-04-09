const { documentTitle = "" } =
	blueprintBlocksEditorSettings?.editorMetadata || {};

const setDocumentTitle = (blockTitle) => {
	document.title = documentTitle.replace("{{ title }}", blockTitle);
};

export default setDocumentTitle;
