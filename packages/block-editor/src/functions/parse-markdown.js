function parseMarkdown(string = "") {
	if (typeof string !== "string") {
		return string;
	}

	return string.replaceAll(/\`(.*?)\`/g, (match, p1) => {
		return `<code>${p1}</code>`;
	});
}

export default parseMarkdown;
