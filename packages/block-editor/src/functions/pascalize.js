import camelize from "./camelize";

function pascalize(string) {
	let formattedString = camelize(string);
	formattedString =
		formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
	return formattedString;
}

export default pascalize;
