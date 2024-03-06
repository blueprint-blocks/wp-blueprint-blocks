import isObject from "./is-object";

function isStringifiedObject(string) {
	let object = null;

	try {
		object = JSON.parse(string);
	} catch {}

	return isObject(object);
}

export default isStringifiedObject;
