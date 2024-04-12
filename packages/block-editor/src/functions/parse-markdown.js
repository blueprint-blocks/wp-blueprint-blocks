function parseMarkdown(string = "") {
	if (typeof string !== "string") {
		return string;
	}

	let _string = string;

	_string = _string.replaceAll(/\`(.*?)\`/g, (match, p1) => {
		return `<code>${p1}</code>`;
	});

	_string = _string.replaceAll(/\*(.*?)\*/g, (match, p1) => {
		return `<strong>${p1}</strong>`;
	});

	return _string;
}

export default parseMarkdown;
