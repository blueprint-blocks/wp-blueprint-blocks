const { documentTitle = "" } =
	blueprintBlocksEditorSettings?.editorMetadata || {};

const setDocumentHistory = (id, blockTitle) => {
	window.history.pushState(
		{ id },
		documentTitle.replace("{{ block.title }}", blockTitle),
		`/wp-admin/post.php?post=${id}&action=edit`,
	);
};

export default setDocumentHistory;
