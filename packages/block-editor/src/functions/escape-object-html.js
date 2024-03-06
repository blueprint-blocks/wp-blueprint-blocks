import escapeHtml from "./escape-html";

function escapeObjectHtml(object) {
	const escapedObject = JSON.parse(JSON.stringify(object));
	const isArray =
		escapedObject &&
		typeof escapedObject === "array" &&
		escapedObject.constructor === Array;
	const isObject =
		escapedObject &&
		typeof escapedObject === "object" &&
		escapedObject.constructor === Object;

	if (isArray || isObject) {
		for (const [key, value] of (isObject &&
			Object.entries(escapedObject)) ||
			escapedObject) {
			if (typeof value === "array" || typeof value === "object") {
				escapedObject[key] = escapeObjectHtml(value);
			} else if (typeof value === "string") {
				escapedObject[key] = escapeHtml(value);
			}
		}
	}

	return escapedObject;
}

export default escapeObjectHtml;
