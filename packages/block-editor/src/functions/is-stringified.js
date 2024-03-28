function isStringified(string) {
	let isStringified = false;

	try {
		JSON.parse(string);
		isStringified = true;
	} catch {}

	return isStringified;
}

export default isStringified;
