const textarea = document.createElement("textarea");

function escapeHtml(html) {
	textarea.textContent = html;
	return textarea.innerHTML.replaceAll("\n", "\\n").replaceAll('"', '\\"');
}

export default escapeHtml;
