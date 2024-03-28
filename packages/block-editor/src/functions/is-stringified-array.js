import isArray from "./is-array";

function isStringifiedArray(string) {
	let array = null;

	try {
		array = JSON.parse(string);
	} catch {}

	return isArray(array);
}

export default isStringifiedArray;
